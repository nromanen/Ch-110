import React from "react";
import LoginForm from './LoginForm';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <LoginForm action={"/users/sign_in"} method={"post"} authenticity_token={this.props.authenticity_token}/>
        );
    }
}

export default Login;
