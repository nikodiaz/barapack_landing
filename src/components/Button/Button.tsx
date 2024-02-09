interface Props {
	content: string;
	styles: string;
	onclick?: () => void;
}

const Button: React.FC<Props> = ({ content, styles, onclick }) => {
	return (
		<button className={`${styles} rounded-full shadow-md`} onClick={onclick}>
			<div className='rounded-full px-12 py-1 border-[0.5px] border-[#E09D94] shadow-[rgba(0,_0,_0,_0.3)] shadow-md active:shadow-[rgba(0,_0,_0,_0.5)] active:shadow-inner'>
				{content}
			</div>
		</button>
	);
};

export default Button;
