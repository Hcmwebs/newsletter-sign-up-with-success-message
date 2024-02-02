import { useState } from 'react';
import { Card, CardSuccess } from './components';
const App = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	if (isSubmitted === 'true') {
		return (
			<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
				<CardSuccess />
			</main>
		);
	}
	return (
		<main className='w-[90vw] max-w-[1440px] min-h-screen my-0 mx-auto grid grid-cols-1 place-items-center'>
			<Card />
		</main>
	);
};

export default App;
