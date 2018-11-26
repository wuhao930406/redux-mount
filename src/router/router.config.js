/**
 * Created by kurosaki on 2018/8/9.
 */
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import AnimatedRouter from 'react-animated-router';//路由动画
import 'react-animated-router/animate.css';//diy动画效果css

import {
    Router,
    withRouter,
    Route,
    Switch,
    Link,
    history,
} from 'react-router-dom';

import {
    MountContainer,
    ReduxContainer
} from '../container';



const customHistory = createBrowserHistory();

const ReactRouter = () => (
    <Router history={customHistory}>
        <AnimatedRouter>
            <Route exact path="/" component={MountContainer}/>
            <Route path="/redux" component={ReduxContainer}/>
        </AnimatedRouter>
    </Router>

)



export default ReactRouter
