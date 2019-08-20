import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logIn, logOut} from '../../actions/authen';

class Auth extends React.Component {

    state = {isSignedIn :false};

    //For test
    componentDidMount(){        
        if(!this.props.isSignedIn){
            var data = {username: 'tungtq', password: '123456'};
            this.props.logIn(data);
        }        
    }

    signOut = () => {
        this.props.logOut();
    }

    componentDidUpdate(previousProps){
        if(previousProps.isSignedIn !== this.props.isSignedIn ){
            this.setState({isSignedIn : this.props.isSignedIn});
        }
    }

    renderButton(){        
        if(!this.props.isSignedIn){
            return(
                <div className="ui small basic icon buttons">
                    <Link to="/login" className="ui button"><i className="sign-in icon"></i></Link>  
                    <Link to="/register" className="ui button"><i className="registered icon"></i></Link> 
                </div>
            );
        }
        else{
            return(
                <div className="ui small basic icon buttons">
                    <button className="ui button" onClick={this.signOut}><i className="sign-out icon"></i></button>  
                </div>
            );
        }
    }

    render(){
        return(
            <div style={{marginLeft:'5px'}}>
               {this.renderButton()}
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn};
}

export default connect(mapStateToProps,{logIn, logOut}) (Auth);