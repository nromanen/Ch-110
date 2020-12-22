import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const PatientCell = ({ user }) => {

    const [profile, setProfile] = useState({})

    useEffect(async () => {
        const res = await axios.get(`/patient_profile?user_id=${user.id}`)
        console.log(res.data)
        setProfile(res.data)
    }, [])

    return (
        <div>
            <Link to={ `/admin/patient_profile/${profile.id}` }>Show</Link>
            <Link to={ `/admin/patient_profile/edit/${profile.id}` }>Edit</Link>
            <Link to={ `/admin/patient_profile/delete/${profile.id}` }>Delete</Link>
        </div>
    )
}

export  default PatientCell