import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
// import Login from './component/Login';
import Admin from './component/Admin-panel/Admin';
import Home from './pages/Home';
import UserLogin from './pages/User/Auth/Login';
import UserRegister from './pages/User/Auth/Register';
import AdminLogin from './pages/Admin/Auth/Login';
import AdminRegister from './pages/Admin/Auth/Register';
import {Gaurd} from './Gaurd'
import AdminPrivateRoutes from './AdminPrivateRoutes';
import UserPrivateRoutes from './UserPrivateRoutes';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={props=>(
                <Redirect to={{pathname:'/home'}} />
            )} />
            <Route path="/home" component={Home}/>
            <Route path="/user/register" component={UserRegister}/>
            <Route path="/user/login" component={UserLogin}/>

            <Route path="/admin/register" component={AdminRegister}/>
            <Route path="/admin/login" component={AdminLogin}/>

            <Route path="/dashboard" component={Admin}/>

            <Gaurd path="/user" token="user-token" routeRedirect="/user/login" component={UserPrivateRoutes} />
            <Gaurd path="/admin" token="admin-token" routeRedirect="/admin/login" component={AdminPrivateRoutes} />
        </Switch>
    );
}

export default Routes;

