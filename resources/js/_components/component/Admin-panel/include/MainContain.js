import React, { Component } from 'react'

export default class MainContain extends Component {
    render() {
        return (
            <React.Fragment>
                 {/* Main Container */}
        <main id="main-container">
          {/* Page Content */}
          <div className="content">
            <h2 className="content-heading">Static Header - Classic</h2>
            <p>This is the classic style for the Header with a light background color.</p>
            {/* Dummy content */}
            <h2 className="content-heading">Dummy Content <small>To preview Header behaviour on scroll</small></h2>
            <div className="block">
              <div className="block-content">
                <p className="text-center py-100">...</p>
              </div>
            </div>
            <div className="block">
              <div className="block-content">
                <p className="text-center py-100">...</p>
              </div>
            </div>
            <div className="block">
              <div className="block-content">
                <p className="text-center py-100">...</p>
              </div>
            </div>
            <div className="block">
              <div className="block-content">
                <p className="text-center py-100">...</p>
              </div>
            </div>
            {/* END Dummy content */}
          </div>
          {/* END Page Content */}
        </main>
        {/* END Main Container */}
            </React.Fragment>
        )
    }
}
