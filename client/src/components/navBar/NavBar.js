import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
	const renderNavItems = () => {
		if (localStorage.getItem('token')) {
			return (
				<div className='nav-wrapper'>
					<div className='left-side'>
						<div className='brand'>
							<div>BookStack</div>
						</div>
					</div>

					<div className='right-side'>
						<div className='nav-link-wrapper'>
							<Link to='/collection'>Book Collection</Link>
						</div>
						<div className='nav-link-wrapper'>
							<Link to='/search'>Add Book</Link>
						</div>
						<div className='nav-link-wrapper'>
							<Link onClick={props.handleLogout} to='/login'>
								Logout
							</Link>
						</div>
					</div>
				</div>
			);
		} else {
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
	};

	return renderNavItems();
}
