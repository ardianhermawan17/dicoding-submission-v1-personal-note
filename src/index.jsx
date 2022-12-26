import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './helpers/hooks/useAuth';
import App from './App';

import './styles/tailwind-custom.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>
);
