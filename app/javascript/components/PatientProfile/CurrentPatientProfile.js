import React, { useState, useEffect } from 'react';
import axios from "axios";

const CurrentProfile = ( { currentUser } ) => {
    const [patientProfile, setPatientProfile] = useState({})

    useEffect(() => {
        if (currentUser.role === 'patient') {

        }
    })
    return (
        <h1>{ currentUser.role }</h1>
    )
}

export default CurrentProfile;