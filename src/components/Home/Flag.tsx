interface Props {
	icon: string;
	color: string;
	children: string;
}

const Flag: React.FC<Props> = ({ icon, color, children }) => {
	return (
		<article
			className={`flex items-center gap-4 w-2/3 p-2 mb-8 text-xl ${color} rounded-l-full`}
		>
			<div className='p-2 w-24 h-24 border rounded-full shadow-lg shadow-[rgba(0,0,0,0.4)]'>
				<div className='flex items-center justify-center h-full w-full border rounded-full shadow-lg shadow-[rgba(0,0,0,0.4)]'>
					<img src={icon} />
				</div>
			</div>
			<div>
				<p>{children}</p>
			</div>
		</article>
	);
};

export default Flag;
