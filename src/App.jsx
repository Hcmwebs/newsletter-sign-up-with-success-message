import { useState } from 'react';
import { Card, CardSuccess } from './components';
const App = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	return (
		<>{isSubmitted ? <Card isSubmitted={isSubmitted} /> : <CardSuccess />};</>
	);
};

export default App;
