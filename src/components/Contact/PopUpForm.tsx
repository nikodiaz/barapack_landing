import Button from '../Button/Button';
import Form from './Form';
import { MdClose } from 'react-icons/md';

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const PopUpForm: React.FC<Props> = ({ open, setOpen }) => {
	return (
		<div
			className={`fixed z-50 top-0 bottom-0 left-0 right-0 ${
				open ? 'block' : 'hidden'
			}`}
		>
			<Button
				content={<MdClose />}
				styles='absolute top-0 right-0 p-3 z-50'
				borderStyles='border-none px-1 py-1 shadow-none bg-white'
				onclick={() => setOpen(false)}
			/>
			<Form />
		</div>
	);
};

export default PopUpForm;
