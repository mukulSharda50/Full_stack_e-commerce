import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
root.render(
	<QueryClientProvider client={client}>
		<Router>
			<App />
		</Router>
	</QueryClientProvider>
);
