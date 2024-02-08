import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	logo: string;
	styles?: string;
	link?: string;
}
const Logo: React.FC<Props> = ({ logo, styles, link }) => {
	return (
		<Link to={link || '#'}>
			<img src={logo} className={styles} />
		</Link>
	);
};

export default Logo;
