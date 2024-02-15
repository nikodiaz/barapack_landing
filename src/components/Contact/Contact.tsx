import Form from './Form';

const Contact = () => {
	return (
		<>
			<div className='py-24 pt-40 px-8 form-shadow text-shadow-custom'>
				<p className='flex flex-col text-3xl text-white'>
					Por favor, completa el formulario
					<span className='text-lg'>
						Un ejecutivo comercial se comunicará a la brevedad
					</span>
				</p>
			</div>
			<section className='relative flex flex-row-reverse justify-between h-[650px]'>
				<section className='absolute bg-image-contact w-full h-full'>
					<div className='relative flex'>
						<div className='h-64 w-72 triangle-1'></div>
					</div>
				</section>
				<section className='absolute z-10 w-2/3'>
					<div className='relative'>
						<div className='absolute -left-16 w-[400px] parallel h-[650px]'></div>
						<div className='absolute -left-32 w-[400px] parallel h-[650px]'></div>
						<Form />
					</div>
				</section>
			</section>
			<div className='form-shadow-2 h-16'></div>
		</>
	);
};

export default Contact;
