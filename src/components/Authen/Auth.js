import React from 'react';
import {Link} from 'react-router-dom';

const Auth = () => {
    return(
        <div style={{marginLeft:'5px'}}>
            <div className="ui small basic icon buttons">
                <Link to="/login" className="ui button"><i className="sign-in icon"></i></Link>  
                <button className="ui button"><i className="registered icon"></i></button>  
            </div>
        </div>    
    );
}

export default Auth;