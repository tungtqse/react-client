import React from 'react';
import {connect} from 'react-redux';
import Modal from './LoginModal';
import history from '../../history';

class Login extends React.Component{

    render(){
        return(
            <div>
                <Modal                     
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

export default Login;