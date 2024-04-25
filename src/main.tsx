import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import 'aos/dist/aos.css';
import 'typeface-roboto-slab';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter.tsx';

ReactGA.initialize('G-7K77PG5YX2');

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</BrowserRouter>,
);
