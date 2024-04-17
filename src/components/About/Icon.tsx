interface Props {
	icon: string;
	styles?: string;
}

const Icon: React.FC<Props> = ({ icon, styles }) => {
	return (
		<div
			className={`flex items-center justify-center rounded-full shadow-md bg-[#E84E38] px-1 py-1 text-white hover:text-white border border-white ${styles}`}
		>
			<img
				className='w-11 h-11 rounded-full py-1 px-1 border-[0.5px] border-white shadow-[rgba(0,_0,_0,_0.3)] shadow-md active:shadow-[rgba(0,_0,_0,_0.5)] active:shadow-inner'
				src={icon}
				alt={icon}
			/>
		</div>
	);
};

export default Icon;
