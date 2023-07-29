import React from 'react';
import Navbar from './Home/Navbar';

import { AiOutlineHome } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const NavBarBottom = () => (

	<div className='w-[100%] h-[8vh] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-900 fixed bottom-0 left-0 flex justify-evenly items-center'>
		<Link className='no-underline text-slate-100' to='/products/men'>Men</Link>
		<Link className='no-underline text-slate-100' to='/products/women'>Women</Link>
		<Link className='no-underline text-slate-100' to='/products/children'>Children</Link>

		<div className='absolute bottom-10 bg-slate-100 rounded-lg'>
			<Link to='/'><AiOutlineHome size={30} /></Link>
		</div>
	</div>
)

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<NavBarBottom />
		</div>
	);
};

export default Layout;
