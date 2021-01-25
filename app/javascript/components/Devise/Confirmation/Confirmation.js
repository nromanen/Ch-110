import React from "react";
import ConfirmationForm from './ConfirmationForm';

class Confirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <section className="devise">
                <ConfirmationForm action={"/users/confirmation"} method={"post"} errors={this.props.errors}
                              authenticity_token={this.props.authenticity_token} locale={this.props.locale}/>
            </section>
        );
    }
}

export default Confirmation;