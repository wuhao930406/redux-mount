import React, { Component } from 'react';
import ReactRouter from './router/router.config';
import { Provider } from 'react-redux';
import store from './core/store/store';
import './App.css';


class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <ReactRouter>
                </ReactRouter>
            </Provider>
        )
    }
}

export default App