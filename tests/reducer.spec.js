import reducer from "reducer"
import actions from "actions"


describe("reducer", () => {
  it("returns [] on undefined state and empty action", () => {
    const state = reducer(undefined, {})
    expect(state).to.eql([])
  })

  it("handles ADD_CANDIDATE", () => {
    const previousState = []
    const action = actions.addCandidate("hello")
    const nextState = reducer(previousState, action)
    const expectedState = [
      { id: 1, word: "hello" }
    ]
    expect(nextState).to.eql(expectedState)
  })
})