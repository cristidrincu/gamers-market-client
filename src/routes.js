import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LandingPage from "./modules/landing-page/components";

const routes = (
	<Route path='/' component={ App }>
		<IndexRoute component={ LandingPage } />
	</Route>
);

export default routes;
