import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaAirbnb } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
	const [search, onSearchChange] = useState('');
	let isLoggedIn = false;
	const HandleInputSearch = (e) => {
		onSearchChange(e.target.value);
	};
	const HandleSearchClick = (e) => {
		console.log(e.target.value);
	};
	if (localStorage.getItem("_TOKEN")) {
		isLoggedIn = true;
	}
	const pass = () => { }
	return (
		<div className='bg-gradient-to-r from-violet-500 via-pink-600 to-slate-900 flex items-center justify-between p-2 gap-3 w-full h-[8vh]'>
			<div className='flex items-center justify-between gap-2 lg:min-h-[7vh]'>
				<Link to='/'>
					<FaAirbnb size={32} className='' color='text-slate-200' />
				</Link>
				<h1 className='uppercase tracking-[2px] text-2xl hidden md:block'>Shopify</h1>
			</div>

			<div className='hidden lg:block lg:flex lg:space-evenly lg:items-center'>
				<Link className='no-underline text-slate-100 px-5 hover:bg-slate-800' to='/products/male'>
					Men
				</Link>
				<Link className='no-underline text-slate-100 px-5 hover:bg-slate-800' to='/products/female'>
					Women
				</Link>
				<Link className='no-underline text-slate-100 px-5 hover:bg-slate-800' to='/products/children'>Children</Link>
			</div>

			<div className='flex'>
				<input
					class="placeholder:italic placeholder:text-slate-400 block bg-white max-w-[20rem] border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
					placeholder="Search..."
					type="text"
					name="search"
					value={search}
					onChange={(e) => HandleInputSearch(e)}
				/>
				<AiOutlineSearch size={24} className='ml-[-30px] mt-[3px] cursor-pointer' onClick={(e) => HandleSearchClick(e)} onKeyDown={(event) => {
					event.key === 'Enter' ? HandleSearchClick(event) : pass();
				}} />
			</div>
			<NavLink to='/cart'>
				<AiOutlineShoppingCart size={25} className='text-slate-200' />
			</NavLink>
			<NavLink to='/signup'>
				<CgProfile
					size={25}
					className='text-slate-200'
				/>
			</NavLink>
		</div >
	);
};


export default Navbar;
