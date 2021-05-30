import React, { Component } from 'react'

import RightSidebar from './include/RightSidebar'
import LeftSidebar from './include/LeftSidebar'
import Header from './include/Header';
import Footer from './include/Footer';
import MainContain from './include/MainContain';

export default class Admin extends Component {
    render() {
        return (
            <div id="page-container" className="sidebar-o enable-page-overlay side-scroll main-content-boxed">
            <RightSidebar />
            <LeftSidebar />
            <Header />
            <MainContain />
            <Footer/>
         </div>
        )
    }
}
