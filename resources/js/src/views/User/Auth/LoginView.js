import React from 'react';
// import Script from 'react-load-script';
// import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import {useFormFields}   from '../../../helpers/hooksFormInput';
import {useDispatch, useSelector} from 'react-redux';
import { displayErrorMessage } from '../../../helpers/displayErr';
import { loginAction } from '../../../store/actions/User/Auth/AuthActions';


export default function LoginView(props) {


    const dispatch = useDispatch();

    const authResponse = useSelector(state=>state.userAuth.userAuthResponse)

    // const formErr = useSelector(state=>state.userAuth.form_error)
    if(authResponse !=="" && authResponse !== 'loading'){

        if(localStorage.getItem('user-token')){
            props.props.history.push('/user');
        }
    }
    if(localStorage.getItem('user-token')){
        props.props.history.push('/user');
    }

    const [fields, handleFieldChange] = useFormFields({
        email:'',
        password:'',
    });

    const userLogin = (e)=>{
        e.preventDefault();
        console.log("Login Form Submit");

        console.log(fields, props.props);
        clearAuthDiv();
        dispatch(loginAction(fields, props.props))
    }

    const clearAuthDiv =()=>{
        let authErr = document.querySelector('#authErr');
        authErr.innerHTML = '';
    }

    const successMessage = (successMessage)=>{

        return <div dangerouslySetInnerHTML={{__html: '<div class="alert alert-success alert-dismissable" role="alert">'+successMessage+'</div>'}} ></div>;
    }

    // handleScriptLoad() {
    //     this.setState({ scriptLoaded: true })
    //   }


        return (

            <div id="page-container" className="main-content-boxed">

      {/* Main Container */}
      <main id="main-container">
        {/* Page Content */}
        <div className="bg-image" style={{backgroundImage: 'url("/assets/media/photos/photo34@2x.jpg")'}}>
          <div className="row mx-0 bg-earth-op">
            <div className="hero-static col-md-6 col-xl-8 d-none d-md-flex align-items-md-end">
              <div className="p-30 invisible" data-toggle="appear">
                <p className="font-size-h3 font-w600 text-white mb-5">
                  We're very happy you are joining our community!
                </p>
                <p className="font-size-h5 text-white">
                  <i className="fa fa-angles-right" /> Create your account.
                </p>
                <p className="font-italic text-white-op">
                  Copyright © <span className="js-year-copy" />
                </p>
              </div>
            </div>
            <div className="hero-static col-md-6 col-xl-4 d-flex align-items-center bg-white">
              <div className="content content-full">
                {/* Header */}
                <div className="px-30 py-10">
                  <Link className="link-effect font-w700" to="/home">
                    <i className="si si-fire" />
                    <span className="font-size-xl text-primary-dark">code</span><span className="font-size-xl">base</span>
                  </Link>
                  <h1 className="h3 font-w700 mt-30 mb-10">Create New Account</h1>
                  <h2 className="h5 font-w400 text-muted mb-0">Please add your details</h2>
                  <div id="authErr"></div>
                  <div id="authResponse">
                           {
                           authResponse !== "" && authResponse.success === true?
                           successMessage(authResponse.message)
                           :
                           authResponse.success === false?
                           displayErrorMessage(authResponse.message, document.querySelector('#authErr'))
                           :
                           authResponse
                           }
                       </div>
                </div>
                {/* END Header */}
                {/* Sign Up Form */}
                {/* jQuery Validation functionality is initialized with .js-validation-signup class in js/pages/op_auth_signup.min.js which was auto compiled from _es6/pages/op_auth_signup.js */}
                {/* For more examples you can check out https://github.com/jzaefferer/jquery-validation */}
                <form className="js-validation-signup px-30" onSubmit={(e)=>userLogin(e)} method="post">
                <div className={"form-group row " }>
                    <div className="col-12">
                        <div className="form-material floating">
                            <input type="email" className="form-control" id="email" name="email" value={fields.email} onChange={handleFieldChange} required />
                            <label htmlFor="signup-email">Email</label>
                        </div>
                        {/* <div id="email-error" className="invalid-feedback animated fadeInDown">{formErr.email}</div> */}
                    </div>
                </div>
                <div className={"form-group row "  }>
                    <div className="col-12">
                        <div className="form-material floating">
                            <input type="password" className="form-control" id="password" name="password"  value={fields.password} onChange={handleFieldChange} required />
                            <label htmlFor="signup-password">Password</label>
                        </div>
                    {/* <div id="password-error" className="invalid-feedback animated fadeInDown">{formErr.password}</div> */}
                    </div>
                </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-sm btn-hero btn-alt-success">
                      <i className="fa fa-key mr-10" /> Sign In
                    </button>
                    <div className="mt-30">
                      <a className="link-effect text-muted mr-10 mb-5 d-inline-block" href="!#" data-toggle="modal" data-target="#modal-terms">
                        <i className="fa fa-book text-muted mr-5" /> Forget Password
                      </a>
                      {/* <a className="link-effect text-muted mr-10 mb-5 d-inline-block" href="op_auth_signin2.html">
                        <i className="fa fa-user text-muted mr-5" /> Sign Up
                      </a> */}
                    </div>
                  </div>
                </form>
                {/* END Sign Up Form */}
              </div>
            </div>
          </div>
        </div>
        {/* END Page Content */}
      </main>
      {/* END Main Container */}
      {/* <Script url="/assets/js/codebase.app.min.js" onLoad={this.handleScriptLoad.bind(this)} /> */}
    </div>

        )

}
