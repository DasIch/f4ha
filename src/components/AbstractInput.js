import React, { Component, PropTypes } from "react"


const ENTER_KEY_CODE = 13

export default class AbstractInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: this.props.value || ""
    }
  }

  convert(rawValue) {
    return rawValue
  }

  isValid(value) {
    return true
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      const rawValue = this.state.value.trim()
      let value
      try {
        value = this.convert(rawValue)
      } catch (error) {
        console.error(error.message)
        return
      }
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