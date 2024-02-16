import Branchs from './components/Branchs/Branchs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';

function App() {
	return (
		<main className='mt-[80px] font-roboto-slab font-[500] max-w-[1360px] mx-auto'>
			<Navbar />
			<Home />
			<Contact />
			<Branchs />
			<Footer />
		</main>
	);
}

export default App;
