import React from "react";
import TopNavRight from "./TopNavRight"

class TopNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        const spec_url = `${this.props.spec_path}&position=`

        return (
            <div className="topnav">
                <a className={"active"} href={this.props.root_path}>{I18n.t("nav_bar.main")}</a>
                <a href={this.props.root_path}>{I18n.t("nav_bar.news")}</a>
                <a href={this.props.root_path}>{I18n.t("nav_bar.contacts")}</a>

                <div className="dropdown">
                    <button className="dropbtn">{I18n.t("nav_bar.departments")}
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        {Object.keys(this.props.departments).map(key => (
                            <a href={`${spec_url}${this.props.departments[key]}`}>{key}</a>
                        ))}
                    </div>
                </div>

                <TopNavRight locale={this.props.locale} user={this.props.user} logout_path={this.props.logout_path}
                             login_path={this.props.login_path} registration_path={this.props.registration_path}
                             account_path={this.props.account_path}/>
            </div>
        );
    }
}

export default TopNav;