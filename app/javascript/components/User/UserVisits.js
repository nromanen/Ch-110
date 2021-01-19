import React from "react";
import VisitsTable from './VisitsTable';

class UserVisits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {

        return (
            <VisitsTable userVisits={this.props.userVisits} locale={this.props.locale}/>
        );
    }
}

export default UserVisits;