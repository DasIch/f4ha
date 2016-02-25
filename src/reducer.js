import ActionTypes from "ActionTypes"


const initialState = { hacking: false, candidates: [] }

let nextCandidateID = 1

const likenessTo = (a, b) => {
  let likeness = 0
  for (let i = 0; i < a.length; i++) {
    likeness += a[i] === b[i] ? 1 : 0
  }
  return likeness
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CANDIDATE:
      return Object.assign({}, state, {
        candidates: state.candidates.concat({
          id: nextCandidateID++,
          word: action.word,
          isExcluded: false
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
    case ActionTypes.SET_LIKENESS:
      let selectedWord
      return Object.assign({}, state, {
        candidates: state.candidates.map((candidate) => {
          if (candidate.id === action.candidateId) {
            selectedWord = candidate.word
            return Object.assign({}, candidate, {
              likeness: action.likeness,
              isExcluded: true
            })
          } else {
            return candidate
          }
        }).map((candidate) => {
          if (candidate.isExcluded) {
            return candidate
          } else {
            const likeness = likenessTo(candidate.word, selectedWord)
            return Object.assign({}, candidate, {
              isExcluded: (
                action.likeness === 0 && likeness > 0 ||
                action.likeness > 0 && likeness < action.likeness
              )
            })
          }
        })
      })
    default:
      return state
  }
}

export default reducer