import React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import {register} from '../../actions/authen';
import {Field, reduxForm} from 'redux-form';

class Register extends React.Component{

    onSubmit = (formValues) => {
        this.props.register(formValues);
    }

    renderInput = (fieldProps) =>{  
        const className = `field ${fieldProps.meta.touched && fieldProps.meta.error ? 'error' : ''}`;
        return(
            <div className={className}>
                <label>{fieldProps.label}</label>
                <input {...fieldProps.input} autoComplete="off" placeholder={fieldProps.placeholder} type={fieldProps.type}/>  
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


    render(){
        return(
            <div>
                <h3>Register</h3>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="username" component={this.renderInput} label="User Name" type="text" placeholder="User Name"/>
                    <Field name="password" component={this.renderInput} label="Password" type="password" placeholder="Password"/>
                    <Field name="repassword" component={this.renderInput} label="Comfirm Password" type="password" placeholder="Comfirm Password"/>
                    <Field name="email" component={this.renderInput} label="Email" type="email" placeholder="Email Address"/>
                    <button className="ui button primary">Submit</button>
                    <button className="ui button secondary" onClick={() => history.push('/')}>Cancel</button>
                </form>
            </div>            
        );
    }
}

const validate = (formValues) => {    
    const errors = {};

    if(!formValues.username){
        errors.username = 'You must enter user name';
    }

    if(!formValues.password){
        errors.password = 'You must enter password';
    }

    if(!formValues.email){
        errors.email = 'You must enter email';
    }

    if(!formValues.repassword){
        errors.repassword = 'You must enter confirm password';
    }

    if(formValues.repassword && formValues.password){
        if(formValues.repassword !== formValues.password){
            errors.repassword = 'You must enter confirm password match with password';
        }
    }

    return errors;
}

const registerForm = reduxForm({
    form : 'RegisterForm',
    validate
}) (Register);

export default connect(null, {register})(registerForm);