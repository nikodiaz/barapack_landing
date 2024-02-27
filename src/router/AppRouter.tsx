import { Route, Routes } from 'react-router-dom';
import App from '../App';
import About from '../components/About/About';
import Main from '../components/Main';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<App children={<Main />} />} />
			<Route path='/about' element={<App children={<About />} />} />
		</Routes>
	);
};

export default AppRouter;
