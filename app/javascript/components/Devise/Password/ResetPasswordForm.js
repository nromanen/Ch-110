import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import DeviseErrors from "../DeviseErrors"
class ResetPasswordForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {

        const action_url = `${this.props.action}?locale=${this.props.locale}`
        const confirm_url = `/users/confirmation/new?locale=${this.props.locale}`

        return (
            <form action={action_url} method={this.props.method}>

                <DeviseErrors authenticity_token={this.props.authenticity_token} errors={this.props.errors}
                                    message={I18n.t("devise.reset_password_error")}/>

                <div className="field">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                </div>

                <div className="container">
                    <h2>{I18n.t("devise.forgot_password")}</h2>

                    <InputField htmlFor={"user_email"} label={I18n.t("activerecord.attributes.users.email")} autoFocus={"autofocus"} type={"email"}
                                name={"user[email]"} id={"user_email"}/>

                    <SubmitButton value={I18n.t("devise.send_me_rpi")}/>

                    <span className="psw">  <a href={confirm_url}>
                        {I18n.t("devise.dnr_confirmation")}</a></span>

                </div>
            </form>
        );
    }
}

export default ResetPasswordForm
