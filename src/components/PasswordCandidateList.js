import React, { Component, PropTypes } from "react"

import PasswordCandidate from "components/PasswordCandidate"


export default class PasswordCandidateList extends Component {
  render() {
    return (
      <div>
        {this.props.candidates.map(candidate =>
          <PasswordCandidate key={candidate.id}
                             hacking={this.props.hacking}
                             actions={this.props.actions}
                             {...candidate} />
        )}
      </div>
    )
  }
}
PasswordCandidateList.propTypes = {
  candidates: PropTypes.array.isRequired
}