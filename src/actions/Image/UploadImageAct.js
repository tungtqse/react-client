import videoApi from '../../apis/videoApi';
import {UPLOAD_IMAGE} from '../../common/actionType';
import history from '../../history';

export const upload = (files) => {

    return async (dispatch, getState) => {     
        
        const {token} = getState().auth;    
        
        if(!token){
            return { type: UPLOAD_IMAGE, payload: {Code: 400, serverState: 'Client Error', Messages: 'Token is null'} }
        }

        const formData = new FormData();
        formData.append('files',files.files);        
      
        const response = await videoApi.post(`/image/upload/`,formData,{            
            headers:{
                Authorization : `Bearer ${token}`,
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        });

        dispatch({ type: UPLOAD_IMAGE, payload: response.data });
        history.push('/');
    }   
};

