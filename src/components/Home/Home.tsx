import Button from '../Button/Button';
import Hero from './Hero';
import helpDesk from '../../assets/svg/carbon_help-desk.svg';
import handsHelping from '../../assets/svg/la_hands-helping.svg';
import money from '../../assets/svg/vaadin_money-exchange.svg';
import barapackLogo from '../../assets/svg/barapack_logo.svg';
import Flag from './Flag';
import Logo from '../NavBar/Logo';

const Home = () => {
	return (
		<>
			<Hero>
				<section className='absolute top-1/2 md:left-[20%] px-2 md:px-0 text-center md:text-left -translate-y-1/2 text-white'>
					<h1 className='text-5xl tracking-widest text-shadow-custom'>
						Barapack
					</h1>
					<p className='md:w-2/3 mt-12 text-lg text-shadow-custom'>
						Confianza y seguridad, respaldadas por una sólida estructura
						de servicio.
					</p>

					<Button
						content='Contactanos'
						borderStyles='px-12'
						styles='mt-8 md:mt-4 bg-[#E84E38] px-2 py-2 text-white hover:text-white border border-[#E09D94]'
					/>
				</section>
			</Hero>
			<section className='flex flex-col items-center text-white'>
				<h2 className='flex flex-col mt-20 mb-16 text-shadow-custom text-2xl md:text-3xl font-semibold text-center text-[#E84E38]'>
					<span>No sólo transportamos cargas</span>
					<span>
						Entregamos confianza, dedicación y soluciones personalizadas
					</span>
				</h2>
				<section className='flex flex-col items-center gap-4 px-2 w-full'>
					<Flag icon={helpDesk} color='bg-[#E84E38]'>
						Atendemos las necesidades de cada cliente
					</Flag>
					<Flag icon={handsHelping} color='bg-[#B5240F]'>
						Planes a la medida de tu empresa
					</Flag>
					<Flag icon={money} color='bg-[#7D1507]'>
						Precios competitivos sin sacrificar la calidad del servicio
					</Flag>
				</section>
				<section className='relative flex flex-col items-center md:py-8'>
					<h3 className='px-2 text-lg md:text-2xl text-black font-semibold'>
						Servicios eficientes impulsan tu éxito
					</h3>
					<figure className='hidden md:block absolute top-16 h-20 my-4'>
						<Logo logo={barapackLogo} styles='w-full h-full' />
					</figure>
				</section>
			</section>
		</>
	);
};

export default Home;
