import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div class='nav-wrapper'>
			<div class='right-side'>
				<div class='brand'>
					<div>BookStack</div>
				</div>
			</div>

			<div class='right-side'>
				<div class='nav-link-wrapper'>
					<Link>Login</Link>
				</div>
				<div class='nav-link-wrapper'>
					<Link>Signup</Link>
				</div>
			</div>
		</div>
	);
}
