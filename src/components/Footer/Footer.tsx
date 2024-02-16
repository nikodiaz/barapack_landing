import logo from '../../assets/svg/barapack_logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import futurisi from '../../assets/svg/futurisi.svg';
import Logo from '../NavBar/Logo';

const Footer = () => {
	return (
		<footer className='grid grid-cols-3 place-items-center h-40 text-white bg-[#3E4453]'>
			<div className='flex items-center gap-4'>
				All rights reserved by <Logo logo={logo} styles='w-32 h-32' />
			</div>
			<div className='flex items-center gap-4'>
				<Logo logo={facebook} styles='w-12 h-12' />

				<Logo logo={instagram} styles='w-12 h-12' />

				<Logo logo={whatsapp} styles='w-12 h-12' />
			</div>
			<div className='flex items-center gap-4'>
				Developed by <Logo logo={futurisi} styles='w-20 h-20' />
			</div>
		</footer>
	);
};

export default Footer;
