import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index';
import Homepage from './container/homepage/index';
import Searchpage from './container/searchpage/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <div>
                <Route path='*' component={Homepage} />
                <Route path='/' component={Searchpage} />
            </div>

        </Router>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
