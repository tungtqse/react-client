import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/login.css';
import {Field, reduxForm} from 'redux-form';

class LoginModal extends React.Component {    

    renderInput = (fieldProps) =>{             
        const className = `field ${fieldProps.meta.touched && fieldProps.meta.error ? 'error' : ''}`;
        const iconName = `${fieldProps.input.name === 'username' ? 'user' : 'lock' } icon`;
        return(
            <div className={className}>            
                <div className="ui left icon input">
                    <i className={iconName}></i>  
                    <input {...fieldProps.input} autoComplete="off" placeholder={fieldProps.placeholder} type={fieldProps.type}/>                    
                     
                </div>   
                {this.renderError(fieldProps.meta)}             
            </div>                      
        );
    }

    renderError({touched, error}){        
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>

            );
        }
    }

    onSubmit = (formValues) => {   
        this.props.onSubmit(formValues);
    }

    render(){
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active" onClick={this.props.onDismiss}>
                <div className="ui middle aligned center aligned grid" id="loginForm" onClick={(e) => e.stopPropagation()}>                
                    <div className="column">
                        <h2 className="ui blue image header">        
                            <div className="content">
                                Log in to your account
                            </div>
                        </h2>
                        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className="ui stacked secondary segment">
                                <Field name="username" component={this.renderInput} label="User Name" placeholder ="User Name" type="text"/>
                                <Field name="password" component={this.renderInput} label="Password" placeholder ="Password" type="password"/>
                                <button className="ui fluid large primary submit button">Login</button>
                            </div>
                            <div className="ui error message">{this.props.error}</div>
                        </form>
                        <div className="ui message">
                            New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector('#loginModal')
        );
    }

    
}

const validate = (formValues) => {    
    const errors = {};

    if(!formValues.username){
        errors.username = 'You must enter user name';
    }

    if(!formValues.password){
        errors.password = 'You must enter a password';
    }

    return errors;
}

export default reduxForm({
    form : 'LoginModal',
    validate
}) (LoginModal);