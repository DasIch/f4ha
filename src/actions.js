import ActionTypes from "ActionTypes"


const addCandidate = (word) => {
  return { type: ActionTypes.ADD_CANDIDATE, word: word }
}

export default { addCandidate }