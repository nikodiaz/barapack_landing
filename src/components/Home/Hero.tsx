import hero from '../../assets/img/hero.png';

interface Props {
	children?: React.ReactNode;
}
const Hero: React.FC<Props> = ({ children }) => {
	return (
		<section className='w-full'>
			<div className='relative w-full h-[calc(100vh-80px)] overflow-hidden rounded-bl-[250px]'>
				<img
					src={hero}
					className='absolute inset-0 w-full h-full object-cover object-right-bottom shadow-black shadow'
					alt='Hero'
				/>
			</div>

			{children}
		</section>
	);
};

export default Hero;
