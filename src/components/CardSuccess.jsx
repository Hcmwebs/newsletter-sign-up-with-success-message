import { CardSuccessImage, Title, Button } from './index';

const CardSuccess = () => {
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<div className='grid grid-col-1 place-items-center w-[375px] h-[842px] px-6 lg:w-[504px] lg:h-[520px] shadow-xl rounded-none bg-white text-base-100 lg:rounded-[36px] lg:px-16 lg:gap-y-10'>
				<div className='grid grid-cols-1 gap-y-10'>
					<CardSuccessImage />
					<Title
						header='Thanks for subscribing!'
						text='A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription'
					/>
				</div>

				<Button
					type='button'
					text='Dismiss message'
					className='btn btn-base-100 btn-block text-white border-0 hover:shadow-2xl hover:shadow-primary hover:bg-primary'
				/>
			</div>
		</main>
	);
};

export default CardSuccess;
