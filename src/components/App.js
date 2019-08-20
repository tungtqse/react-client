import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Login from './Authen/Login';
import Register from './Authen/Register';
import VideoList from './Video/VideoList';
import ImageCreate from './Image/ImageUpload';

export default class App extends Component{
    render(){
        return(
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/" exact component={VideoList}/>
                            <Route path="/image/upload" exact component={ImageCreate}/>
                        </Switch>   
                    </div>
                </Router>
            </div>
        );
    }
}