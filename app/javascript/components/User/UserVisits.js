import React from "react";
import VisitsTable from './VisitsTable';

class UserVisits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <VisitsTable visits={this.props.visits} locale={this.props.locale}/>
        );
    }
}

export default UserVisits;