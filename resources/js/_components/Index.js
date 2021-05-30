// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {store} from './createStore';
import {Provider} from 'react-redux';


class Index extends Component {
  render () {
    return (
      <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
