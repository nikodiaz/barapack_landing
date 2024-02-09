import Button from '../Button/Button';
import Hero from './Hero';

const Home = () => {
	return (
		<Hero>
			<section className='absolute top-1/2 left-1/4 -translate-y-1/2 text-white'>
				<h1 className='text-5xl drop-shadow-md tracking-widest'>
					Barapack
				</h1>
				<p className='w-2/3 mt-4 text-lg drop-shadow-md'>
					Confianza y seguridad, respaldadas por una sólida estructura de
					servicio.
				</p>

				<Button
					content='Contactanos'
					styles='mt-4 bg-[#E84E38] px-2 py-2 text-white hover:text-white'
				/>
			</section>
		</Hero>
	);
};

export default Home;
