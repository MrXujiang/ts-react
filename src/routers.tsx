import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Index from "./pages/home/"

class Routers extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={ Index } />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default Routers;