import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (

         <div id="page-container" className="main-content-boxed">
  {/* Main Container */}
  <main id="main-container">
    {/* Page Content */}
    <div className="bg-image" style={{backgroundImage: 'url("/assets/media/photos/photo34@2x.jpg")'}}>
      <div className="row mx-0 bg-black-op">
        <div className="hero-static col-md-6 col-xl-8 d-none d-md-flex align-items-md-end">
          <div className="p-30 invisible" data-toggle="appear">
            <p className="font-size-h3 font-w600 text-white">
              Get Inspired and Create.
            </p>
            <p className="font-italic text-white-op">
              Copyright © <span className="js-year-copy" />
            </p>
          </div>
        </div>
        <div className="hero-static col-md-6 col-xl-4 d-flex align-items-center bg-white invisible" data-toggle="appear" data-class="animated fadeInRight">
          <div className="content content-full">
            {/* Header */}
            <div className="px-30 py-10">
              <a className="link-effect font-w700" href="index.html">
                {/* <i className="si si-fire" /> */}
                <span className="font-size-xl text-primary-dark">Jeevan</span><span className="font-size-xl">Utthan</span>
              </a>
              <h1 className="h3 font-w700 mt-30 mb-10">Welcome to Jeevan Utthan</h1>
              <h2 className="h5 font-w400 text-muted mb-0">Please sign in</h2>
            </div>
            {/* END Header */}
            {/* Sign In Form */}
            {/* jQuery Validation functionality is initialized with .js-validation-signin class in js/pages/op_auth_signin.min.js which was auto compiled from _es6/pages/op_auth_signin.js */}
            {/* For more examples you can check out https://github.com/jzaefferer/jquery-validation */}
            <form className="js-validation-signin px-30" action="be_pages_auth_all.html" method="post">
              <div className="form-group row">
                <div className="col-12">
                  <div className="form-material floating">
                    <input type="text" className="form-control" id="login-username" name="login-username" />
                    <label htmlFor="login-username">Username</label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12">
                  <div className="form-material floating">
                    <input type="password" className="form-control" id="login-password" name="login-password" />
                    <label htmlFor="login-password">Password</label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="login-remember-me" name="login-remember-me" />
                    <label className="custom-control-label" htmlFor="login-remember-me">Remember Me</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-sm btn-hero btn-alt-primary">
                  <i className="si si-login mr-10" /> Sign In
                </button>
                <div className="mt-30">
                  {/* <a className="link-effect text-muted mr-10 mb-5 d-inline-block" href="op_auth_signup2.html">
                    <i className="fa fa-plus mr-5" /> Create Account
                  </a> */}
                  <a className="link-effect text-muted mr-10 mb-5 d-inline-block" href="op_auth_reminder2.html">
                    <i className="fa fa-warning mr-5" /> Forgot Password
                  </a>
                </div>
              </div>
            </form>
            {/* END Sign In Form */}
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
}
