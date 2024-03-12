import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	logo: string;
	styles?: string;
	link?: string;
	target?: string;
}
const Logo: React.FC<Props> = ({ logo, styles, link, target }) => {
	return (
		<Link to={link || '#'} target={target}>
			<img src={logo} className={styles} />
		</Link>
	);
};

export default Logo;
