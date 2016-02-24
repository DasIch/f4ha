import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "containers/App"
import candidates from "reducers/candidates"


window.store = createStore(candidates)

ReactDOM.render(
  <Provider store={window.store}>
    <App />
  </Provider>,
  document.getElementById("content")
)