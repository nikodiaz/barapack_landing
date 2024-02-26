import Button from '../Button/Button';
import HeaderForm from './HeaderForm';
import Input from './Input';

const Form = () => {
	return (
		<article className='parallelogram flex justify-end py-8 pt-36 md:pt-16 w-full h-screen md:h-[650px] bg-black text-white'>
			<HeaderForm
				styles='absolute -top-24 block md:hidden'
				text='px-4 text-lg font-bold'
			/>
			<form className='w-full md:w-3/4 px-4 md:px-12'>
				<Input description='Razón social' name='subject' />

				<Input description='Email' name='email' />

				<Input description='CUIT' name='cuit' />

				<Input description='Comentarios adicionales' name='comment' />

				<div className='flex justify-center'>
					<Button
						content='Enviar'
						borderStyles='px-12'
						styles='mx-auto mt-4 bg-[white] px-2 py-2 text-black border border-[#E09D94] hover:text-black'
					/>
				</div>
			</form>
		</article>
	);
};

export default Form;
