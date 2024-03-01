import { FaMapMarkerAlt } from 'react-icons/fa';

interface Props {
	img: string;
	title: string;
	handleClick: () => void;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Card: React.FC<Props> = ({ img, title, handleClick, setOpen }) => {
	return (
		<article className='relative flex flex-col w-full md:w-96 mt-8 rounded-md shadow-xl h-32 md:h-full card-shadow roun'>
			<figure className='h-full md:h-[410px]'>
				<img
					className='w-full h-full object-cover md:rounded-t-md md:rounded-b-none rounded-lg'
					alt={title}
					src={img}
				/>
			</figure>
			<figcaption
				onClick={() => setOpen(true)}
				className='absolute z-10 top-12 left-0 right-0 md:static flex items-center justify-center py-12 text-white md:text-black text-center text-xl md:text-3xl text-shadow-custom'
			>
				<h3>{title}</h3>
			</figcaption>
			<button
				onClick={handleClick}
				className='absolute z-20 right-2 md:right-8 top-20 md:-bottom-40'
				title='Ver en el mapa'
			>
				<FaMapMarkerAlt className='text-3xl md:text-5xl text-[#247dc9]' />
			</button>
		</article>
	);
};

export default Card;
