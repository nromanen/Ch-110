import React from "react";
import NewPasswordForm from './NewPasswordForm';

class NewPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <NewPasswordForm action={"/users/update_password"} method={"post"}
                             authenticity_token={this.props.authenticity_token}/>
        );
    }
}

export default NewPassword;