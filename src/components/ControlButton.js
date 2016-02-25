import React, { Component, PropTypes } from "react"


export default class ControlButton extends Component {
  render() {
    return (
      <button onClick={this.props.toggleHacking}>
        {this.props.hacking ? "Reset" : "Hack" }
      </button>
    )
  }
}
ControlButton.propTypes = {
  toggleHacking: PropTypes.func.isRequired,
  hacking: PropTypes.bool.isRequired
}