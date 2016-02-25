import ActionTypes from "ActionTypes"


const addCandidate = (word) => {
  return { type: ActionTypes.ADD_CANDIDATE, word: word }
}

const toggleHacking = () => {
  return { type: ActionTypes.TOGGLE_HACKING }
}

const setLikeness = (candidateId, likeness) => {
  return {
    type: ActionTypes.SET_LIKENESS,
    candidateId: candidateId,
    likeness: likeness
  }
}

export default { addCandidate, toggleHacking, setLikeness }