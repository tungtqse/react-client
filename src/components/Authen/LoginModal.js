import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/login.css';

const Modal = (props) => {

    const onSubmit = (formValues) => {
        debugger
        console.log(formValues);
    }

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui middle aligned center aligned grid" id="loginForm" onClick={(e) => e.stopPropagation()}>                
                <div className="column">
                    <h2 className="ui blue image header">        
                        <div className="content">
                            Log in to your account
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked secondary segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" autoComplete="off" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <button className="ui fluid large primary submit button" onClick={(e) => onSubmit(e)}>Login</button>
                        </div>
                        <div className="ui error message">{props.error}</div>
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

export default Modal;