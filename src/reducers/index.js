import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authenReducer from './authenReducer';

export default combineReducers({
    form: formReducer,
    auth : authenReducer    
});