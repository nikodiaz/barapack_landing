import { useState, useEffect, FC } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Button from '../Button/Button';
import { useWindowScroll } from 'react-use';

const ButtonScrollToTop: FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { y } = useWindowScroll();

	useEffect(() => {
		const toggleVisibility = () => {
			if (y > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, [y]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Button
			content={<FaArrowUp />}
			styles={`${
				isVisible
					? 'inline-block opacity-100'
					: 'opacity-0 pointer-events-none'
			} fixed bottom-12 right-12 scroll-to-top-button mx-auto mt-4 bg-[white] px-2 py-2 text-black border border-[#E09D94] hover:text-black`}
			borderStyles='px-2 py-2 bg-white'
			onclick={scrollToTop}
		/>
	);
};

export default ButtonScrollToTop;
