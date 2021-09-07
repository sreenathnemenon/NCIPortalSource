import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk'; 
 import { createLogger } from 'redux-logger'; 
import * as FarmersList from '../reducers/List';
import { connectRouter, RouterState } from 'connected-react-router/immutable';
 
 

export default function configureStore(history) {

    const reducers = {
        farmersList: FarmersList.reducer 
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = (history) => combineReducers({
        router: connectRouter(history) 
})
    //const rootReducer = combineReducers({
    //    ...reducers
    //   // routing: routerReducer
    //});

    return createStore(
        rootReducer,
        {},
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}