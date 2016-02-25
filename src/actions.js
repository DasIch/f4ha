import ActionTypes from "ActionTypes"


const addCandidate = (word) => {
  return { type: ActionTypes.ADD_CANDIDATE, word: word }
}

const toggleHacking = () => {
  return { type: ActionTypes.TOGGLE_HACKING }
}

export default { addCandidate, toggleHacking }