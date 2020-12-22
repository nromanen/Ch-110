import React from "react"
class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <div className="field">
                <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
                <input autoFocus={this.props.autofocus} type={this.props.type}
                       value={this.state.value} name={this.props.name} id={this.props.id}/>
            </div>
        );
    }
}

export default InputField
