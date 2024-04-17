import React from 'react';
import Icon from './Icon';

interface Props {
	icon: string;
	title: string;
	children: React.ReactNode;
}

const CardMobile: React.FC<Props> = ({ icon, title, children }) => {
	return (
		<article className='relative flex sm:hidden flex-col items-center justify-start pt-12 pb-4 my-16 shadow-md about-item rounded-lg'>
			<div className='absolute -top-6 left-0 flex items-center justify-start gap-4 pb-8 w-full'>
				<Icon icon={icon} />
				<h3 className='text-xl'>{title}</h3>
			</div>
			<p className='px-4'>{children}</p>
		</article>
	);
};

export default CardMobile;
