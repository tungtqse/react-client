import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authenReducer from './authenReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    form: formReducer,
    auth : authenReducer,
    image : imageReducer     
});