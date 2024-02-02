import React from 'react';

const Title = ({ header, text }) => {
	return (
		<div className='grid grid-cols-1 gap-y-6'>
			<h1 className='text-4xl'>{header}</h1>
			<p className='text-base'>{text}</p>
		</div>
	);
};

export default Title;
