import { useState } from 'react';
import { Link } from 'react-router-dom';
import barapackLogo from '../../assets/svg/barapack_logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import Logo from './Logo';
import Dropdown from './Dropdown';

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header className='fixed z-50 top-0 flex justify-between px-2 md:px-8 w-full h-20 max-w-[1360px] mx-auto bg-white shadow-md'>
			<section className='flex items-end ml-4 mb-2'>
				<figure className='h-12 md:h-20'>
					<Logo logo={barapackLogo} styles='w-full h-full' />
				</figure>
			</section>
			<section className='flex items-center pb-1'>
				<div className='hidden md:flex items-end gap-8 h-full'>
					<Link to={'/'}>Inicio</Link>
					<a href={'#contact'}>Contacto</a>
					<a href={'#branchs'}>Sucursales</a>
					<Link to={'/about'}>Nosotros</Link>
				</div>
				<div className='flex items-end gap-4 ml-4 h-full'>
					<Logo logo={facebook} styles='w-8 h-8' />
					<Logo logo={instagram} styles='w-8 h-8' />
					<Logo logo={whatsapp} styles='w-8 h-8 md:w-16 md:h-16' />
					<Dropdown open={open} setOpen={setOpen} />
				</div>
			</section>
		</header>
	);
};

export default Navbar;
