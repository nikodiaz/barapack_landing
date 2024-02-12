import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';

function App() {
	return (
		<main className='mt-[80px] font-roboto-slab font-[500] max-w-[1360px] mx-auto'>
			<Navbar />
			<Home />
			<Contact />
		</main>
	);
}

export default App;
