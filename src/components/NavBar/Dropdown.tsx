import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Dropdown: React.FC<Props> = ({ open, setOpen }) => {
	return (
		<nav className='relative md:hidden'>
			<button
				onClick={() => setOpen(!open)}
				className='flex items-center justify-center'
			>
				<MdMenu className='w-8 h-8' />
			</button>
			<div
				className={`absolute right-0 ${
					open ? 'flex' : 'hidden'
				} flex-col items-center gap-8 h-full text-left`}
			>
				<ul className='flex flex-col items-center gap-8 px-8 py-4 bg-white'>
					<li className='w-full'>
						<Link to={'/'}>Inicio</Link>
					</li>
					<li className='w-full'>
						<Link to={'/'}>Contacto</Link>
					</li>
					<li className='w-full'>
						<Link to={'/'}>Sucursales</Link>
					</li>
					<li className='w-full'>
						<Link to={'/'}>Nosotros</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Dropdown;
