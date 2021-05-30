import React from 'react'
import {Route, Redirect } from 'react-router-dom'

export const Gaurd = ({component:Component, token:Token, routeRedirect, ...rest}) =>{
    // console.log("Gaurd  : ",rest);
    // console.log("Gaurd routeRedirect : ",routeRedirect);
    // console.log("Gaurd Component : ",Component);


   return( <Route {...rest} render={  props=>{
    //    console.log("Gaurd Route : ",props);
    return (
    localStorage.getItem(Token)?
        <Component {...props} />:
        <Redirect to={{pathname:routeRedirect, state:{form:props.location}}} />
    )
   }
} />
   )

    }
