import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Body_P = () => {
	return (
		<div className='body'>
			<Navbar />
				<div className='body_content'>
					<Outlet />
				</div>
			<Footer />
		</div>
	);
};

export default Body_P;