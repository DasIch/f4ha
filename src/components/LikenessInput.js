import React, { PropTypes } from "react"

import AbstractInput from "components/AbstractInput"


export default class LikenessInput extends AbstractInput {
  convert(rawValue) {
    const value = Number.parseInt(rawValue)
    if (isNaN(value)) {
      throw Error(`${rawValue} is not a number`)
    }
    return value
  }

  isValid(value) {
    return (
      Number.isInteger(value) &&
      value > 0 &&
      value <= this.props.max
    )
  }

  getInputProps() {
    return Object.assign({}, super.getInputProps(), {
      type: "number",
      min: 0,
      max: this.props.max,
      step: 1
    })
  }
}
LikenessInput.propTypes = Object.assign({}, AbstractInput.propTypes, {
  max: PropTypes.number.isRequired
})