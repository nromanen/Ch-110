import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CircularProgress } from '@material-ui/core';


const CurrentProfile = ( { currentUser } ) => {
    const [patientProfile, setPatientProfile] = useState({})
    const [doctorProfile, setDoctorProfile] = useState({})
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(true)

    const initialDoctor = {
        photo_path: '',
        specialization: '',
        description: ''
    }

    useEffect(() => {
        if (currentUser.role === 'doctor') {
            axios.get(`doctor_profile/${currentUser.id}`)
                .then(res => console.log(res.data))
                .catch(err => {
                    console.log(err.message)
                    if (err.message === 'Request failed with status code 404') {
                        setLoading(false)
                        setDoctorProfile(initialDoctor)
                    }
                })
        }
    })
    return (
        <div>
            <h1>{ currentUser.role }</h1>
            { loading && <CircularProgress /> }

        </div>
    )
}

export default CurrentProfile;