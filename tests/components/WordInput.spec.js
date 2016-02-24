import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"

import WordInput from "components/WordInput"


describe("WordInput", () => {
  it("renders input", () => {
    const wrapper = shallow(<WordInput addCandidate={sinon.spy()} />)
    expect(wrapper.find("input")).to.have.length(1)
  })
})