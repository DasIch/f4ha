import React, { Component, PropTypes } from "react"

import AbstractInput from "components/AbstractInput"
import isUndefined from "isUndefined"


export default class WordInput extends AbstractInput {
  isValid(value) {
    return (
      value.length > 0 && (
        isUndefined(this.props.length) ||
        value.length === this.props.length
      )
    )
  }

  getInputProps() {
    const length = this.props.length && this.props.length.toString()
    return Object.assign({}, super.getInputProps(), {
      type: "text",
      inputMode: "verbatim",
      minLength: length,
      maxLength: length,
      required: "required",
      autoFocus: "autofocus"
    })
  }
}
WordInput.propTypes = Object.assign({}, AbstractInput.propTypes, {
  length: PropTypes.number
})