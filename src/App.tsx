import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import Aos from 'aos';
import { Toaster } from 'react-hot-toast';
import ButtonScrollToTop from './components/Home/ButtonScrollToTop';

function App({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<main className='relative mt-[80px] font-roboto-slab font-[500] max-w-[1360px] mx-auto overflow-x-hidden'>
			<Navbar />
			<Toaster position='bottom-center' />
			{children}
			<ButtonScrollToTop />
			<Footer />
		</main>
	);
}

export default App;
