import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatDetail from './components/CatDetail';
import Hero from './components/Hero';
import TopSearched from './components/TopSearched';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={Hero} />
			<Route path='/detail/:name' component={CatDetail} />
			<Route path='/topSearches' component={TopSearched} />
		</Switch>
	</BrowserRouter>
);

export default App;
