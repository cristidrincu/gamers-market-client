import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LandingPage from "./modules/landing-page/components";
import HardwareOffersMouse from "./modules/hardware-offers/mouse/components";

const routes = (
	<Route path='/' component={ App }>
		<IndexRoute component={ LandingPage } />
    <Route path='hardware-offers/mouse' component={ HardwareOffersMouse } />
	</Route>
);

export default routes;
