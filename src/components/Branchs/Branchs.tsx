import { useMemo, useState } from 'react';
import bs_as from '../../assets/img/bs_as.png';
import cordoba from '../../assets/img/cordoba.png';
import rosario from '../../assets/img/rosario.png';
import Button from '../Button/Button';
import Map from '../Map/Map';
import MapLayout from '../Map/MapLayout';
import Card from './Card';
import PopUpCard from './PopUpCard';

const Branchs = () => {
	const branchs = useMemo(
		() => [
			{
				title: 'Rosario',
				img: rosario,
				address: 'Av. Ovidio Lagos 6726',
				phones: '+54 341 487 1234',
				hours: 'Lunes a Viernes de 9:00 a 18:00',
				coords: [-33.0163022, -60.6816149],
			},
			{
				title: 'Buenos Aires',
				img: bs_as,
				address: 'Pepiri 1321 - Pomeya - CABA',
				phones: '+54 341 487 1234',
				hours: 'Lunes a Viernes de 9:00 a 18:00',
				coords: [-34.6535252, -58.4116283],
			},
			{
				title: 'Cordoba',
				img: cordoba,
				address: 'Av. Ovidio Lagos 6726',
				phones: '+54 341 487 1234',
				hours: 'Lunes a Viernes de 9:00 a 18:00',
				coords: [-31.4215777, -64.1052784],
			},
		],
		[],
	);
	const [open, setOpen] = useState<boolean>(false);
	const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);

	const handleBranchSelect = (index: number) => {
		setSelectedBranchIndex(index);
	};

	const selectedBranch = useMemo(
		() => branchs[selectedBranchIndex],
		[branchs, selectedBranchIndex],
	);

	const branchCards = useMemo(() => {
		return branchs.map((branch, index) => (
			<Card
				setOpen={() => setOpen(true)}
				key={branch.title}
				img={branch.img}
				title={branch.title}
				handleClick={() => handleBranchSelect(index)}
			/>
		));
	}, [branchs]);

	return (
		<section className='flex flex-col items-center pt-36 py-12 px-4 md:px-0 w-full'>
			<div className='flex flex-col items-center gap-8 text-3xl text-[#E84E38]'>
				<h2>Nuestra red</h2>
				<p className='text-xl text-black'>
					Encuentra nuestra sucursal más cercana
				</p>
			</div>
			<div className='relative flex flex-wrap flex-col md:flex-row items-center gap-8 md:gap-0 justify-evenly py-12 w-full'>
				{branchCards}
				<PopUpCard
					open={open}
					setOpen={() => setOpen(false)}
					data={selectedBranch}
				/>
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
