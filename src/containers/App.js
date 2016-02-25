import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Header from "components/Header"
import PasswordCandidateList from "components/PasswordCandidateList"
import actions from "actions"


class App extends Component {
  render() {
    const { hacking, candidates, actions } = this.props
    const wordLength = candidates.length > 0 ? candidates[0].word.length : undefined
    return (
      <div>
        <Header hacking={hacking}
                length={wordLength}
                actions={actions} />
        <PasswordCandidateList hacking={hacking}
                               candidates={candidates}
                               actions={actions} />
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