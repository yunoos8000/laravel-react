import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSidebar extends Component {

    render() {
        return (

        <nav id="sidebar">
            {/* Sidebar Content */}
            <div className="sidebar-content">
                {/* Side Header */}
                <div className="content-header content-header-fullrow px-15">
                {/* Mini Mode */}
                <div className="content-header-section sidebar-mini-visible-b">
                    {/* Logo */}
                    <span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                    <span className="text-dual-primary-dark">c</span><span className="text-primary">b</span>
                    </span>
                    {/* END Logo */}
                </div>
                {/* END Mini Mode */}
                {/* Normal Mode */}
                <div className="content-header-section text-center align-parent sidebar-mini-hidden">
                    {/* Close Sidebar, Visible only on mobile screens */}
                    {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                    <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                    <i className="fa fa-times text-danger" />
                    </button>
                    {/* END Close Sidebar */}
                    {/* Logo */}
                    <div className="content-header-item">
                    <a className="link-effect font-w700" href="!#">
                        <i className="si si-fire text-primary" />
                        <span className="font-size-xl text-dual-primary-dark">code</span><span className="font-size-xl text-primary">base</span>
                    </a>
                    </div>
                    {/* END Logo */}
                </div>
                {/* END Normal Mode */}
                </div>
                {/* END Side Header */}
                {/* Side User */}
                <div className="content-side content-side-full content-side-user px-10 align-parent">
                {/* Visible only in mini mode */}
                <div className="sidebar-mini-visible-b align-v animated fadeIn">
                    <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar15.jpg" alt="" />
                </div>
                {/* END Visible only in mini mode */}
                {/* Visible only in normal mode */}
                <div className="sidebar-mini-hidden-b text-center">
                    <Link className="img-link" to="!#">
                    <img className="img-avatar" src="assets/media/avatars/avatar15.jpg" alt="" />
                    </Link>
                    <ul className="list-inline mt-10">
                    <li className="list-inline-item">
                        <a className="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                    </li>
                    <li className="list-inline-item">
                        {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                        <a className="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="#!">
                        <i className="si si-drop" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="link-effect text-dual-primary-dark" href="op_auth_signin.html">
                        <i className="si si-logout" />
                        </a>
                    </li>
                    </ul>
                </div>
                {/* END Visible only in normal mode */}
                </div>
                {/* END Side User */}
                {/* Side Navigation */}
                <div className="content-side content-side-full">
                <ul className="nav-main">
                    <li>
                    <a href="/dashboard"><i  className="si si-cup" /><span className="sidebar-mini-hide">Dashboard</span></a>
                    </li>
                    <li>
                    <a className="nav-submenu" data-toggle="nav-submenu" href="!#"><i className="si si-badge" /><span className="sidebar-mini-hide">Page Kits</span></a>
                    <ul>
                        <li>
                        <a className="nav-submenu" data-toggle="nav-submenu" href="!#"><span className="sidebar-mini-hide">Dashboards</span></a>
                        <ul>
                            <li>
                            <a href="!#"><span className="sidebar-mini-hide">Dashboard 2</span></a>
                            </li>
                            <li>
                            <a href="!#"><span className="sidebar-mini-hide">Dashboard 3</span></a>
                            </li>
                            <li>
                            <a href="!#"><span className="sidebar-mini-hide">Dashboard 4</span></a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-main-heading"><span className="sidebar-mini-visible">UI</span><span className="sidebar-mini-hidden">User Interface</span></li>
                    <li>
                    <a className="nav-submenu" data-toggle="nav-submenu" href="!#"><i className="si si-puzzle" /><span className="sidebar-mini-hide">Blocks</span></a>
                    <ul>
                        <li>
                        <a href="!#">Styles</a>
                        </li>
                        <li>
                        <a href="!#">Tiles</a>
                        </li>
                        <li>
                        <a href="!#">Draggable</a>
                        </li>
                        <li>
                        <a href="!#">API</a>
                        </li>
                    </ul>
                    </li>

                </ul>
                </div>
                {/* END Side Navigation */}
            </div>
            {/* Sidebar Content */}
        </nav>

        )
    }
}
