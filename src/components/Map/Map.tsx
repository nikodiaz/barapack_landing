import { useEffect } from 'react';
import { Marker, TileLayer, useMap } from 'react-leaflet';

type data = {
	title: string;
	img: string;
	address: string;
	phones: string;
	hours: string;
	coords: number[];
};

const Map = ({ data }: { data: data }) => {
	const map = useMap();

	useEffect(() => {
		map.flyTo([data.coords[0], data.coords[1]], 17);
	}, [map, data.coords]);

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[data.coords[0], data.coords[1]]} />
		</>
	);
};

export default Map;
