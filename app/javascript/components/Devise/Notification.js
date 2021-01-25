import React from "react";

class Flash extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isFlashOpen: true};
    }

    render () {

        const handleClose = () => {
            this.setState({ isFlashOpen: false });
        }

        if ( this.state.isFlashOpen && this.props.flash ) {
            setTimeout(() => handleClose([]), 5000)
        return (
            <div className="container">
                {this.props.flash.map((message) => (
                    <div className={ message[0] == 'notice' ? 'alert alert-primary' : 'alert alert-danger' } role="alert">
                        { message[1] }
                    </div>
                ))}
            </div>
        );} else {
            return (
                <div></div>
            )
        }
    }
}

export default Flash;
