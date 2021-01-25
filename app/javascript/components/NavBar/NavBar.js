import React from "react";
import TopNav from "./TopNav"

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <header className="main" xmlns="http://www.w3.org/1999/html">
                < TopNav locale={this.props.locale} root_path={this.props.root_path}
                         departments={this.props.departments} user={this.props.user}
                         logout_path={this.props.logout_path} login_path={this.props.login_path}
                         registration_path={this.props.registration_path} account_path={this.props.account_path}
                         spec_path={this.props.spec_path}/>
            </header>
        );
    }
}

export default NavBar;