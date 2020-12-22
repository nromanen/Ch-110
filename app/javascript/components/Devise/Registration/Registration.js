import React from "react";
import RegistrationForm from './RegistrationForm';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <RegistrationForm action={"/users"} method={"post"} authenticity_token={this.props.authenticity_token}/>
        );
    }
}

export default Registration;
