import {UPLOAD_IMAGE} from '../common/actionType';

const INTIAL_STATE = {
    code : null,
    serverState: null,
    messages : null
}

export default (state = INTIAL_STATE, action) => {    
    switch(action.type){
        case UPLOAD_IMAGE : {                         
            const {code,messages} = action.payload;
            const serverState = action.payload.state;
            
            return {...state, code,serverState,messages};           
        }      
        default: {
            return state;
        }
    }
}