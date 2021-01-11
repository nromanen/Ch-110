import React, { useState, useEffect } from 'react'
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios'

const DoctorInfo = ({ doctorId }) => {

    const [doctor, setDoctor] = useState({})

    // useEffect(() => {
    //     axios.get(``)
    // })

    return (
        <div className="header_doctor-info">
            <div className="header__title title">Title</div>
            <ul className="header__list">
                <li><CheckIcon /><span>Name</span></li>
                <li><CheckIcon /><span>Specialization</span></li>
                <li><CheckIcon /><span>Description</span></li>
            </ul>
        </div>
    )
}

export default DoctorInfo