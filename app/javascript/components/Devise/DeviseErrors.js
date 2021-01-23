import React from "react"

class DeviseErrors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {
        if ( this.props.errors.length > 0 ) {
            return (
                <div id="error_explanation" className="alert">
                    <h2>{this.props.message}</h2>
                    <ul>
                        { this.props.errors.map((message) => (
                            <li>{ message }</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default DeviseErrors
