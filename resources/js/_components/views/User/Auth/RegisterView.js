import React from 'react'
import { Link } from 'react-router-dom';
import {useFormFields}   from '../../../helpers/hooksFormInput';
import {useDispatch, useSelector} from 'react-redux';
import { signUpAction } from '../../../store/actions/User/Auth/AuthActions';
import { displayErrorMessage } from '../../../helpers/displayErr';
// import Script from 'react-load-script';

export default function RegisterView() {


    const dispatch = useDispatch();

    const authResponse = useSelector(state=>state.userAuth.userAuthResponse)
    const formErr = useSelector(state=>state.userAuth.form_error)
    if(authResponse !=="" && authResponse !== 'loading'){
        console.log(authResponse.success);
    }

    console.log(formErr);


    const [fields, handleFieldChange] = useFormFields({
        name:'',
        email:'',
        password:'',
        confirm_pass:''
    });

    const userRegister = (e)=>{
        e.preventDefault();
        console.log("Register Form Submit");
        console.log(fields);
        const passwordMatch = checkPasswordMatch(fields.password, fields.confirm_pass);
        if(passwordMatch === true){
            alert("Password donot match please check password");
            return;
        }
        clearAuthDiv();
        dispatch(signUpAction(fields))
    }

    const clearAuthDiv =()=>{
        let authErr = document.querySelector('#authErr');
        authErr.innerHTML = '';
    }

    const checkPasswordMatch = (password, confirm_pass) =>{
        return password !== confirm_pass?true:false;
    };

    const successMessage = (successMessage)=>{
        return <div dangerouslySetInnerHTML={{__html: '<div class="alert alert-success alert-dismissable" role="alert">'+successMessage+'</div>'}} ></div>;
    }


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
                        <i className="fa fa-angles-right" /> Create User account .
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
                        {/* <button type="button" className="js-notify btn btn-sm btn-alt-info" data-type="danger" data-align="left" data-icon="fa fa-info-circle" data-message="Congrats! You've reached level 12!">Info</button> */}
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
                        <form className="js-validation-signup px-30" onSubmit={(e)=>userRegister(e)} method="post">
                        <div className={"form-group row " + (formErr.name ? 'is-invalid' : '') }>
                            <div className="col-12">
                                <div className="form-material floating">
                                    <input type="text" className="form-control" id="name" name="name" value={fields.name} onChange={handleFieldChange} required />
                                    <label htmlFor="signup-username">Username</label>
                                </div>
                                <div id="name-error" className="invalid-feedback animated fadeInDown">{formErr.name}</div>
                            </div>
                        </div>
                        <div className={"form-group row " + (formErr.email ? 'is-invalid' : '') }>
                            <div className="col-12">
                            <div className="form-material floating">
                                <input type="email" className="form-control" id="email" name="email" value={fields.email} onChange={handleFieldChange} required />
                                <label htmlFor="signup-email">Email</label>
                            </div>
                            <div id="email-error" className="invalid-feedback animated fadeInDown">{formErr.email}</div>
                            </div>
                        </div>
                        <div className={"form-group row " + (formErr.password ? 'is-invalid' : '') }>
                            <div className="col-12">
                            <div className="form-material floating">
                                <input type="password" className="form-control" id="password" name="password"  value={fields.password} onChange={handleFieldChange} required />
                                <label htmlFor="signup-password">Password</label>
                            </div>
                            <div id="password-error" className="invalid-feedback animated fadeInDown">{formErr.password}</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-12">
                            <div className="form-material floating">
                                <input type="password" className="form-control" id="confirm_pass" name="confirm_pass" value={fields.confirm_pass} onChange={handleFieldChange} required />
                                <label htmlFor="signup-password-confirm">Password Confirmation</label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="signup-terms" name="signup-terms" />
                                <label className="custom-control-label" htmlFor="signup-terms">I agree to Terms &amp; Conditions</label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-sm btn-hero btn-alt-success">
                            <i className="fa fa-plus mr-10" /> Create Account
                            </button>
                            <div className="mt-30">
                            <a className="link-effect text-muted mr-10 mb-5 d-inline-block" href="!#" data-toggle="modal" data-target="#modal-terms">
                                <i className="fa fa-book text-muted mr-5" /> Read Terms
                            </a>
                            <Link className="link-effect text-muted mr-10 mb-5 d-inline-block" to="/user/login">
                                <i className="fa fa-user text-muted mr-5" /> Sign In
                            </Link>
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

        </div>

    )
}
