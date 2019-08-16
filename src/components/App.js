import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Login from './Authen/Login';

export default class App extends Component{
    render(){
        return(
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Header}/>
                            <Route path="/login" exact component={Login}/>
                        </Switch>   
                    </div>
                </Router>
            </div>
        );
    }
}