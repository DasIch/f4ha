import React from "react"
import ReactDOM from "react-dom"

import WordInput from "components/WordInput"


const addCandidate = (word) => {
  console.log(word)
}

ReactDOM.render(
  <WordInput addCandidate={addCandidate} />,
  document.getElementById("content")
)