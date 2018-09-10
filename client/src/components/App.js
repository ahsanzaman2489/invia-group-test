import React, {Component} from 'react';
// if hosting to github pages, add basename to Router, set value as the repo name
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';

import Results from '../containers/pages/Results';
import Home from '../containers/pages/Home';
import Footer from './Footer';
import HOC from '../containers/HOC/index';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div id="main-wrapper">
                        <Header/>
                        <main className="container">
                            <Switch>
                                <Route exact path="/" component={HOC(Home)}/>
                                <Route exact path="/flights/results" component={HOC(Results)}/>
                                <Route render={() => <p>Not found</p>}/>
                            </Switch>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </div>

        );
    }
}
