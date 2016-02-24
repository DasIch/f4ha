import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"

import WordInput from "components/WordInput"
import candidates from "reducers/candidates"
import actions from "actions"


window.store = createStore(candidates)

const addCandidate = (word) => {
  window.store.dispatch(actions.addCandidate(word))
}

ReactDOM.render(
  <WordInput addCandidate={addCandidate} />,
  document.getElementById("content")
)