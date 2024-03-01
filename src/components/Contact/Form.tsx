import Button from '../Button/Button';
import HeaderForm from './HeaderForm';
import Input from './Input';

const Form = () => {
	return (
		<article className='relative z-30 parallelogram flex justify-end w-full h-screen md:h-[650px] bg-black text-white'>
			<HeaderForm
				styles='absolute -top-24 z-20 block md:hidden'
				text='md:px-4 text-lg font-bold'
			/>
			<div className='hidden md:block absolute -left-72 parallel w-[100px] -skew-x-[23deg] h-[650px]'></div>
			<div className='hidden md:block absolute -left-56 parallel w-[100px] -skew-x-[23deg] h-[650px]'></div>
			<div className='absolute -bottom-0 z-10 -left-40 bg-black h-[650px] w-96 -skew-x-[23deg]'></div>
			<form className='absolute z-20 w-full md:pr-8 pt-36 md:pt-12'>
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
