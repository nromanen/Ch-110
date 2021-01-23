import React from "react";
import RegistrationForm from './RegistrationForm';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <section className="devise">
                <RegistrationForm action={"/users"} method={"post"} authenticity_token={this.props.authenticity_token}
                                  errors={this.props.errors} locale={this.props.locale}/>
            </section>
        );
    }
}

export default Registration;
