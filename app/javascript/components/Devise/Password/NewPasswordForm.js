import React from "react"
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import DeviseErrors from "../DeviseErrors"
class NewPasswordForm extends React.Component {

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
                              message={I18n.t("devise.change_password_error")}/>

                <div className="field">
                    <input type="hidden" name='authenticity_token' value={this.props.authenticity_token} />
                </div>

                <div className="container">
                    <h2>{I18n.t("devise.change_password")}</h2>

                    <InputField htmlFor={"user_password"} label={I18n.t("devise.new_password")} type={"password"} name={"user[password]"}
                                id={"user_password"}/>

                    <InputField htmlFor={"user_password_confirmation"} label={I18n.t("devise.confirm_new_password")}
                                type={"password"} name={"user[password_confirmation]"}
                                id={"user_password_confirmation"}/>

                    <SubmitButton value={I18n.t("devise.change_password")}/>

                    <span className="psw">  <a href="/users/confirmation/new">
                        {I18n.t("devise.dnr_confirmation")}</a></span>

                </div>
            </form>
        );
    }
}

export default NewPasswordForm
