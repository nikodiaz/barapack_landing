import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	logo: string;
	styles?: string;
	link?: string;
	target?: string;
	onclick?: () => void;
}
const Logo: React.FC<Props> = ({ logo, styles, link, target, onclick }) => {
	return (
		<Link to={link || '#'} target={target} onClick={onclick}>
			<img src={logo} className={styles} />
		</Link>
	);
};

export default Logo;
