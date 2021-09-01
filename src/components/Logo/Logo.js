import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br-100 shadow_2 '>
				<div className="Tilt-inner pa4 ">
					<img style={{paddingBottom: '5px'}} src={brain} alt="logo"/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;