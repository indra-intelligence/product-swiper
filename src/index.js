import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SwipeViewModel from "./SwipeViewModel";
import DemographicViewModal from "./DemographicViewModal";
import SwipeViewModel2 from "./SwipeViewModel2";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Switch>
                <Route path="/index" render={props => <App {...props} />}/>
                <Route path="/swipe" render={props => <SwipeViewModel {...props} />}/>
                <Route path="/interest" render={props => <SwipeViewModel2 {...props} />}/>
                <Route path="/demographic" render={props => <DemographicViewModal {...props} />}/>
                <Redirect to="/index" />
                <Redirect from="/" to="/index" />
            </Switch>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

