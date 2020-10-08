const initState = {
    authError : null
}
const authReducer =(state=initState,action) =>{
    switch (action.type) {
        case 'USER_SIGNIN_ERROR':
            return {
                ...state,
                authError :  action.err.message
            }
        case 'USER_SIGNIN_SUCEESS':
            return {
                ...state,
                authError :  null
            }
        case 'USER_SIGNOUT_SUCEESS':
            return {
                ...state
            }
        case 'USER_SIGNUP_SUCESS':
            return state
        case 'USER_SIGNUP_ERROR':
            return {
                ...state,
                authError :  action.err.message
            }
        default:
            return state
    }
}

export default authReducer;