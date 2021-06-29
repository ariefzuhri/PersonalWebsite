import React from 'react';
import Home from "../../page/home";
import Portfolio from '../../page/portfolio';
import { Switch, Route } from 'react-router-dom';

export default function Router() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/portfolio" component={Portfolio} />
		</Switch>
	)
}