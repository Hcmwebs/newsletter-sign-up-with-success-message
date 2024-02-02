import { useState } from 'react';
import smallScreen from '../assets/illustration-sign-up-mobile.svg';
import largeScreen from '../assets/illustration-sign-up-desktop.svg';

const CardImage = () => {
	return (
		<>
			<picture>
				<source media='(max-width:1000px)' srcSet={smallScreen} />
				<source media='(min-width:1028px)' srcSet={largeScreen} />
				<img src={largeScreen} alt='Sign-up' className='rounded-b-2xl' />
			</picture>
		</>
	);
};

export default CardImage;
