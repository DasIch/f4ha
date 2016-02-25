import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import WordInput from "components/WordInput"
import PasswordCandidateList from "components/PasswordCandidateList"
import actions from "actions"


class App extends Component {
  render() {
    const { hacking, candidates, actions } = this.props
    const wordLength = candidates.length > 0 ? candidates[0].word.length : undefined
    return (
      <div>
        <WordInput disabled={hacking}
                   length={wordLength}
                   save={actions.addCandidate} />
        <PasswordCandidateList candidates={candidates} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)