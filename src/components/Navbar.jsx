import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/earth.svg';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'> <img src={logo} alt="logo" /> </div>
			<div className='links'>
				<NavLink to='/' className={(nav) => (nav.isActive ? "link-active" : "")}> <div> Home </div></NavLink>
				<NavLink to='/about' className={(nav) => (nav.isActive ? "link-active" : "")}> <div> About </div></NavLink>
			</div>
		</div>
	);
};

export default Navbar;