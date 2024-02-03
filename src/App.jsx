import { useState } from 'react';
import { Card, CardSuccess } from './components';
const App = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	return (
		<>
			{!isSubmitted ? (
				<Card setIsSubmitted={setIsSubmitted} />
			) : (
				<CardSuccess />
			)}
		</>
	);
};

export default App;
