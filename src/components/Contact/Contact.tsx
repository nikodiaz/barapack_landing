import Form from './Form';

const Contact = () => {
	return (
		<section className='relative flex flex-row-reverse justify-between my-20'>
			<section className='absolute bg-image-contact w-full h-[650px]'>
				<div className='relative flex'>
					<div className='h-64 w-72 triangle-1'></div>
					<div className='absolute left-96 w-[400px] parallel h-[650px]'></div>
					<div className='absolute left-80 w-[400px] parallel h-[650px]'></div>
				</div>
			</section>
			<section className='absolute z-10 w-2/3'>
				<Form />
			</section>
		</section>
	);
};

export default Contact;
