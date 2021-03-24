import  {LOGIN}  from './constants';


export const changeEmail = email =>({
    type:LOGIN.CHANGE_EMAIL,
    email
})

export const changePassword = password =>({
    type:LOGIN.CHANGE_PASSWORD,
    password 
})

export const submitLoginData=()=>({
    type:LOGIN.SUBMITLOGINDATA
})
// export const getRestuarantData=()=>({
//     type:.GET_RESTUARANT_DATA,
    
// })
// export const getRestuarantDataApi=(data)=>({
//     type:RESTUARANTS.GET_RESTUARANT_DATA_API,
//     data
// })
export const loginUserSuccess = (userToken) => {
    return {
        type: LOGIN.LOGIN_USER_SUCCESSFUL,
        userToken
    }
}
export const loginError = (error) => {
    return {
        type: LOGIN.LOGIN_USER_ERROR,
        error
    }
}
export const errorChange = (error) => {
    return {
        type: LOGIN.LOGIN_USER_ERROR_CHANGE,
        error
    }
}
// export const logoutUser = (history) => {
//     return {
//         type: LOGOUT_USER,
//         payload: { history }
//     }
// }


