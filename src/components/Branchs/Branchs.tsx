import bs_as from '../../assets/img/bs_as.png';
import cordoba from '../../assets/img/cordoba.png';
import rosario from '../../assets/img/rosario.png';
import Button from '../Button/Button';
import Card from './Card';

const Branchs = () => {
	return (
		<section className='flex flex-col items-center py-12 px-4 md:px-0'>
			<div className='flex flex-col items-center gap-8 text-3xl text-[#E84E38]'>
				<h2>Nuestra red</h2>
				<p className='text-xl text-black'>
					Encuentra nuestra sucursal más cercana
				</p>
			</div>
			<div className='flex flex-wrap flex-col md:flex-row items-center gap-8 md:gap-0 justify-evenly py-12 w-full'>
				<Card img={rosario} title='Rosario' />
				<Card img={bs_as} title='Buenos Aires' />
				<Card img={cordoba} title='Córdoba' />
			</div>
			<Button
				borderStyles='px-8'
				content='Contactanos'
				styles='mt-4 bg-[#E84E38] px-2 py-2 text-white hover:text-white border border-[#E09D94]'
			/>
		</section>
	);
};

export default Branchs;
