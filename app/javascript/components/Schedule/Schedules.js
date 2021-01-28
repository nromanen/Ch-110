import React from "react";
import VisitsTable from './VisitsTable';

class Schedules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {

        return (
            <SchedulesTable userSchedules={this.props.userSchedules} locale={this.props.locale}/>
        );
    }
}

export default Schedules;