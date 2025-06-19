import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/hotel/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);


reportWebVitals();
