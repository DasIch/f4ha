import reducer from "reducer"
import actions from "actions"


describe("reducer", () => {
  it("returns [] on undefined state and empty action", () => {
    const state = reducer(undefined, {})
    expect(state).to.eql({ hacking: false, candidates: [] })
  })

  it("handles ADD_CANDIDATE", () => {
    const previousState = { hacking: false, candidates: [] }
    const action = actions.addCandidate("hello")
    const nextState = reducer(previousState, action)
    const expectedState = {
      hacking: false,
      candidates: [
        { id: 1, word: "hello" }
      ]
    }
    expect(nextState).to.eql(expectedState)
  })

  it("handles TOGGLE_HACKING false->true", () => {
    const previousState = { hacking: false, candidates: [] }
    const action = actions.toggleHacking()
    const nextState = reducer(previousState, action)
    const expectedState = { hacking: true, candidates: [] }
    expect(nextState).to.eql(expectedState)
  })

  it("handles TOGGLE_HACKING true->false", () => {
    const previousState = { hacking: true, candidates: [] }
    const action = actions.toggleHacking()
    const nextState = reducer(previousState, action)
    const expectedState = { hacking: false, candidates: [] }
    expect(nextState).to.eql(expectedState)
  })

  it("handles TOGGLE_HACKING clears candidates", () => {
    const previousState = {
      hacking: true,
      candidates: [
        { id: 1, word: "hello" }
      ]
    }
    const action = actions.toggleHacking()
    const nextState = reducer(previousState, action)
    const expectedState = { hacking: false, candidates: [] }
    expect(nextState).to.eql(expectedState)
  })

  it("handles SET_LIKENESS", () => {
    const previousState = {
      hacking: true,
      candidates: [
        { id: 1, word: "hello" }
      ]
    }
    const action = actions.setLikeness(1, 2)
    const nextState = reducer(previousState, action)
    const expectedState = {
      hacking: true,
      candidates: [
        { id: 1, word: "hello", likeness: 2 }
      ]
    }
    expect(nextState).to.eql(expectedState)
  })
})