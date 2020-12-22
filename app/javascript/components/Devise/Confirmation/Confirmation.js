import React from "react";
import ConfirmationForm from './ConfirmationForm';

class Confirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <ConfirmationForm action={"/users/confirmation"} method={"post"}
                              authenticity_token={this.props.authenticity_token}/>
        );
    }
}

export default Confirmation;