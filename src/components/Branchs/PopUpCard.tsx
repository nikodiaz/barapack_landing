import React from 'react';
import Button from '../Button/Button';
import { MdClose } from 'react-icons/md';

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	data: {
		title: string;
		img: string;
		address: string;
		phones: string;
		hours: string;
		coords: number[];
	};
}

const PopUpCard: React.FC<Props> = ({ open, setOpen, data }) => {
	return (
		<div
			className={`fixed z-50 top-0 bottom-0 left-0 right-0 md:hidden px-4 bg-[rgba(0,0,0,0.5)] ${
				open ? 'block' : 'hidden'
			}`}
		>
			<article className='relative top-1/3 flex flex-col w-full mt-8 rounded-lg shadow-xl h-32 card-shadow'>
				<Button
					content={<MdClose />}
					styles='absolute top-0 right-0 p-3 z-50 shadow-none'
					borderStyles='border-none px-1 py-1 shadow-none bg-white'
					onclick={() => setOpen(false)}
				/>
				<figure className='h-full'>
					<img
						className='w-full h-full object-cover rounded-t-lg'
						alt={data.title}
						src={data.img}
					/>
				</figure>
				<figcaption className='bg-white p-4 text-black text-left text-base rounded-b-lg'>
					<h3 className='absolute top-24 left-0 right-0 z-10 text-xl text-center text-white text-shadow-custom'>
						{data.title}
					</h3>
					<p>
						Dirección:
						<span className='font-normal'>{' ' + data.address}</span>
					</p>
					<p>
						Teléfonos:
						<span className='font-normal'>{' ' + data.phones}</span>
					</p>
					<p>
						Horarios:
						<span className='font-normal'>{' ' + data.hours}</span>
					</p>
				</figcaption>
			</article>
		</div>
	);
};

export default PopUpCard;
