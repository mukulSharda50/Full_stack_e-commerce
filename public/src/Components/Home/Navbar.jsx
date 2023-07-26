import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaAutoprefixer } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {
	const [search, onSearchChange] = useState('');
	const HandleInputSearch = (e) => {
		onSearchChange(e.target.value);
	};
	const HandleSearchClick = (e) => {
		console.log(e.target.value);
	};
	const pass = () => {};
	return (
		<NavContainer>
			<Container>
				<LogoContainer>
					<IconContainer>
						<FaAutoprefixer size={42} />
					</IconContainer>
					<LogoName>AlphaBuy</LogoName>
				</LogoContainer>
				<NavLinkContainer>
					<NavigationLinks to="/">Home</NavigationLinks>
					<NavigationLinks to="/">Men</NavigationLinks>
					<NavigationLinks to="/">Women</NavigationLinks>
					<NavigationLinks to="/">Children</NavigationLinks>
				</NavLinkContainer>
				<SearchContainer>
					<SearchInputField
						placeholder="Search products..."
						onChange={(e) => HandleInputSearch(e)}
						value={search}
						onClick={(e) => HandleSearchClick(e)}
						onKeyDown={(event) => {
							event.key === 'Enter' ? HandleSearchClick(event) : pass();
						}}
					></SearchInputField>
					<SearchIconContainer>
						<AiOutlineSearch size={24} />
					</SearchIconContainer>
				</SearchContainer>
				<LoginCartContainer>
					<ProfileContainer>
						<CgProfile size={25} />
						<ProfileLink to="/login">Login</ProfileLink>
					</ProfileContainer>

					<ProfileContainer>
						<AiOutlineShoppingCart size={25} />
						<ProfileLink to="/cart">Cart</ProfileLink>
					</ProfileContainer>
				</LoginCartContainer>
			</Container>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 8vh;
	background-color: #212a3e;
	padding-inline: 10px;
`;

const Container = styled.div`
	max-width: 1650px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: #f1f6f9;
	width: 100%;
`;
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 0.5rem;
`;
const IconContainer = styled.div`
	border-radius: 5px;
	background-color: #9ba4b5;
	width: 50px;
	display: grid;
	place-items: center;
`;
const LogoName = styled.h1`
	font-size: 1.5 rem;
	font-weight: 700;
`;
const NavLinkContainer = styled.div`
	max-width: 25rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	// flex-grow: 1;
`;
const NavigationLinks = styled(NavLink)`
	text-decoration: none;
	text-underline: none;
	color: inherit;
	padding-inline: 1rem;
	&:hover {
		background-color: #9ba4b5;
		padding-inline: 1rem;
		border-radius: 5px;
	}
`;

const SearchContainer = styled.div`
	min-width: 15rem;
	flex-grow: 0.5;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	max-width: 40rem;
`;

const SearchInputField = styled.input`
	width: 100%;
	border: none;
	box-shadow: none;
	outline: none;
	height: 30px;
	padding: 0.5rem;
	border-radius: 5px;
`;

const SearchIconContainer = styled.div`
	background-color: transparent;
	color: #212a3e;
	padding-top: 3px;
	padding-inline: 3px;
	cursor: pointer;
`;

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	// border: 2px solid red;
`;

const ProfileLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const LoginCartContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	// border: 2px solid black;
	gap: 1.5rem;
`;

export default Navbar;
