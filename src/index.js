import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index';
import Homepage from './container/homepage/index';
import Shortener from './container/shortener/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <div>
                <Route path='*' component={Homepage} />
                <Route path='/' component={Shortener} />
            </div>

        </Router>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
