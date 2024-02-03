import { CardImage, CardBody } from './index';

const Card = ({ setIsSubmitted }) => {
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<div className='card w-[375px] max-h-[842px] lg:w-[928px] lg:h-[641px] lg:flex-row-reverse shadow-xl rounded-none bg-white text-base-100 lg:rounded-2xl lg:p-6 lg:gap-x-16'>
				<CardImage />
				<CardBody setIsSubmitted={setIsSubmitted} />
			</div>
		</main>
	);
};

export default Card;
