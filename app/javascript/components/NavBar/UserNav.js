import React from "react";

class UserNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {

        if (this.props.user) {
            return (
                <React.Fragment>
                    <a href={this.props.account_path}>{this.props.user.name} {this.props.user.surname}</a>
                    <a rel={"nofollow"} data-method={"delete"} href={this.props.logout_path}>{I18n.t("nav_bar.log_out")}</a>
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <a href={this.props.login_path}>{I18n.t("nav_bar.log_in")}</a>
                    <a href={this.props.registration_path}>{I18n.t("nav_bar.sign_up")}</a>
                </React.Fragment>
            );
        }
    }
}

export default UserNav;