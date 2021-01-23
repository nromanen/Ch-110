import React from "react"
import InputField from '../InputField';
import SubmitButton from "../SubmitButton";
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {

        const action_url = `${this.props.action}?locale=${this.props.locale}`
        const forgot_url = `/users/password/new?locale=${this.props.locale}`

        return (
            <form action={action_url} method={this.props.method}>
                <div className="field">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                </div>

                <div className="container">
                    <h2>{I18n.t("nav_bar.log_in")}</h2>

                    <InputField htmlFor={"user_email"} label={I18n.t("activerecord.attributes.users.email")} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <InputField htmlFor={"user_password"} label={I18n.t("activerecord.attributes.users.password")} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <div className="field">
                        <input name="user[remember_me]" type="hidden" value="0"/>
                        <input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me"/>
                        <label htmlFor="user_remember_me">{I18n.t("devise.remember_me")}</label>
                    </div>

                    <SubmitButton value={I18n.t("nav_bar.log_in")}/>

                    <span className="psw">  <a href={forgot_url}>{I18n.t("devise.forgot_password")}</a></span>

                </div>
            </form>
        );
    }
}

export default LoginForm
