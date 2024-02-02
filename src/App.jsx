const App = () => {
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<div className='card w-full max-w-[375px] shadow-xl rounded-none bg-white text-base-100'>
				<figure>
					<img
						src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
						alt='Shoes'
						className='rounded-b-2xl'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-4xl'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='w-full grid grid-cols-1 items-start'>
						<ul
							role='list'
							className='list-inside list-image-[url(./assets/icon-list.svg)] grid gap-y-3'
						>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
						</ul>
					</div>
					<form className='grid grid-cols-1 gap-y-6'>
						<div className='form-control'>
							<label htmlFor='email' className='label'>
								Email
							</label>
							<input
								type='text'
								className='input input-bordered input-base-100 bg-transparent text-base-100 focus:outline-none focus:border-2 focus:border-base-100 invalid:border-primary'
							/>
						</div>
						<div className='card-actions justify-end'>
							<button className='btn bg-base-100 btn-block hover:bg-base-200 transition duration-300 ease-in-out'>
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
