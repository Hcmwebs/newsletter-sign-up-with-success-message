import { useGlobalContext } from '../context/GlobalContext';
import { CardSuccessImage, Title, Button } from './index';

const CardSuccess = () => {
	const { values, handleReset } = useGlobalContext();
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<div className='flex flex-col  justify-center items-start gap-y-10 w-[375px] h-[842px] px-6 lg:w-[504px] lg:h-[520px] shadow-xl rounded-none bg-white text-base-100 lg:rounded-[36px] lg:px-16 lg:gap-y-10'>
				<CardSuccessImage />
				<Title
					header='Thanks for subscribing!'
					text1='A confirmation email has been sent to '
					textSpan={` ${values.email}. `}
					text2='Please open it and click the button inside to confirm your subscription'
				/>
				<Button
					type='button'
					text='Dismiss message'
					onClick={handleReset}
					className='btn btn-base-100 btn-block mt-60 lg:mt-0 text-white border-0 hover:shadow-2xl hover:shadow-primary/50 hover:bg-gradient-to-b from-primary to-secondary'
				/>
			</div>
		</main>
	);
};

export default CardSuccess;
