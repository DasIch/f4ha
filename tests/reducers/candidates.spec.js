import candidates from "reducers/candidates"
import actions from "actions"


describe("reducers/candidates", () => {
  it("returns [] on undefined state and empty action", () => {
    const state = candidates(undefined, {})
    expect(state).to.eql([])
  })

  it("handles ADD_CANDIDATE", () => {
    const previousState = []
    const action = actions.addCandidate("hello")
    const nextState = candidates(previousState, action)
    const expectedState = [
      { id: 1, word: "hello" }
    ]
    expect(nextState).to.eql(expectedState)
  })
})