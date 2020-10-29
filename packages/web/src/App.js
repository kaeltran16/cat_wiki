import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatDetail from './components/Hero/catDetail';
import Hero from './components/Hero';
import Top10Search from './components/Article/Top10Search';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={Hero} />
			<Route path='/detail/:name' component={CatDetail} />
			<Route path='/topSearches' component={Top10Search} />
		</Switch>
	</BrowserRouter>
);

export default App;
