import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button/Button';

const Header = () => {
	return (
		<div className='App-header' id='header'>
			<Link to='/'>
				<Button type='tertiary' id='Home-btn'>
					hem
				</Button>
			</Link>
			<Link to='/about'>
				<Button type='tertiary' id='About-btn'>
					om karriärrevet
				</Button>
			</Link>
		</div>
	);
};

export default Header;
