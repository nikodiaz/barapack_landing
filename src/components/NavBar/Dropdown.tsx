import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	analytics: (category: string) => void;
};
const Dropdown: React.FC<Props> = ({ open, setOpen, analytics }) => {
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
				<ul className='flex flex-col items-center gap-8 px-8 py-4 bg-white dropdown_menu--open'>
					<li className='w-full'>
						<Link
							to={'/'}
							onClick={() => analytics('Navigation to start')}
						>
							Inicio
						</Link>
					</li>
					<li className='w-full'>
						<a
							href={'#contact'}
							onClick={() => analytics('Navigation to contact')}
						>
							Contacto
						</a>
					</li>
					<li className='w-full'>
						<a
							href={'#branchs'}
							onClick={() => analytics('Navigation to branches')}
						>
							Sucursales
						</a>
					</li>
					<li className='w-full'>
						<Link
							to={'/about'}
							onClick={() => analytics('Navigation to about')}
						>
							Nosotros
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Dropdown;
