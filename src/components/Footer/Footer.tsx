import logo from '../../assets/svg/barapack_logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import futurisi from '../../assets/svg/futurisi.svg';
import Logo from '../NavBar/Logo';
import ReactGA from 'react-ga4';

const Footer = () => {
	const handleClick = (category: string) => {
		ReactGA.event({
			category: `${category}`,
			action: 'Click',
		});
	};
	return (
		<footer className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 place-items-center gap-y-8 py-8 min-h-40 text-white bg-[#3E4453]'>
			<div className='flex flex-col-reverse items-center md:justify-evenly md:flex-row gap-8 md:col-start-1 md:col-end-3 w-full'>
				<div className='flex items-center gap-4'>
					All rights reserved by{' '}
					<Logo logo={logo} styles='hidden md:inline-block w-32 h-32' />
				</div>
				<div className='flex items-center gap-4'>
					<Logo
						logo={facebook}
						styles='w-12 h-12'
						onclick={() => handleClick('Navigation to facebook')}
						link='https://www.facebook.com/profile.php?id=100095373276044'
						target='_blank'
					/>

					<Logo
						logo={instagram}
						styles='w-12 h-12'
						onclick={() => handleClick('Navigation to instagram')}
						link='https://www.instagram.com/bara.pack'
						target='_blank'
					/>

					<Logo
						logo={whatsapp}
						styles='w-12 h-12'
						onclick={() => handleClick('Navigation to whatsapp')}
						link='https://wa.me/5491130788527'
						target='_blank'
					/>
				</div>
			</div>
			<div className='flex items-center gap-4 md:col-start-3 md:col-end-4'>
				Developed by{' '}
				<Logo
					link='https://futurisi.com'
					target='_blank'
					onclick={() => handleClick('Navigation to futurisi')}
					logo={futurisi}
					styles='w-20 h-20'
				/>
			</div>
		</footer>
	);
};

export default Footer;
