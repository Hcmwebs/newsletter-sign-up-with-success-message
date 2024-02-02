import successIcon from '../assets/icon-success.svg';

const CardSuccessImage = () => {
	return (
		<picture>
			<source media='(max-width:1000px)' srcSet={successIcon} />
			<source media='(min-width:1028px)' srcSet={successIcon} />
			<img src={success} alt='success icon' className='rounded-b-2xl' />
		</picture>
	);
};

export default CardSuccessImage;
