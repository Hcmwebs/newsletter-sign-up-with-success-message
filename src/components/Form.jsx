import { useState } from 'react';
import { Button } from './index';

const Form = ({ setIsSubmitted }) => {
	const initialState = { email: '' };
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email } = values;
		if (!email) return;
		setIsSubmitted(true);
		setValues(initialState);
	};
	return (
		<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 w-full'>
			<div className='form-control'>
				<label htmlFor='email' className='label'>
					Email address
				</label>
				<input
					type='email'
					name='email'
					id='email'
					value={values.email}
					onChange={handleChange}
					placeholder='email@email.com'
					className='input input-bordered input-base-100 bg-transparent text-base-100 focus:outline-none focus:border-2 focus:border-base-100 focus:invalid:border-primary'
				/>
			</div>
			<div className='card-actions justify-end'>
				<Button
					type='submit'
					text='Subscribe to monthly newsletter'
					className='btn bg-base-100 btn-block hover:bg-primary border-0 transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary hover:text-white'
				/>
			</div>
		</form>
	);
};

export default Form;
