import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { createBrowserHistory } from 'history';
import configureStore from './store/ConfigureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') ;
const history = createBrowserHistory({ basename: baseUrl });
 
// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

// <ConnectedRouter history={history}>  </ConnectedRouter>
ReactDOM.render(  
    <Provider store={store}>
        {console.log("store", store)}
       <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root'));

registerServiceWorker();