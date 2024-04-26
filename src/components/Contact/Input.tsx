import { FC, KeyboardEvent } from 'react';

interface Props {
	description: string;
	type?: string;
	name: string;
	styles?: string;
	maxLength?: number;
	minLength?: number;
	onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
const Input: FC<Props> = ({
	description,
	type,
	name,
	styles,
	maxLength,
	minLength,
	onkeydown,
}) => {
	return (
		<label className='flex flex-col p-2 lg:p-4'>
			<span>{description}</span>
			<input
				type={type || 'text'}
				name={name}
				className={`${styles} py-2 md:py-4 bg-transparent outline-0 border-b`}
				maxLength={maxLength}
				minLength={minLength}
				onKeyDown={onkeydown}
			/>
		</label>
	);
};

export default Input;
