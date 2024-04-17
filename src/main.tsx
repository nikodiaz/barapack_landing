import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css';
import 'typeface-roboto-slab';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</BrowserRouter>,
);
