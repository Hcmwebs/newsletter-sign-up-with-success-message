import { Form, List, Title } from './index';

const CardBody = () => {
	return (
		<div className='self-center px-6 py-10 lg:px-0 lg:w-full lg:max-w-[376px] grid gap-y-10'>
			<header className='grid gap-y-6'>
				<Title
					header='Stay updated!'
					text1='Join 60,000+ product managers receiving monthly updates on:'
				/>
				<List />
			</header>
			<footer>
				<Form />
			</footer>
		</div>
	);
};

export default CardBody;
