import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"

import ControlButton from "components/ControlButton"


describe("components/ControlButton", () => {
  it("renders <button>", () => {
    const wrapper = shallow(<ControlButton toggleHacking={sinon.spy()} hacking={true} />)
    expect(wrapper.find("button")).to.have.length(1)
  })

  it("shows Hack on !hacking", () => {
    const wrapper = shallow(<ControlButton toggleHacking={sinon.spy()} hacking={false} />)
    expect(wrapper.text()).to.equal("Hack")
  })

  it("shows Reset on hacking", () => {
    const wrapper = shallow(<ControlButton toggleHacking={sinon.spy()} hacking={true} />)
    expect(wrapper.text()).to.equal("Reset")
  })

  it("calls toggleHacking on click", () => {
    const toggleHacking = sinon.spy()
    const wrapper = shallow(<ControlButton toggleHacking={toggleHacking} hacking={true} />)
    wrapper.find("button").simulate("click")
    expect(toggleHacking.calledOnce).to.be.ok
  })
})