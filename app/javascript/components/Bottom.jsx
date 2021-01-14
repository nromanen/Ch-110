import React from "react"
import '../../assets/stylesheets/bottom.scss'

class Bottom extends React.Component {
    render () {

        return (

            <div className="bottom">
                <div className="bnav_left">
                    <p>© 2020 "HealthBook" </p>
                </div>
                <div className="bnav_right">
                    <p>Information service: 095-000-00-00</p>
                </div>
            </div>
            
        );
    }
}

export default Bottom