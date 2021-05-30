import React from 'react'
import Header from './layout/Header';
import LeftSidebar from './layout/LeftSidebar';
import RightSidebar from './layout/RightSidebar';
import Footer from './layout/Footer';

export default function UserPrivateRoutes(props) {
    return (
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll main-content-boxed">
            <RightSidebar />
            <LeftSidebar />
            <Header />
            {/* <MainContain /> */}
            <Footer/>
         </div>
    )
}
