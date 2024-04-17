import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../router/ScrollToTop';
import App from '../App';
import About from '../components/About/About';
import Main from '../components/Main';

const AppRouter = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<App children={<Main />} />} />
				<Route path='/about' element={<App children={<About />} />} />
			</Routes>
		</>
	);
};

export default AppRouter;
