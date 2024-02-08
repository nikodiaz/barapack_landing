import { Link } from 'react-router-dom';
import barapackLogo from '../../assets/barapack_logo.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Logo from './Logo';

const Navbar = () => {
	return (
		<header className='flex justify-between px-8 h-20 w-full bg-white'>
			<section className='ml-4'>
				<figure className='h-20'>
					<Logo logo={barapackLogo} styles='w-full h-full' />
				</figure>
			</section>
			<section className='flex items-center'>
				<div className='flex items-end gap-8 h-full'>
					<Link to={'/'}>Inicio</Link>
					<Link to={'/'}>Contacto</Link>
					<Link to={'/'}>Sucursales</Link>
					<Link to={'/'}>Nosotros</Link>
				</div>
				<div className='flex items-end gap-4 ml-4 h-full'>
					<Logo logo={facebook} styles='w-8 h-8' />

					<Logo logo={instagram} styles='w-8 h-8' />

					<Logo logo={whatsapp} styles='w-16 h-16' />
				</div>
			</section>
		</header>
	);
};

export default Navbar;
