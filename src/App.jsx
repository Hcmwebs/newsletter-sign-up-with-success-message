import smallScreen from './assets/illustration-sign-up-mobile.svg';
import largeScreen from './assets/illustration-sign-up-desktop.svg';
const App = () => {
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<div className='card w-[375px] lg:w-[928px] lg:h-[641px] lg:flex-row-reverse shadow-xl rounded-none bg-white text-base-100 lg:rounded-2xl lg:p-6 lg:gap-x-16'>
				<picture>
					<source media='(max-width:800px)' srcSet={smallScreen} />
					<source media='(min-width:900px)' srcSet={largeScreen} />
					<img src={largeScreen} alt='Sign-up' className='rounded-b-2xl' />
				</picture>
				<div className='card-body self-center grid grid-col-1 gap-y-10'>
					<div className='grid grid-cols-1 gap-y-6'>
						<h2 className='card-title text-4xl'>Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className='grid grid-cols-1 items-start'>
							<ul className='list-inside list-image-[url(./assets/icon-list.svg)] grid gap-y-3'>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
							</ul>
						</div>
					</div>

					<form className='grid grid-cols-1 gap-y-6 w-full'>
						<div className='form-control'>
							<label htmlFor='email' className='label'>
								Email address
							</label>
							<input
								type='text'
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
				</div>
			</div>
		</main>
	);
};

export default App;
