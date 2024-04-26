import { FC, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}
const Hero: FC<Props> = ({ children }) => {
	return (
		<section
			data-aos='fade-left'
			className='w-full h-[calc(100vh-80px)] max-h-[720px] md:rounded-bl-[250px] bg-image-hero drop-shadow-custom'
		>
			{children}
		</section>
	);
};

export default Hero;
