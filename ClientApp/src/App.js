import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter }from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'; 
import MC from './components/MilkCollection';
import './custom.css'

export default () => (
    <Layout>
        <BrowserRouter>
            <Route exact path='/' component={Home} /> 
            <Route path='/mc' component={MC} />
            <Route path='/Production' component={MC} />
            <Route path='/Damage' component={MC} /> 
        </BrowserRouter>
    </Layout>
);
