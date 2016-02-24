import React from "react"
import { shallow } from "enzyme"

import PasswordCandidate from "components/PasswordCandidate"


describe("components/PasswordCandidate", () => {
  it("renders word", () => {
    const wrapper = shallow(<PasswordCandidate word="hello" />)
    expect(wrapper.text()).to.equal("hello")
  })
})