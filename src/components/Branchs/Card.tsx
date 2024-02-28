interface Props {
	img: string;
	title: string;
}
const Card: React.FC<Props> = ({ img, title }) => {
	return (
		<article className='relative flex flex-col w-full md:w-96 pt-4 rounded-md shadow-xl h-32 md:h-full card-shadow roun'>
			<figure className='h-full md:h-[410px]'>
				<img
					className='w-full h-full object-cover rounded-lg md:rounded-t-md'
					alt={title}
					src={img}
				/>
			</figure>
			<figcaption className='absolute z-10 top-12 left-0 right-0 md:static py-12 text-white md:text-black text-center text-xl md:text-3xl text-shadow-custom'>
				<h3>{title}</h3>
			</figcaption>
		</article>
	);
};

export default Card;
