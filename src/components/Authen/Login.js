import React from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import history from '../../history';
import {logIn} from '../../actions/authen';

class Login extends React.Component{
  
    onSubmit = (formValues) => {        
        this.props.logIn(formValues);
    }

    render(){
        return(
            <div>
                <LoginModal                     
                    onDismiss={() => history.push('/')}
                    onSubmit = {this.onSubmit}
                />
            </div>
        );
    }
}

export default connect(null, {logIn})(Login);