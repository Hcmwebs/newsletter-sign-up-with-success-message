import { listItems } from '../data/Data';
import { ListItem } from './index';

const List = () => {
	return (
		<div>
			<ul className='grid grid-col-1 justify-start align-middle items-center list-inside gap-y-7 leading-6'>
				{listItems.map((item) => {
					return <ListItem key={item.id} {...item} />;
				})}
			</ul>
		</div>
	);
};

export default List;
