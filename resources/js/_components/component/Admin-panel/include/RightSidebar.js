import React, { Component } from 'react'

export default class RightSidebar extends Component {
    render() {
        return (
            <aside id="side-overlay">
            {/* Side Header */}
            <div className="content-header content-header-fullrow">
              <div className="content-header-section align-parent">
                {/* Close Side Overlay */}
                {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                <button type="button" className="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                  <i className="fa fa-times text-danger" />
                </button>
                {/* END Close Side Overlay */}
                {/* User Info */}
                <div className="content-header-item">
                  <a className="img-link mr-5" href="be_pages_generic_profile.html">
                    <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar15.jpg" alt="" />
                  </a>
                  <a className="align-middle link-effect text-primary-dark font-w600" href="be_pages_generic_profile.html">John Smith</a>
                </div>
                {/* END User Info */}
              </div>
            </div>
            {/* END Side Header */}
            {/* Side Content */}
            <div className="content-side">
              {/* Search */}
              <div className="block pull-t pull-r-l">
                <div className="block-content block-content-full block-content-sm bg-body-light">
                  <form action="be_pages_generic_search.html" method="post">
                    <div className="input-group">
                      <input type="text" className="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="Search.." />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary px-10">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* END Search */}
              {/* Mini Stats */}
              <div className="block pull-r-l">
                <div className="block-content block-content-full block-content-sm bg-body-light">
                  <div className="row">
                    <div className="col-4">
                      <div className="font-size-sm font-w600 text-uppercase text-muted">Clients</div>
                      <div className="font-size-h4">460</div>
                    </div>
                    <div className="col-4">
                      <div className="font-size-sm font-w600 text-uppercase text-muted">Sales</div>
                      <div className="font-size-h4">728</div>
                    </div>
                    <div className="col-4">
                      <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                      <div className="font-size-h4">$7,860</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END Mini Stats */}
              {/* Friends */}
              <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                  <h3 className="block-title"><i className="fa fa-fw fa-users font-size-default mr-5" />Friends</h3>
                  <div className="block-options">
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i className="si si-refresh" />
                    </button>
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                  </div>
                </div>
                <div className="block-content">
                  <ul className="nav-users push">
                    <li>
                      <a href="be_pages_generic_profile.html">
                        <img className="img-avatar" src="assets/media/avatars/avatar5.jpg" alt="" />
                        <i className="fa fa-circle text-success" /> Amanda Powell
                        <div className="font-w400 font-size-xs text-muted">Photographer</div>
                      </a>
                    </li>
                    <li>
                      <a href="be_pages_generic_profile.html">
                        <img className="img-avatar" src="assets/media/avatars/avatar16.jpg" alt="" />
                        <i className="fa fa-circle text-success" /> Wayne Garcia
                        <div className="font-w400 font-size-xs text-muted">Web Designer</div>
                      </a>
                    </li>
                    <li>
                      <a href="be_pages_generic_profile.html">
                        <img className="img-avatar" src="assets/media/avatars/avatar4.jpg" alt="" />
                        <i className="fa fa-circle text-warning" /> Alice Moore
                        <div className="font-w400 font-size-xs text-muted">UI Designer</div>
                      </a>
                    </li>
                    <li>
                      <a href="be_pages_generic_profile.html">
                        <img className="img-avatar" src="assets/media/avatars/avatar12.jpg" alt="" />
                        <i className="fa fa-circle text-danger" /> Brian Stevens
                        <div className="font-w400 font-size-xs text-muted">Copywriter</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END Friends */}
              {/* Activity */}
              <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                  <h3 className="block-title">
                    <i className="fa fa-fw fa-clock-o font-size-default mr-5" />Activity
                  </h3>
                  <div className="block-options">
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i className="si si-refresh" />
                    </button>
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                  </div>
                </div>
                <div className="block-content">
                  <ul className="list list-activity">
                    <li>
                      <i className="si si-wallet text-success" />
                      <div className="font-w600">+$29 New sale</div>

                        <a href="#!">Admin Template</a>

                      <div className="font-size-xs text-muted">5 min ago</div>
                    </li>
                    <li>
                      <i className="si si-close text-danger" />
                      <div className="font-w600">Project removed</div>
                      <div>
                        <a href="#!">Best Icon Set</a>
                      </div>
                      <div className="font-size-xs text-muted">26 min ago</div>
                    </li>
                    <li>
                      <i className="si si-pencil text-info" />
                      <div className="font-w600">You edited the file</div>
                      <div>
                        <a href="#!">
                          <i className="fa fa-file-text-o" /> Docs.doc
                        </a>
                      </div>
                      <div className="font-size-xs text-muted">3 hours ago</div>
                    </li>
                    <li>
                      <i className="si si-plus text-success" />
                      <div className="font-w600">New user</div>
                      <div>
                        <a href="#!">StudioWeb - View Profile</a>
                      </div>
                      <div className="font-size-xs text-muted">5 hours ago</div>
                    </li>
                    <li>
                      <i className="si si-wrench text-warning" />
                      <div className="font-w600">App v5.5 is available</div>
                      <div>
                        <a href="#!">Update now</a>
                      </div>
                      <div className="font-size-xs text-muted">8 hours ago</div>
                    </li>
                    <li>
                      <i className="si si-user-follow text-pulse" />
                      <div className="font-w600">+1 Friend Request</div>
                      <div>
                        <a href="#!">Accept</a>
                      </div>
                      <div className="font-size-xs text-muted">1 day ago</div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END Activity */}
              {/* Profile */}
              <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                  <h3 className="block-title">
                    <i className="fa fa-fw fa-pencil font-size-default mr-5" />Profile
                  </h3>
                  <div className="block-options">
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                  </div>
                </div>
                <div className="block-content">
                  <form action="be_pages_dashboard.html" method="post" onsubmit="return false;">
                    <div className="form-group mb-15">
                      <label htmlFor="side-overlay-profile-name">Name</label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="side-overlay-profile-name" name="side-overlay-profile-name" placeholder="Your name.." defaultValue="John Smith" />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-user" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-15">
                      <label htmlFor="side-overlay-profile-email">Email</label>
                      <div className="input-group">
                        <input type="email" className="form-control" id="side-overlay-profile-email" name="side-overlay-profile-email" placeholder="Your email.." defaultValue="john.smith@example.com" />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-envelope" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-15">
                      <label htmlFor="side-overlay-profile-password">New Password</label>
                      <div className="input-group">
                        <input type="password" className="form-control" id="side-overlay-profile-password" name="side-overlay-profile-password" placeholder="New Password.." />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-asterisk" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-15">
                      <label htmlFor="side-overlay-profile-password-confirm">Confirm New Password</label>
                      <div className="input-group">
                        <input type="password" className="form-control" id="side-overlay-profile-password-confirm" name="side-overlay-profile-password-confirm" placeholder="Confirm New Password.." />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-asterisk" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6">
                        <button type="submit" className="btn btn-block btn-alt-primary">
                          <i className="fa fa-refresh mr-5" /> Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* END Profile */}
              {/* Settings */}
              <div className="block pull-r-l">
                <div className="block-header bg-body-light">
                  <h3 className="block-title">
                    <i className="fa fa-fw fa-wrench font-size-default mr-5" />Settings
                  </h3>
                  <div className="block-options">
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle" />
                  </div>
                </div>
                <div className="block-content">
                  <div className="row gutters-tiny">
                    <div className="col-6">
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-status" name="side-overlay-settings-status" defaultValue={1} defaultChecked />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-status">Online Status</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-public-profile" name="side-overlay-settings-public-profile" defaultValue={1} />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-public-profile">Public Profile</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-notifications" name="side-overlay-settings-notifications" defaultValue={1} defaultChecked />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-notifications">Notifications</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-updates" name="side-overlay-settings-updates" defaultValue={1} />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-updates">Auto updates</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-api-access" name="side-overlay-settings-api-access" defaultValue={1} defaultChecked />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-api-access">API Access</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-5">
                        <input type="checkbox" className="custom-control-input" id="side-overlay-settings-limit-requests" name="side-overlay-settings-limit-requests" defaultValue={1} />
                        <label className="custom-control-label" htmlFor="side-overlay-settings-limit-requests">API Requests</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END Settings */}
            </div>
            {/* END Side Content */}
          </aside>

        )
    }
}
