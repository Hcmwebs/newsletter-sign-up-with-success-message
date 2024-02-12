import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const initialState = { email: '' };
	const [values, setValues] = useState(initialState);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email } = values;
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const isValidEmail = emailRegex.test(email);

		if (!email || !isValidEmail) {
			setError('Valid Email required');
			return;
		}
		setError('');
		setIsSubmitted(!isSubmitted);
		setValues({ ...values, initialState });
	};

	const handleReset = () => {
		setIsSubmitted(false);
		setValues(initialState);
	};
	return (
		<AppContext.Provider
			value={{
				isSubmitted,
				values,
				error,
				handleChange,
				handleSubmit,
				handleReset,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
