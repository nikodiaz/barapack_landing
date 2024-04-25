import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import barapackLogo from '../../assets/svg/barapack_logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import Logo from './Logo';
import Dropdown from './Dropdown';
import ReactGA from 'react-ga4';

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleContactClick = () => {
		handleClick('Navigation to contact');
		navigate('/', { state: { scrollTo: 'contact' || 'contact-mb' } });
	};

	const handleBranchesClick = () => {
		handleClick('Navigation to map cards');
		navigate('/', { state: { scrollTo: 'branchs' } });
	};

	const handleClick = (category: string) => {
		ReactGA.event({
			category: `${category}`,
			action: 'Click',
		});
	};

	return (
		<header className='fixed z-50 top-0 flex justify-between px-2 md:px-8 w-full h-20 mx-auto bg-white shadow-md'>
			<section className='flex items-end ml-4 mb-2'>
				<figure className='h-12 md:h-20'>
					<Logo logo={barapackLogo} styles='w-full h-full' />
				</figure>
			</section>
			<section className='flex items-center pb-1'>
				<div className='hidden md:flex items-end gap-8 h-full'>
					<Link
						to={'/'}
						onClick={() => handleClick('Navigation to start')}
					>
						Inicio
					</Link>
					<button onClick={handleContactClick}>Contacto</button>
					<button onClick={handleBranchesClick}>Sucursales</button>
					<Link
						to={'/about'}
						onClick={() => handleClick('Navigation to about')}
					>
						Nosotros
					</Link>
				</div>
				<div className='flex items-end gap-4 ml-4 h-full'>
					<Logo
						logo={facebook}
						styles='w-8 h-8'
						onclick={() => handleClick('Navigation to facebook')}
						link='https://www.facebook.com/profile.php?id=100095373276044'
						target='_blank'
					/>
					<Logo
						logo={instagram}
						styles='w-8 h-8'
						onclick={() => handleClick('Navigation to instagram')}
						link='https://www.instagram.com/bara.pack'
						target='_blank'
					/>
					<Logo
						logo={whatsapp}
						styles='w-8 h-8'
						onclick={() => handleClick('Navigation to whatsapp')}
						link='https://wa.me/5491130788527'
						target='_blank'
					/>
					<Dropdown
						open={open}
						setOpen={setOpen}
						analytics={handleClick}
					/>
				</div>
			</section>
		</header>
	);
};

export default Navbar;
