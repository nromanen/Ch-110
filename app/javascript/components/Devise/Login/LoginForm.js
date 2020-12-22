import React from "react"
import InputField from '../InputField';
import SubmitButton from "../SubmitButton";
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {

        return (
            <form action={this.props.action} method={this.props.method}>
                <div className="field">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                </div>

                <div className="container">
                    <h2>Log in</h2>

                    <InputField htmlFor={"user_email"} label={"Email"} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <InputField htmlFor={"user_password"} label={"Password"} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <div className="field">
                        <input name="user[remember_me]" type="hidden" value="0"/>
                        <input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me"/>
                        <label htmlFor="user_remember_me">Remember me</label>
                    </div>

                    <SubmitButton value={"Log In"}/>

                    <span className="psw">  <a href="/users/password/new">Forgot your password?</a></span>

                </div>
            </form>
        );
    }
}

export default LoginForm
