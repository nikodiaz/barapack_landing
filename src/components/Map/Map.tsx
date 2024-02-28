import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MapCard from './MapCard';
import rosario from '../../assets/img/rosario.png';

const Map = () => {
	return (
		<section className='flex flex-col-reverse md:flex-row items-center justify-center md:my-8'>
			<MapCard
				title='Rosario'
				img={rosario}
				address='Av. Ovidio Lagos 6726'
				phones='+54 341 487 1234'
				hours='Lunes a Viernes de 9:00 a 18:00'
			/>
			<MapContainer
				center={[-30.75, -59.65]}
				zoom={19}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[-30.75, -59.65]} />
			</MapContainer>
		</section>
	);
};

export default Map;
