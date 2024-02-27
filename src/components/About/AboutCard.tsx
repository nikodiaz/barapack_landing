import React from 'react';

interface Props {
	icon: string;
	title: string;
	children: React.ReactNode;
}

const AboutCard: React.FC<Props> = ({ icon, title, children }) => {
	return (
		<article className='relative flex flex-col items-center justify-start pt-12 pb-4 my-16 shadow-md about-item rounded-lg'>
			<div className='absolute -top-6 left-0 flex items-center justify-start gap-4 pb-8 w-full'>
				<div className='flex items-center justify-center rounded-full shadow-md bg-[#E84E38] px-1 py-1 text-white hover:text-white border border-white'>
					<img
						className='w-11 h-11 rounded-full py-1 px-1 border-[0.5px] border-white shadow-[rgba(0,_0,_0,_0.3)] shadow-md active:shadow-[rgba(0,_0,_0,_0.5)] active:shadow-inner'
						src={icon}
						alt=''
					/>
				</div>
				<h3 className='text-xl'>{title}</h3>
			</div>
			<p className='px-4'>{children}</p>
		</article>
	);
};

export default AboutCard;
