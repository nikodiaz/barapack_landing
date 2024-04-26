import { ReactNode, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import Aos from 'aos';
import { Toaster } from 'react-hot-toast';
import ButtonScrollToTop from './components/Home/ButtonScrollToTop';
import ReactGA from 'react-ga4';

function App({ children }: { children: ReactNode }) {
	useEffect(() => {
		Aos.init({
			duration: 500,
			offset: 120,
			once: true,
		});
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []);

	return (
		<main className='relative mt-[80px] font-roboto-slab font-[500] mx-auto overflow-x-hidden'>
			<Navbar />
			<Toaster position='bottom-center' />
			{children}
			<ButtonScrollToTop />
			<Footer />
		</main>
	);
}

export default App;
