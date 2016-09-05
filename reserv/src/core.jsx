import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Catalog from './components/Catalog.jsx';
import Good from './components/Good.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/about' component={About} />
			<Route path='/catalog' component={Catalog} />
			<Route path='/catalog/:goodId' component={Good} />
		</Route>
	</Router>,
	document.getElementById('root')
)
