import React from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import history from '../../history';
import {signIn} from '../../actions/authen';

class Login extends React.Component{
  
    onSubmit = (formValues) => {        
        this.props.signIn(formValues);
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

export default connect(null, {signIn})(Login);