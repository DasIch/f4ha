import React, { Component, PropTypes } from "react"


export default class PasswordCandidate extends Component {
  render() {
    return <span>{this.props.word}</span>
  }
}
PasswordCandidate.propTypes = {
  word: PropTypes.string.isRequired
}