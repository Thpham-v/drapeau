import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body_P from './components/Body_P';
import About from './components/pages/About';
import Home from './components/pages/Home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Body_P/> } >
					<Route path='/' element={ <Home/> } />
					<Route path='/about' element={ <About/> } />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;