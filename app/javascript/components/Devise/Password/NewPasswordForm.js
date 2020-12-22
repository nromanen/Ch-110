import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
class NewPasswordForm extends React.Component {

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
                    <h2>Change your password</h2>

                    <InputField htmlFor={"user_password"} label={"New password"} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <InputField htmlFor={"user_password_confirmation"} label={"Confirm new password"}
                                type={"password"} name={"user[password_confirmation]"}
                                id={"user_password_confirmation"}/>

                    <SubmitButton value={"Change my password"}/>

                    <span className="psw">  <a href="/users/confirmation/new">
                        Didn't receive confirmation instructions?</a></span>

                </div>
            </form>
        );
    }
}

export default NewPasswordForm
