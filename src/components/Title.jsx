import React from 'react';

const Title = ({ header, text1, textSpan, text2 }) => {
	return (
		<div className='grid grid-cols-1 gap-y-6'>
			<h1 className='text-4xl lg:text-5xl font-bold'>{header}</h1>
			<p className='text-base font-normal'>
				{text1}
				<b>{textSpan}</b>
				{text2}
			</p>
		</div>
	);
};

export default Title;
