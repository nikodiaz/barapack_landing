import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import testimonial_1 from '../../assets/img/testimonial_1.webp';
import testimonial_2 from '../../assets/img/testimonial_2.webp';
import testimonial_3 from '../../assets/img/testimonial_3.webp';

const Testimonial = () => {
	const testimonialData = [
		{
			id: 0,
			name: "Mariela D'Angelo",
			image: testimonial_1,
			comment:
				'"Desde el primer día me impresionó su compromiso con la calidad y la eficiencia. Cada entrega se realiza de manera impecable ¡cumpliendo con los plazos de manera consistente y sin complicaciones! La atención al cliente es excepcional, y su dedicación al detalle realmente marca la diferencia. Confío plenamente en ellos para cualquier envío que necesite realizar."',
		},
		{
			id: 1,
			name: 'Santiago Martinez',
			image: testimonial_2,
			comment:
				'"La puntualidad en las entregas y el cuidado con el que Barapack maneja nuestras mercancías son impresionantes. Sin duda, recomiendo sus servicios a cualquier empresa que busque un transporte confiable y de calidad."',
		},
		{
			id: 2,
			name: 'Pamela Eberhardt',
			image: testimonial_3,
			comment:
				'"Recomiendo Barapack, ha demostrado ser una empresa seria, los pedidos llegan rápido y en perfectas condiciones, con una eficiencia increíble. Tengo la comodidad de que me lleven los pedidos a domicilio, en sus propios vehículos. Es para destacar el trato de cada uno de los trabajadores de la empresa, nunca me faltó nada de un pedido 👏👏."',
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
				},
			},
		],
	};

	return (
		<section
			data-aos='fade-up'
			data-aos-anchor-placement='top-center'
			className='mb-20'
		>
			<div className='w-full text-center mb-8'>
				<h3 className='text-2xl mb-4'>Confianza ganada</h3>
				<p className='font-normal'>Nuestros clientes satisfechos</p>
			</div>
			<Slider {...settings}>
				{testimonialData.map((testimonial) => (
					<Card key={testimonial.id} testimonial={testimonial} />
				))}
			</Slider>
		</section>
	);
};

export default Testimonial;
