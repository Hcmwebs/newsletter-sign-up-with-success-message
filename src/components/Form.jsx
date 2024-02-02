import { useState } from 'react';

const Form = () => {
	const [isSubmitted, setSubmitted] = useState(false);
	const [email, setEmail] = useState('');
	const handleChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;

		setEmail('');
		setSubmitted(true);
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
					value={email}
					onChange={handleChange}
					placeholder='email@email.com'
					className='input input-bordered input-base-100 bg-transparent text-base-100 focus:outline-none focus:border-2 focus:border-base-100 invalid:border-primary'
				/>
			</div>
			<div className='card-actions justify-end'>
				<button
					type='submit'
					className='btn bg-base-100 btn-block hover:bg-primary border-0 transition duration-300 ease-in-out'
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
