import React from 'react';

interface Props {
	description: string;
	type?: string;
	name: string;
	styles?: string;
}
const Input: React.FC<Props> = ({ description, type, name, styles }) => {
	return (
		<label className='flex flex-col p-4'>
			<span>{description}</span>
			<input
				type={type || 'text'}
				name={name}
				className={`${styles} py-4 bg-transparent outline-0 border-b`}
			/>
		</label>
	);
};

export default Input;
