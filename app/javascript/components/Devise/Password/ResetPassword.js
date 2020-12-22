import React from "react";
import ResetPasswordForm from './ResetPasswordForm';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <ResetPasswordForm action={"/users/password"} method={"post"} authenticity_token={this.props.authenticity_token}/>
        );
    }
}

export default ResetPassword;