import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaAirbnb } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
	const [search, onSearchChange] = useState('');
	let isLoggedIn = false;
	const HandleInputSearch = (e) => {
		console.log(e.target.value)
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
		<div className='bg-gradient-to-r from-violet-500 via-pink-600 to-slate-900 min-h-[5vh] flex items-center justify-between p-2 gap-3 '>
			<div className='flex items-center justify-between gap-2'>
				<Link to='/'>
					<FaAirbnb size={32} className='' color='text-slate-200' />
				</Link>
			</div>
			<input
				class="placeholder:italic placeholder:text-slate-400 block bg-white w-[50%] max-w-[20rem] border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
				placeholder="Search..."
				type="text"
				name="search"
				value={search}
				onChange={(e) => HandleInputSearch(e)}
				onClick={(e) => HandleSearchClick(e)}
				onKeyDown={(event) => {
					event.key === 'Enter' ? HandleSearchClick(event) : pass();
				}} />
			<NavLink to='/cart'>
				<AiOutlineShoppingCart size={25} className='text-slate-200' />
			</NavLink>
			<NavLink to='/signup'>
				<CgProfile
					size={25}
					className='text-slate-200'
				/>
			</NavLink>
		</div>
	);
};


export default Navbar;
