import {SIGN_IN, SIGN_OUT, REGISTER} from '../common/actionType';

const INTIAL_STATE = {
    isSignedIn : null,
    token: null,
    message : null,
    isSuccessful : null
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN : { 
            const {id_token} = action.payload;

            if(!id_token){
                return {...state, isSignedIn : false, token : null, message: action.payload};
            }

            return {...state, isSignedIn : true, token : id_token};
        }
        case SIGN_OUT : {
            return {...state, isSignedIn : false, token : null};
        }
        case REGISTER : {
            const {IsSuccessful, Messages} = action.payload;
            return {...state, isSignedIn : false, isSuccessful : IsSuccessful, message : Messages};
        }
        default: {
            return state;
        }
    }
}