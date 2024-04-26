import { FC } from 'react';

interface Props {
	icon: string;
	color: string;
	children: string;
}

const Flag: FC<Props> = ({ icon, color, children }) => {
	return (
		<article
			className={`relative flex flex-col md:flex-row items-center text-center md:text-left gap-4 w-full md:w-2/3 p-2 mb-8 text-xl ${color} rounded-xl md:rounded-l-full`}
		>
			<div
				className={`absolute -top-10 md:static p-1.5 md:p-2 ${color} border rounded-full shadow-lg shadow-[rgba(0,0,0,0.4)]`}
			>
				<div className='flex items-center justify-center h-14 w-14 md:h-20 md:w-20 border rounded-full shadow-lg shadow-[rgba(0,0,0,0.4)]'>
					<img src={icon} className='w-2/3' />
				</div>
			</div>
			<div className='flex items-center h-28'>
				<p>{children}</p>
			</div>
		</article>
	);
};

export default Flag;
