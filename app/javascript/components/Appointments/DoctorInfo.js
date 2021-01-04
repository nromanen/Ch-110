import React from 'react'
import CheckIcon from '@material-ui/icons/Check';

const DoctorInfo = () => {
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