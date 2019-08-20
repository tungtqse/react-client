import videoApi from '../apis/videoApi';
import {SIGN_IN, SIGN_OUT, REGISTER} from '../common/actionType';
import history from '../history';

export const logIn = (formValues) => {

    return async (dispatch) => {        
        const response = await videoApi.post(`/account/login/`,formValues);

        dispatch({ type: SIGN_IN, payload: response.data });
        history.push('/');
    }   
};

export const logOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const register = (formValues) => {
    return async (dispatch) => {        
        const response = await videoApi.post(`/account/register/`,formValues);

        dispatch({ type: REGISTER, payload: response.data });
        history.push('/');
    }   
};