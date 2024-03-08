import { useState } from 'react';
import bs_as from '../../assets/img/bs_as.png';
import cordoba from '../../assets/img/cordoba.png';
import rosario from '../../assets/img/rosario.png';
import Button from '../Button/Button';
import Map from '../Map/Map';
import MapLayout from '../Map/MapLayout';
import Card from './Card';

const Branchs = () => {
	const branchs = [
		{
			id: 0,
			title: 'Rosario',
			img: rosario,
			address: 'Av. Ovidio Lagos 6726',
			phones: '+54 341 487 1234',
			hours: 'Lunes a Viernes de 9:00 a 18:00',
			coords: [-33.0160433, -60.6786433],
		},
		{
			id: 1,
			title: 'Buenos Aires',
			img: bs_as,
			address: 'Pepiri 1321 - Pomeya - CABA',
			phones: '+54 341 487 1234',
			hours: 'Lunes a Viernes de 9:00 a 18:00',
			coords: [-34.6535016, -58.4070519],
		},
		{
			id: 2,
			title: 'Cordoba',
			img: cordoba,
			address: 'Parque Industrial, POLO 52',
			phones: '+54 341 487 1234',
			hours: 'Lunes a Viernes de 9:00 a 18:00',
			coords: [-31.4215478, -64.1026972],
		},
	];

	const [selectedBranch, setSelectedBranch] = useState(branchs[0]);

	const handleBranchSelect = (id: number) => {
		setSelectedBranch(branchs[id]);
		const mapElement = document.getElementById('map');
		if (mapElement) {
			mapElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='branchs'
			data-aos='fade-up'
			data-aos-anchor-placement='top-center'
			className='flex flex-col items-center pt-36 py-12 px-4 md:px-0 w-full'
		>
			<div className='flex flex-col items-center gap-8 text-3xl text-[#E84E38]'>
				<h2>Nuestra red</h2>
				<p className='text-xl text-black'>
					Encuentra nuestra sucursal más cercana
				</p>
			</div>
			<div className='relative flex flex-wrap flex-col md:flex-row items-center gap-8 md:gap-0 justify-evenly py-12 w-full'>
				{branchs.map((branch) => (
					<Card
						key={branch.title}
						img={branch.img}
						title={branch.title}
						handleClick={() => handleBranchSelect(branch.id)}
					/>
				))}
			</div>
			<a href='#contact'>
				<Button
					borderStyles='px-8'
					content='Contactanos'
					styles='mt-4 bg-[#E84E38] px-2 py-2 text-white hover:text-white border border-[#E09D94]'
				/>
			</a>
			<MapLayout data={selectedBranch}>
				<Map data={selectedBranch} />
			</MapLayout>
		</section>
	);
};

export default Branchs;
