import { Route, Routes } from 'react-router-dom';

import { Home } from './Components';

import styled from 'styled-components';

import './App.css';

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Container>
	);
}

const Container = styled.div`
	// margin-inline: 10rem;
`;

export default App;
