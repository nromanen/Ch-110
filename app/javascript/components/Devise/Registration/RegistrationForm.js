import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import DeviseErrors from "../DeviseErrors"
class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {

        let action_url = `${this.props.action}?locale=${this.props.locale}`
        let confirm_url = `/users/confirmation/new?locale=${this.props.locale}`

        return (
            <form action={action_url} method={this.props.method}>

                <DeviseErrors authenticity_token={this.props.authenticity_token} errors={this.props.errors}
                                    message={I18n.t("account.not_saved")}/>

                <div className="field">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                </div>

                <div className="container">
                    <h2>{I18n.t("nav_bar.sign_up")}</h2>

                    <InputField htmlFor={"user_email"} label={I18n.t("activerecord.attributes.users.email")} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <InputField htmlFor={"user_password"} label={I18n.t("activerecord.attributes.users.password")} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <InputField htmlFor={"user_password_confirmation"} label={I18n.t("activerecord.attributes.users.password_confirmation")}
                                type={"password"} name={"user[password_confirmation]"}
                                id={"user_password_confirmation"}/>

                    <InputField htmlFor={"user_name"} label={I18n.t("activerecord.attributes.users.name")} type={"text"} name={"user[name]"}
                                id={"user_name"}/>

                    <InputField htmlFor={"user_surname"} label={I18n.t("activerecord.attributes.users.surname")} type={"text"} name={"user[surname]"}
                                id={"user_surname"}/>

                    <InputField htmlFor={"user_phone_number"} label={I18n.t("activerecord.attributes.users.phone_number")} type={"text"}
                                name={"user[phone_number]"} id={"user_phone_number"}/>

                    <SubmitButton value={I18n.t("nav_bar.sign_up")}/>

                    <span className="psw">  <a href={confirm_url}>
                        {I18n.t("devise.dnr_confirmation")}</a></span>

                </div>
            </form>
        );
    }
}

export default RegistrationForm
