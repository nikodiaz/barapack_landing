import Logo from '../NavBar/Logo';
import Form from './Form';
import barapackLogo from '../../assets/svg/barapack_logo.svg';
import Button from '../Button/Button';
import { useWindowSize } from 'react-use';
import HeaderForm from './HeaderForm';
import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Contact: FC<Props> = ({ setOpen }) => {
	const { width } = useWindowSize();

	return (
		<section data-aos='fade-up'>
			<HeaderForm
				styles='hidden md:block form-shadow text-shadow-custom'
				text='text-3xl text-white'
			/>
			<section
				id='contact-mb'
				className='relative flex flex-row-reverse justify-between h-[250px] md:h-[650px]'
			>
				<section
					id='contact'
					className='relative lg:absolute mt-28 md:mt-0 bg-image-contact w-full h-full'
				>
					<div className='hidden relative lg:flex'>
						<div className='h-64 w-72 triangle-1'></div>
					</div>
					<div className='absolute top-1/3 right-12 lg:static lg:hidden flex flex-col items-center pr-4 w-1/3'>
						<Logo logo={barapackLogo} styles='w-30 h-30' />
						<Button
							onclick={
								width < 1024
									? () => setOpen(true)
									: () => setOpen(false)
							}
							content='Contactanos'
							borderStyles='px-10'
							styles='bg-[#E84E38] px-2 py-2 text-white hover:text-white border border-[#E09D94] text-md'
						/>
					</div>
				</section>
				<section className='hidden lg:block absolute z-10 w-full md:w-1/2'>
					<Form />
				</section>
			</section>
			<div className='hidden md:block form-shadow-2 h-16'></div>
		</section>
	);
};

export default Contact;
