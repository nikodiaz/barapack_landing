import hero from '../../assets/img/hero.png';

interface Props {
	children?: React.ReactNode;
}
const Hero: React.FC<Props> = ({ children }) => {
	return (
		<section className='w-full rounded-bl-[250px]'>
			<img
				src={hero}
				className='relative -top-20 w-full h-[calc(100%-80px)] rounded-bl-[300px] shadow-black drop-shadow-custom'
			/>

			{children}
		</section>
	);
};

export default Hero;
