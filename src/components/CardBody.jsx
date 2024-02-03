import { Form, List, Title } from './index';

const CardBody = ({ setIsSubmitted }) => {
	return (
		<div className='card-body self-center grid grid-col-1 gap-y-10>'>
			<Title header='Header card ' text='ksdhkshkhdksnnsdnkdsnkdsnksnfsdnsd' />
			<List />
			<Form setIsSubmitted={setIsSubmitted} />
		</div>
	);
};

export default CardBody;
