type Props = {
	styles?: string;
	text: string;
};

const HeaderForm: React.FC<Props> = ({ styles, text }) => {
	return (
		<div
			id='contact'
			className={`${styles} py-24 pt-36 px-4 md:px-8 form-shadow text-shadow-custom`}
		>
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
