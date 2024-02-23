interface Props {
	children?: React.ReactNode;
}
const Hero: React.FC<Props> = ({ children }) => {
	return (
		<section className='w-full h-[calc(100vh-80px)] max-h-[720px] md:rounded-bl-[250px] bg-image-hero drop-shadow-custom'>
			{children}
		</section>
	);
};

export default Hero;
