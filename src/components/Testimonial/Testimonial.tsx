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
			name: 'Santiago Martinez',
			image: testimonial_1,
			comment:
				'"Desde el primer contacto, han demostrado un alto nivel de profesionalismo y compromiso con la satisfacción del cliente. Sus tarifas competitivas y el servicio que brindan son muy buenos. Barapack es nuestra logística de confianza."',
		},
		{
			id: 1,
			name: 'Valentina Fux',
			image: testimonial_2,
			comment:
				'"Barapack ha demostrado ser confiable y eficiente en cada envío que hemos realizado con ellos. Sus conductores son profesionales y cuidadosos con la carga. Definitivamente seguiremos confiando en ellos para todas nuestras necesidades de transporte."',
		},
		{
			id: 2,
			name: 'Julian Bianchi',
			image: testimonial_3,
			comment:
				'"La puntualidad en las entregas y el cuidado con el que Barapack maneja nuestras mercancías son impresionantes. Sin duda, recomiendo sus servicios a cualquier empresa que busque un transporte confiable y de calidad."',
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
