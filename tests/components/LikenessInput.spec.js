import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"

import LikenessInput from "components/LikenessInput"


describe("components/LikenessInput", () => {
  it("renders input", () => {
    const wrapper = shallow(<LikenessInput max={3} save={sinon.spy()} />)
    expect(wrapper.find("input")).to.have.length(1)
  })
})