import { MapContainer } from 'react-leaflet';
import MapCard from './MapCard';
import { useEffect, useState } from 'react';

interface Props {
	data: {
		title: string;
		img: string;
		address: string;
		phones: string;
		hours: string;
		coords: number[];
	};
	children: React.ReactNode;
}
const MapLayout: React.FC<Props> = ({ data, children }) => {
	const [center, setCenter] = useState<[number, number]>([
		data.coords[0],
		data.coords[1],
	]);

	// Actualizar el centro del mapa cuando cambian las coordenadas
	useEffect(() => {
		setCenter([data.coords[0], data.coords[1]]);
	}, [data.coords]);

	return (
		<section
			data-aos='fade-up'
			data-aos-anchor-placement='top-center'
			id='map'
			className='flex flex-col-reverse md:flex-row items-center justify-center py-20 w-[100vw]'
		>
			<MapCard
				title={data.title}
				img={data.img}
				address={data.address}
				phones={data.phones}
				hours={data.hours}
			/>

			<MapContainer center={center} zoom={17} scrollWheelZoom={false}>
				{children}
			</MapContainer>
		</section>
	);
};

export default MapLayout;
