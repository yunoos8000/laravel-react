import HttpService from '../HttpService';

export const SignUpService = (credentials)=>{

    const http =new HttpService();
    let signUpUrl = "/register"; // change to admin Register API

    return http.postData(credentials, signUpUrl).then((data)=>{
        console.log("Succes",data);
        return data;
    }).catch((error)=>{
        console.log("Error",error);
        return error;
    })
}


export const loginService = (credentials)=>{

    const http =new HttpService();
    let loginUrl = "/login"; // change to admin Login API

    return http.postData(credentials, loginUrl).then((data)=>{
        console.log("Succes",data);
        return data;
    }).catch((error)=>{
        console.log("Error",error);
        return error;
    })
}
