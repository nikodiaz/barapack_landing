import React from 'react';

interface Props {
	testimonial: {
		id: number;
		name: string;
		comment: string;
	};
}
const Card: React.FC<Props> = ({ testimonial }) => {
	return (
		<article className='flex flex-col items-center justify-center p-2 mx-auto my-8 w-[340px]'>
			<h3 className='text-xl'>{testimonial.name}</h3>
			<div className='p-3 bg-[#FAEDEB] rounded-lg'>
				<i>{testimonial.comment}</i>
			</div>
		</article>
	);
};

export default Card;
