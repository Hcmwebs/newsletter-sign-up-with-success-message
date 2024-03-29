import { Button } from './index';
import { useGlobalContext } from '../context/GlobalContext';

const Form = () => {
	const { handleSubmit, handleChange, error, values } = useGlobalContext();

	return (
		<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 w-full'>
			<div className='form-control'>
				<label htmlFor='email' className='label text-xs font-bold'>
					Email address <span className='text-xs text-primary'>{error}</span>
				</label>
				<input
					type='email'
					name='email'
					id='email'
					value={values.email}
					onChange={handleChange}
					placeholder='email@email.com'
					className='input input-bordered input-[rgba(25, 24, 43, 0.25)] bg-transparent text-base-100 focus:outline-none focus:border-2 focus:border-base-100 
invalid:border-2 invalid:border-primary invalid:text-primary
					focus:invalid:border-primary focus:invalid:text-primary
focus:invalid:bg-primary/15'
				/>
			</div>
			<div className='card-actions justify-end'>
				<Button
					type='submit'
					text='Subscribe to monthly newsletter'
					className='btn bg-base-100 btn-block hover:bg-primary border-0 transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/50 hover:bg-gradient-to-b from-primary to-secondary hover:text-white font-bold'
				/>
			</div>
		</form>
	);
};

export default Form;
