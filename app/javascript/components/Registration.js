import React from "react"
import PropTypes from "prop-types"
class Registration extends React.Component {
  render () {
    let user
    if (this.props.login) {
      user = this.props.login
    } else {
      user = 'You are not log in'
    }
    return (
      <React.Fragment>
        Login: {user}
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  login: PropTypes.bool
};
export default Registration
