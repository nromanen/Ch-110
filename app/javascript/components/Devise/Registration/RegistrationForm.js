import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
class RegistrationForm extends React.Component {

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
                    <h2>Sign up</h2>

                    <InputField htmlFor={"user_email"} label={"Email"} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <InputField htmlFor={"user_password"} label={"Password"} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <InputField htmlFor={"user_password_confirmation"} label={"Password confirmation"}
                                type={"password"} name={"user[password_confirmation]"}
                                id={"user_password_confirmation"}/>

                    <InputField htmlFor={"user_name"} label={"Name"} type={"text"} name={"user[name]"}
                                id={"user_name"}/>

                    <InputField htmlFor={"user_surname"} label={"Surname"} type={"text"} name={"user[surname]"}
                                id={"user_surname"}/>

                    <InputField htmlFor={"user_phone_number"} label={"Phone number"} type={"text"}
                                name={"user[phone_number]"} id={"user_phone_number"}/>

                    <SubmitButton value={"Sign up"}/>

                    <span className="psw">  <a href="/users/confirmation/new">
                        Didn't receive confirmation instructions?</a></span>

                </div>
            </form>
        );
    }
}

export default RegistrationForm
