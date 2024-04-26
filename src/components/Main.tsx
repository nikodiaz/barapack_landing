import Home from './Home/Home';
import Contact from './Contact/Contact';
import Branchs from './Branchs/Branchs';
import Testimonial from './Testimonial/Testimonial';
import Brands from './Brands/Brands';
import PopUpForm from './Contact/PopUpForm';
import { useState } from 'react';

const Main = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<Home />
			<Contact setOpen={setOpen} />
			<PopUpForm open={open} setOpen={setOpen} />
			<Branchs />
			<Testimonial />
			<Brands />
		</>
	);
};

export default Main;
