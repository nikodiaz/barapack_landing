import { FC } from 'react';

interface Props {
	testimonial: {
		id: number;
		name: string;
		comment: string;
		image: string;
	};
}
const Card: FC<Props> = ({ testimonial }) => {
	return (
		<article className='flex flex-col flex-grow items-center justify-center p-4 mx-2 my-8 md:h-96 rounded-lg shadow-lg'>
			<div className='relative flex items-center justify-center w-28 min-h-14 p-2 rounded-b-full inner-shadow-custom'>
				<div className='absolute -top-12 bg-gradient-to-br from-[#FBEDA5] to-[#F4D00E] rounded-full p-1 shadow-lg'>
					<div className='bg-gradient-to-br from-[#F0DF46] to-[#D9A41D] rounded-full p-1'>
						<img
							className='w-20 h-20 object-cover rounded-full'
							alt={testimonial.name}
							src={testimonial.image}
						/>
					</div>
				</div>
			</div>

			<h3 className='text-xl mb-4 pt-2'>{testimonial.name}</h3>
			<div className='p-3 bg-[#FAEDEB] rounded-lg text-sm font-normal'>
				<i>{testimonial.comment}</i>
			</div>
		</article>
	);
};

export default Card;
