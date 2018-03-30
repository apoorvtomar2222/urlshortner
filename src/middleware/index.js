import thunkMiddleware from 'redux-thunk';
import Promise from 'redux-promise-middleware';

export const middleware = [
    Promise(), thunkMiddleware
]
