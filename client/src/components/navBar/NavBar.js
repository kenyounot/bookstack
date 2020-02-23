import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className='nav-wrapper'>
			<div className='left-side'>
				<div className='brand'>
					<div>BookStack</div>
				</div>
			</div>

			<div className='right-side'>
				<div className='nav-link-wrapper'>
					<Link to='/login'>Login</Link>
				</div>
				<div className='nav-link-wrapper'>
					<Link to='/signup'>Signup</Link>
				</div>
			</div>
		</div>
	);
}
