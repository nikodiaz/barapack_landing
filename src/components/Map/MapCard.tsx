interface Props {
	img: string;
	title: string;
	address: string;
	phones: string;
	hours: string;
}
const Card: React.FC<Props> = ({ img, title, address, phones, hours }) => {
	return (
		<article className='relative flex flex-col w-full md:w-80 lg:w-96 mb-8 md:mb-0 rounded-l-md shadow-xl md:h-[500px]'>
			<figure className='hidden md:block h-full md:h-[400px]'>
				<img
					className='w-full h-full object-cover map-image rounded-tl-md'
					alt={title}
					src={img}
				/>
			</figure>
			<div className='pb-16 h-40 text-black text-left px-4 text-base'>
				<h3 className='text-2xl text-center py-4'>{title}</h3>
				<p>
					Dirección:
					<span className='font-normal'>{' ' + address}</span>
				</p>
				<p>
					Teléfonos:
					<span className='font-normal'>{' ' + phones}</span>
				</p>
				<p>
					Horarios:
					<span className='font-normal'>{' ' + hours}</span>
				</p>
			</div>
		</article>
	);
};

export default Card;
