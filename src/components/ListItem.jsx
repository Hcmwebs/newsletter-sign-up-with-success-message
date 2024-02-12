import React from 'react';

const ListItem = ({ text }) => {
	return (
		<li className='h-[21px] bg-[url(./assets/icon-list.svg)] bg-no-repeat bg-[0_50%] pl-7'>
			{text}
		</li>
	);
};

export default ListItem;
