import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
class ResetPasswordForm extends React.Component {

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
                    <h2>Forgot your password?</h2>

                    <InputField htmlFor={"user_email"} label={"Email"} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <SubmitButton value={"Send me reset password instructions"}/>

                    <span className="psw">  <a href="/users/password/new">
                        Didn't receive confirmation instructions?</a></span>

                </div>
            </form>
        );
    }
}

export default ResetPasswordForm
