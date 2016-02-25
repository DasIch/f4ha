import ActionTypes from "ActionTypes"


const initialState = { hacking: false, candidates: [] }

let nextCandidateID = 1

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CANDIDATE:
      return Object.assign({}, state, {
        candidates: state.candidates.concat({
          id: nextCandidateID++,
          word: action.word
        })
      })
    case ActionTypes.TOGGLE_HACKING:
      if (state.hacking) {
        return initialState
      } else {
        return Object.assign({}, state, {
          hacking: !state.hacking
        })
      }
    default:
      return state
  }
}

export default reducer