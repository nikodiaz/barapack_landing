import React from 'react';

type Props = {
	src: string;
	alt: string;
	styles?: string;
	container?: string;
};

const Image: React.FC<Props> = ({ src, alt, styles, container }) => {
	return (
		<picture className={container}>
			<img src={src} alt={alt} className={styles} />
		</picture>
	);
};

export default Image;
