interface Props {
	img: string;
	title: string;
}
const Card: React.FC<Props> = ({ img, title }) => {
	return (
		<article className='flex flex-col w-96 rounded-md shadow-xl'>
			<figure className='h-[410px]'>
				<img
					className='w-full h-full object-cover rounded-t-md'
					src={img}
				/>
			</figure>
			<figcaption className='py-12 text-center text-3xl'>
				<h3>{title}</h3>
			</figcaption>
		</article>
	);
};

export default Card;
