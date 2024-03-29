import Image from './Image';
import casa_universal from '../../assets/img/casa_universal.webp';
import dil from '../../assets/img/dil.webp';
import fema from '../../assets/img/fema.webp';
import gruphogar from '../../assets/img/gruphogar.webp';

const Brands = () => {
	return (
		<section
			className='flex flex-col items-center pb-8'
			data-aos='fade-up'
			data-aos-anchor-placement='top-center'
		>
			<h2 className='text-2xl mb-16'>Trabajan con nosotros</h2>
			<div className='flex flex-wrap justify-center gap-x-8 w-full px-2 lg:w-1/2'>
				<Image
					src={casa_universal}
					alt='Barapack Logo'
					styles='w-64 h-32 object-contain'
					container='w-64 h-32'
				/>
				<Image
					src={dil}
					alt='Barapack Logo'
					styles='w-24 h-32 object-contain'
					container='w-32 h-32'
				/>
				<Image
					src={gruphogar}
					alt='Barapack Logo'
					styles='w-32 h-32 object-contain'
					container='w-32 h-32'
				/>
				<Image
					src={fema}
					alt='Barapack Logo'
					styles='w-64 h-32 object-contain'
					container='w-64 h-32'
				/>
			</div>
		</section>
	);
};

export default Brands;
