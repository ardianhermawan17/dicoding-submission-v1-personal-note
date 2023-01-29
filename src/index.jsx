import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// import i18n (needs to be bundled ;))
import './plugins/i18n';

import './styles/tailwind-custom.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
