import { Route, Routes } from 'react-router-dom';

import { Cart, Home, Layout, Login, Product, ProductDetails, Signup } from './Components';

import './App.css';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products/:gender" element={<Product />} />
				<Route path="/products/details/:id" element={<ProductDetails />} />
			</Routes>
		</Layout>
	);
}

export default App;
