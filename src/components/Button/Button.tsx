import { FC, ReactNode } from 'react';

interface Props {
	content: string | ReactNode;
	styles: string;
	borderStyles?: string;
	onclick?: () => void;
	disabled?: boolean;
}

const Button: FC<Props> = ({
	content,
	styles,
	onclick,
	borderStyles,
	disabled,
}) => {
	return (
		<button
			className={`${styles} rounded-full shadow-md`}
			onClick={onclick}
			disabled={disabled}
		>
			<div
				className={`rounded-full py-1 border-[0.5px] border-[#E09D94] shadow-[rgba(0,_0,_0,_0.3)] shadow-md active:shadow-[rgba(0,_0,_0,_0.5)] active:shadow-inner ${borderStyles}`}
			>
				{content}
			</div>
		</button>
	);
};

export default Button;
