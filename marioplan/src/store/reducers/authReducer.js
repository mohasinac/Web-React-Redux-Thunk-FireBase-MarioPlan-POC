const initState = {
    authError : null
}
const authReducer =(state=initState,action) =>{
    switch (action.type) {
        case 'USER_SIGNIN_ERROR':
            console.log(action.err)
            return {
                ...state,
                authError :  action.err.message
            }
        case 'USER_SIGNIN_SUCEESS':
            console.log('signIn Success')
            return {
                ...state,
                authError :  null
            }
        case 'USER_SIGNOUT_SUCEESS':
            console.log('signed Out')
            return {
                ...state
            }
        default:
            return state
    }
}

export default authReducer;