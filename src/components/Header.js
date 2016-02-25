import React, { Component, PropTypes } from "react"

import WordInput from "components/WordInput"
import ControlButton from "components/ControlButton"


export default class Header extends Component {
  render() {
    return (
      <div>
        <WordInput disabled={this.props.hacking}
                   length={this.props.length}
                   save={this.props.actions.addCandidate} />
        <ControlButton hacking={this.props.hacking}
                       toggleHacking={this.props.actions.toggleHacking} />
      </div>
    )
  }
}
Header.propTypes = {
  hacking: PropTypes.bool.isRequired,
  length: PropTypes.number
}