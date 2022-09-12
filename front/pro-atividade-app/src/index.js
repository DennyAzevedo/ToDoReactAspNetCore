import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';

ReactDOM.render(
	<Router>
		<Menu />
		<div className="container">
			<App />
		</div>
	</Router>, 
	document.getElementById('root')
);
