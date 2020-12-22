import React from "react"
class SubmitButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <div className="actions">
                <input type="submit" name="commit" value={this.props.value} className="button"/>
            </div>
        );
    }
}

export default SubmitButton
