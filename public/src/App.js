import { Route, Routes } from 'react-router-dom';

import { Cart, Home, Layout, Login, Signup } from './Components';

import './App.css';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Layout>
	);
}

export default App;
