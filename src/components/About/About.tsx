import about from '../../assets/img/about.png';
import mission from '../../assets/svg/mission.svg';
import vision from '../../assets/svg/vision.svg';
import values from '../../assets/svg/values.svg';
import CardMobile from './CardMobile';
import CardDesktop from './CardDesktop';

const About = () => {
	return (
		<section className='relative min-h-screen'>
			<section
				data-aos='fade-left'
				className='flex flex-col items-center md:px-0'
			>
				<img className='w-full min-h-40 object-cover' src={about} alt='' />
				<h3 className='absolute right-4 top-10 md:top-12 lg:top-20 xl:top-28 text-shadow-custom text-xl md:text-3xl lg:text-4xl text-right text-white w-1/2 lg:w-1/3'>
					Tu confianza nos impulsa a seguir creciendo
				</h3>
			</section>
			<section
				data-aos='fade-up'
				className='flex flex-col items-center p-6 sm:text-center'
			>
				<h2 className='text-3xl py-4'>Nosotros</h2>
				<p className='text-justify'>
					Esta empresa, de raíces familiares y fundada en la década de
					1990, se especializa en el transporte terrestre mediante
					camiones, inicialmente enfocándose en la logística de granos. A
					lo largo de los años, ha evolucionado y ampliado su oferta de
					servicios para convertirse en un referente integral en la
					logística y distribución. En la actualidad, nuestra empresa se
					compromete plenamente a ofrecer un servicio de calidad respaldado
					por una estructura sólida y confiable. Nos esforzamos por brindar
					soluciones integrales que superen las expectativas de nuestros
					clientes.{' '}
				</p>
				<div
					data-aos='fade-up'
					className='flex flex-col items-center w-full my-16'
				>
					<CardDesktop icon={mission} title='Misión'>
						Siendo reconocidos por nuestra excelencia operativa y
						compromiso inquebrantable. Aspiramos a ser la primera elección
						de nuestros clientes al proporcionar soluciones logísticas
						innovadoras y sostenibles que impulsan el crecimiento de sus
						negocios.
					</CardDesktop>
					<div className='flex lg:flex-row lg:justify-evenly gap-20 pl-8 mx-auto flex-col items-center w-full'>
						<CardDesktop icon={vision} title='Visión'>
							Siendo reconocidos por nuestra excelencia operativa y
							compromiso inquebrantable. Aspiramos a ser la primera
							elección de nuestros clientes al proporcionar soluciones
							logísticas innovadoras y sostenibles que impulsan el
							crecimiento de sus negocios.
						</CardDesktop>
						<CardDesktop icon={values} title='Valores'>
							Siendo reconocidos por nuestra excelencia operativa y
							compromiso inquebrantable. Aspiramos a ser la primera
							elección de nuestros clientes al proporcionar soluciones
							logísticas innovadoras y sostenibles que impulsan el
							crecimiento de sus negocios.
						</CardDesktop>
					</div>
				</div>
				<CardMobile icon={mission} title='Misión'>
					Siendo reconocidos por nuestra excelencia operativa y compromiso
					inquebrantable. Aspiramos a ser la primera elección de nuestros
					clientes al proporcionar soluciones logísticas innovadoras y
					sostenibles que impulsan el crecimiento de sus negocios.
				</CardMobile>
				<CardMobile icon={vision} title='Visión'>
					Nuestra misión es ofrecer servicios logísticos de calidad,
					superando las expectativas de nuestros clientes en cada paso del
					camino. Nos esforzamos por optimizar la cadena de suministro,
					asegurando la eficiencia, confiabilidad y transparencia en todas
					nuestras operaciones.
				</CardMobile>
				<CardMobile icon={values} title='Valores'>
					Fomentamos un ambiente de colaboración donde cada miembro de
					nuestro equipo contribuye de manera activa y trabaja en conjunto
					para alcanzar nuestros objetivos comunes. Nuestro gran compromiso
					es mantener estándares rigurosos para garantizar la seguridad de
					nuestro personal y los bienes transportados.
				</CardMobile>
			</section>
		</section>
	);
};

export default About;
