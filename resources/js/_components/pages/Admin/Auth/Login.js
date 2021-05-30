import React from 'react';
import LoginView from '../../../views/Admin/Auth/LoginView';
// const LoginView = lazy(() => import('../../../views/Admin/Auth/LoginView'));

export default function AdminLogin(props) {
    return (
        <div>
            {/* <Suspense fallback={<div id="page-loader" className="show"></div>}> */}
                <LoginView props={props} />
            {/* </Suspense> */}
        </div>
    )
}
