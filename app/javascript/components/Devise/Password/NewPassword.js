import React from "react";
import NewPasswordForm from './NewPasswordForm';

class NewPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <section className="devise">
                <NewPasswordForm action={"/users/update_password"} method={"post"} locale={this.props.locale}
                             authenticity_token={this.props.authenticity_token} errors={this.props.errors}/>
            </section>
        );
    }
}

export default NewPassword;