import { useWindowSize } from 'react-use';
import Button from '../Button/Button';
import { FC } from 'react';

interface Props {
	img: string;
	title: string;
	handleClick: () => void;
}
const Card: FC<Props> = ({ img, title, handleClick }) => {
	const { width } = useWindowSize();
	return (
		<article className='branchs relative flex flex-col w-full md:w-96 rounded-md shadow-xl h-32 md:h-full card-shadow roun'>
			<figure className='h-full md:h-[410px]'>
				<img
					className='w-full h-full object-cover md:rounded-t-md md:rounded-b-none rounded-lg'
					alt={title}
					src={img}
				/>
			</figure>
			<figcaption
				onClick={() => {
					width < 768 && handleClick();
				}}
				className='absolute z-10 top-12 left-0 right-0 md:static flex flex-col items-center justify-center gap-4 py-6 text-white md:text-black text-center text-xl md:text-3xl'
			>
				<h3>{title}</h3>
				<Button
					content='Ver en mapa'
					onclick={handleClick}
					styles='hidden md:block p-2 w-1/3 text-base border-[0.5px] border-[#E09D94]'
				/>
			</figcaption>
		</article>
	);
};

export default Card;
