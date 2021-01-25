import React from "react";
import LoginForm from './LoginForm';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <section className="devise">
                <LoginForm action={"/users/sign_in"} method={"post"} authenticity_token={this.props.authenticity_token}
                locale={this.props.locale}/>
            </section>
        );
    }
}

export default Login;
