import React from 'react';
import Icon from './Icon';

type Props = {
	icon: string;
	title: string;
	children: React.ReactNode;
};
const CardDesktop: React.FC<Props> = ({ icon, title, children }) => {
	return (
		<article className='relative hidden sm:flex justify-between items-center my-12 w-[400px] h-60 shadow-lg rounded-tl-full'>
			<Icon icon={icon} styles='absolute -top-8 left-60' />
			<div className='absolute bottom-0 -left-[52px] w-10 h-16 bg-gradient-to-t from-[#E84E38] to-[#FB9789] about-card-shape-1'></div>
			<div className='relative left-8 w-16 h-60 -skew-x-[35deg] bg-gradient-to-b from-[#E84E38] to-[#FB9789] '>
				<div className='absolute bottom-0 left-8 w-0.5 h-44 bg-gray-200'></div>
			</div>
			<h3 className='absolute top-6 right-[105px] text-xl'>{title}</h3>
			<div className='flex items-center px-4 pt-4 w-3/4 h-full'>
				<p className='text-xs'>{children}</p>
			</div>
			<div className='absolute top-16 left-[103px] self-end flex justify-end items-center w-64 h-0.5 -skew-x-[35deg] bg-gray-200'>
				<span className='absolute -top-2 -right-1 p-2 w-2 h-2 bg-[#E84E38] rounded-full skew-x-[35deg]'></span>
			</div>
		</article>
	);
};

export default CardDesktop;
