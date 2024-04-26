import { FC } from 'react';

type Props = {
	styles?: string;
	text: string;
};

const HeaderForm: FC<Props> = ({ styles, text }) => {
	return (
		<div className={`${styles} py-24 pt-36 px-4 lg:px-8`}>
			<p className={`flex flex-col ${text}`}>
				Por favor, completa el formulario
				<span className='text-base font-normal md:text-lg'>
					Un ejecutivo comercial se comunicará a la brevedad
				</span>
			</p>
		</div>
	);
};

export default HeaderForm;
