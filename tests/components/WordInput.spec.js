import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"

import WordInput from "components/WordInput"


describe("WordInput", () => {
  it("renders input", () => {
    const wrapper = shallow(<WordInput save={sinon.spy()} />)
    expect(wrapper.find("input")).to.have.length(1)
  })
})