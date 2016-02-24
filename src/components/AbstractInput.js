import React, { Component, PropTypes } from "react"


const ENTER_KEY_CODE = 13

export default class AbstractInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: this.props.value || ""
    }
  }

  isValid(value) {
    return true
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      const value = this.state.value.trim()
      if (this.isValid(value)) {
        this.props.save(value)
        this.setState({ value: "" })
      }
    }
  }

  getInputProps() {
    return {
      value: this.state.value,
      onChange: this.handleChange.bind(this),
      onKeyDown: this.handleSubmit.bind(this),
      ref: "input"
    }
  }

  render() {
    return <input {...this.getInputProps()} />
  }
}
AbstractInput.propTypes = {
  save: PropTypes.func.isRequired,
  value: PropTypes.number
}