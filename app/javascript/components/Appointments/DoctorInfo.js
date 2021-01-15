import React, { useState, useEffect } from 'react'
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios'

const DoctorInfo = ({ doctorId }) => {

    const [doctor, setDoctor] = useState({})

    const fetchDoctor = doctorId => {
        axios.get(`/users_by_id?id=${doctorId}`)
            .then(res => {
                setDoctor(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        fetchDoctor(doctorId)
    },[])

    return (
        <div className="header_doctor-info">
            <div className="header__title title">Doctor: { doctor.name } { doctor.surname }</div>
            <ul className="header__list">
                <li><CheckIcon /><span>Specialization: { doctor.specialization }</span></li>
                <li><CheckIcon /><span>Description: { doctor.description }</span></li>
            </ul>
        </div>
    )
}

export default DoctorInfo