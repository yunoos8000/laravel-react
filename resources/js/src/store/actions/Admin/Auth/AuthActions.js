import { SignUpService, loginService } from "../../../../services/Admin/AuthService";

export const signUpAction = (credentials)=>{
    return (dispatch)=>{
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});

        SignUpService(credentials).then((res)=>{

            if(res.hasOwnProperty('success') && res.success=== true){
                console.log("if ", res);
                dispatch({type:'SIGNUP_SUCCESS', res});
            }else if(res.hasOwnProperty('success') && res.success===false){
                console.log("else ", res);
                dispatch({type:'SIGNUP_ERROR', res});
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR'}, error);

        }
        )

    }
}
export const loginAction = (credentials, props)=>{
    return (dispatch)=>{
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});

        loginService(credentials).then((res)=>{
            if(res.hasOwnProperty('success') && res.success === true){
                console.log("if ", res);
                localStorage.setItem('admin-token',res.token)
                dispatch({type:'LOGIN_SUCCESS', res});

                setInterval(() => {
                    props.history.push('/admin');
                }, 500);

            }else if(res.hasOwnProperty('success') && res.success===false){
                console.log("else ", res);
                dispatch({type:'LOGIN_ERROR', res});

            }
        },
        error=>{
            dispatch({type:'CODE_ERROR'}, error);

        }
        )

    }
}

