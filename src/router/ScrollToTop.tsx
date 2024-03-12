import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		const { state } = location;
		if (state && state.scrollTo) {
			const element = document.getElementById(state.scrollTo);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo(0, 0);
		}
	}, [location]);

	return null;
};

export default ScrollToTopOnRouteChange;
