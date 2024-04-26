import { FC, useEffect, useRef, useState } from 'react';
import MapLayout from './MapLayout';
import Map from './Map';

interface Props {
	data: {
		title: string;
		img: string;
		address: string;
		phones: string;
		hours: string;
		coords: number[];
	};
}

const LazyMap: FC<Props> = ({ data }) => {
	const [show, setShow] = useState<boolean>(false);
	const elementRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const onChange = (entries: IntersectionObserverEntry[]) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				obs.disconnect();
			}
		};

		const obs = new IntersectionObserver(onChange, {
			root: null,
			rootMargin: '100px',
			threshold: 0.5,
		});

		obs.observe(elementRef.current!);
	}, []);

	return (
		<div ref={elementRef}>
			{show ? (
				<MapLayout data={data}>
					<Map data={data} />
				</MapLayout>
			) : null}
		</div>
	);
};

export default LazyMap;
