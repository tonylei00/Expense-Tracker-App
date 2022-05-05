import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './styles/styles.css';

import App from './components/app.jsx'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);