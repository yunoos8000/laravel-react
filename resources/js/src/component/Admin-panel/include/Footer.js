import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
        <footer id="page-footer" className="opacity-0">
          <div className="content py-20 font-size-xs clearfix">
            <div className="float-right">
              Crafted with <i className="fa fa-heart text-pulse" /> by <a className="font-w600" href="!#" target="_blank">Jeevan Utthan</a>
            </div>
            <div className="float-left">
              <a className="font-w600" href="!#" target="_blank">Jeevan Utthan</a> © <span className="js-year-copy" />
            </div>
          </div>
        </footer>
        )
    }
}
