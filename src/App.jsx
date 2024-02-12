import { Card, CardSuccess } from './components';
import { useGlobalContext } from './context/GlobalContext';
const App = () => {
	const { isSubmitted } = useGlobalContext();
	return <>{!isSubmitted ? <Card /> : <CardSuccess />}</>;
};

export default App;
