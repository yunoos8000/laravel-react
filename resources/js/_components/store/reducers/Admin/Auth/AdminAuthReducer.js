const initState = {
    adminAuthResponse:"",
    form_error:"",
}


const AdminAuthReducer = (state = initState, action)=>{

    switch(action.type)
    {
        case 'RESTART_AUTH_RESPONSE':
            return{
                ...state,
                adminAuthResponse:''
            }
        case 'LOADING':
            return{
                ...state,
                adminAuthResponse:'loading'
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                adminAuthResponse: action.res,
                form_error: ''
            }
        case 'SIGNUP_ERROR':
            console.log("Reducer  ", action.res.success);
            return{
                ...state,
                adminAuthResponse: action.res,
                form_error:action.res.error
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                adminAuthResponse: action.res,
            }
        case 'LOGIN_ERROR':
            console.log(action.res.message);
            return{
                ...state,
                adminAuthResponse: action.res
            }

        case 'CODE_ERROR':
            return{
                ...state,
                adminAuthResponse: "there seems to be a problem please Refrash your Browser"
            }



        default:
            return state
    }
}

export default AdminAuthReducer
