import React from "react"
// import PropTypes from "prop-types"
class Registration extends React.Component {
  render () {
    let user_name
    if (this.props.user) {
      user_name = this.props.user.name
    } else {
      user_name = 'You are not log in'
    }
    return (
      <React.Fragment>
        {user_name}
      </React.Fragment>
    );
  }
}

// Registration.propTypes = {
//   user: PropTypes.any
// };
export default Registration
