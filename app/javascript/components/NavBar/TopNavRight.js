import React from "react";
import UserNav from "./UserNav"

class TopNavRight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.addOrUpdateUrlParam = this.addOrUpdateUrlParam.bind(this);
    }

    addOrUpdateUrlParam(name, value)
    {
        var href = window.location.href;
        var regex = new RegExp("[&\\?]" + name + "=");
        var url = '';
        if(regex.test(href))
        {
            regex = new RegExp("([&\\?])" + name + "=\\w+");
            url = href.replace(regex, "$1" + name + "=" + value);
        }
        else
        {
            if(href.indexOf("?") > -1)
                url = href + "&" + name + "=" + value;
            else
                url = href + "?" + name + "=" + value;
        }
        return url
    }

    render () {

        return (
            <div className="topnav-right">
                <div className="dropdown">
                    <button className="dropbtn">{this.props.locale.toUpperCase()}
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href={this.addOrUpdateUrlParam('locale', 'en')}>EN</a>
                        <a href={this.addOrUpdateUrlParam('locale', 'ru')}>RU</a>
                        <a href={this.addOrUpdateUrlParam('locale', 'uk')}>UK</a>
                    </div>
                </div>

                <UserNav user={this.props.user} logout_path={this.props.logout_path}
                         login_path={this.props.login_path} registration_path={this.props.registration_path}
                         account_path={this.props.account_path}/>
            </div>
        );
    }
}

export default TopNavRight;