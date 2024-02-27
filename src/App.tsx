import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';

function App({ children }: { children: React.ReactNode }) {
	return (
		<main className='mt-[80px] font-roboto-slab font-[500] max-w-[1360px] mx-auto overflow-x-hidden'>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}

export default App;
