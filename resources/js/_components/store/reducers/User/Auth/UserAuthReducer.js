const initState = {
    userAuthResponse:"",
    form_error:"",
}


const UserAuthReducer = (state = initState, action)=>{

    switch(action.type)
    {
        case 'RESTART_AUTH_RESPONSE':
            return{
                ...state,
                userAuthResponse:''
            }
        case 'LOADING':
            return{
                ...state,
                userAuthResponse:'loading'
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                userAuthResponse: action.res,
                form_error: ''
            }
        case 'SIGNUP_ERROR':
            console.log("Reducer  ", action.res.success);
            return{
                ...state,
                userAuthResponse: action.res,
                form_error:action.res.error
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                userAuthResponse: action.res,
            }
        case 'LOGIN_ERROR':
            console.log(action.res.message);
            return{
                ...state,
                userAuthResponse: action.res
            }

        case 'CODE_ERROR':
            return{
                ...state,
                userAuthResponse: "there seems to be a problem please Refrash your Browser"
            }



        default:
            return state
    }
}

export default UserAuthReducer
