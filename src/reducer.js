import ActionTypes from "ActionTypes"


const initialState = []

let nextCandidateID = 1

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CANDIDATE:
      return state.concat({
        id: nextCandidateID++,
        word: action.word
      })
    default:
      return state
  }
}

export default reducer