import {LOGIN}  from './constants';
import produce from 'immer';
// import Login from './../../../../StarterKit/src/pages/Authentication/Login';
export const initialState= {
        
         login:{
             email:'',
             password:'',
             error:''
         }
 
};

const Login =(state=initialState ,action)=>
    produce(state,draft=>{
	switch (action.type) {
		
       
        case LOGIN.CHANGE_EMAIL:
            draft.login.email = action.email;
            break;
	
        case LOGIN.CHANGE_PASSWORD:
            draft.login.password = action.password;
            break;
	
        case LOGIN.LOGIN_USER_SUCCESSFUL:
            draft.userToken = action.userToken;
        // case LOGIN.GET_RESTUARANT_DATA_API:
        //     draft.data=action.data;
        //     break;
        case LOGIN.LOGIN_USER_ERROR:
            draft.error=action.error

        case LOGIN.LOGIN_USER_ERROR_CHANGE:
            draft.error=action.error
    }

});
export default Login;