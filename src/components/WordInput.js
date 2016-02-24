import React, { Component, PropTypes } from "react"

import isUndefined from "isUndefined"


export default class WordInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      word: this.props.word || ""
    }
  }

  isValid() {
    const text = this.state.word.trim()
    if (text.length > 0) {
      this.resetValidity()
      if (isUndefined(this.props.length) ||
          text.length === this.props.length) {
        return true
      } else {
        this.refs.input.setCustomValidity(
          `Needs to be exactly ${this.props.length} long`
        )
        return false
      }
    } else {
      return false
    }
  }

  resetValidity() {
    this.refs.input.setCustomValidity("")
  }

  handleChange(event) {
    this.setState({ word: event.target.value })
    this.resetValidity()
  }

  handleSubmit(event) {
    if (event.keyCode === 13) { // Enter
      const text = this.state.word.trim()
      if (this.isValid()) {
        this.props.addCandidate(text)
        this.setState({ word: "" })
      }
    }
  }

  render() {
    return <input value={this.state.word}
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  onKeyDown={this.handleSubmit.bind(this)}
                  ref="input" />
  }
}
WordInput.propTypes = {
  addCandidate: PropTypes.func.isRequired,
  length: PropTypes.number
}