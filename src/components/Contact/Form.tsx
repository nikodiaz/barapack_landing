import Button from '../Button/Button';
import Input from './Input';

const Form = () => {
	return (
		<article className='parallelogram flex justify-end py-8 w-full h-[650px] bg-black text-white z-10'>
			<form className='w-3/4 px-12'>
				<Input description='Razón social' name='subject' />

				<Input description='Email' name='email' />

				<Input description='CUIT' name='cuit' />

				<Input description='Comentarios adicionales' name='comment' />

				<div className='flex justify-center'>
					<Button
						content='Enviar'
						styles='mx-auto mt-4 bg-[white] px-2 py-2 text-black border border-[#E09D94] hover:text-black'
					/>
				</div>
			</form>
		</article>
	);
};

export default Form;
