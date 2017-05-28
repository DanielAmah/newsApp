import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/pages/layout';
import './styles/app.scss'


  const main = document.getElementById('main');
  

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
		</Route>
	</Router>,
	 main);
