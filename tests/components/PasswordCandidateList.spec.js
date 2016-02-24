import React from "react"
import { shallow } from "enzyme"

import PasswordCandidate from "components/PasswordCandidate"
import PasswordCandidateList from "components/PasswordCandidateList"


describe("components/PasswordCandidateList", () => {
  it("renders PasswordCandidate", () => {
    const candidates = [
      {
        id: 1,
        word: "hello"
      }
    ]
    const wrapper = shallow(<PasswordCandidateList candidates={candidates} />)
    expect(wrapper.find(PasswordCandidate)).to.have.length.of(1)
  })
})