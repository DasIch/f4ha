import React, { Component, PropTypes } from "react"

import LikenessInput from "components/LikenessInput"
import isUndefined from "isUndefined"


export default class PasswordCandidate extends Component {
  renderLikeness() {
    if (!this.props.hacking) {
      return ""
    }
    const setLikeness = (likeness) => {
      this.props.actions.setLikeness(this.props.id, likeness)
    }
    if (isUndefined(this.props.likeness)) {
      return (
        <LikenessInput max={this.props.word.length}
                       save={setLikeness.bind(this)} />
      )
    } else {
      return <span>{this.props.likeness}</span>
    }
  }

  render() {
    return (
      <div>
        <span>{this.props.word}</span>
        {this.renderLikeness()}
      </div>
    )
  }
}
PasswordCandidate.propTypes = {
  word: PropTypes.string.isRequired
}