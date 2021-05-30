import React, { lazy , Suspense} from 'react';
import LoginView from '../../../views/User/Auth/LoginView';
// const LoginView = lazy(() => import('../../../views/User/Auth/LoginView'));

export default function UserLogin(props) {
    return (
        <div>
            {/* <Suspense fallback={<div id="page-loader" className="show"></div>}> */}
                <LoginView props={props} />
            {/* </Suspense> */}
        </div>
    )
}
