import React, { useEffect } from 'react'
import axios from "axios";


const PatientProfile = ({ profile, deleteProfile, editProfile, editing }) => {

    // useEffect(() => {
    //     axios.get(`/user/${profile.user_id}`)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    return (
            <div key={profile.id}>
                <h3>{profile.user_id}</h3>
                <p>Height: {profile.height}</p>
                <p>Weight: {profile.weight}</p>
                <p>Blood type: {profile.blood_type}</p>
                <p>Allergies: {profile.allergies}</p>
                { editing ?
                    null
                    : (
                        <button onClick={() => editProfile(profile)}>
                            Edit
                        </button>
                    )}
                <button onClick={() => deleteProfile(profile.id)}>Delete profile</button>
                <hr/>
            </div>
    )
}

export default PatientProfile