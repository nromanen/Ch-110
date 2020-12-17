import React, { useEffect } from 'react'
import axios from "axios";


const PatientProfile = ({ profile, deleteProfile, editProfile, editing, user }) => {

    // useEffect(() => {
    //     axios.get(`/user/${profile.user_id}`)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    return (
            <div key={ profile.id }>
                <h3>{ profile.user_id }</h3>
                <p>Height: { profile.height }</p>
                <p>Weight: { profile.weight }</p>
                <p>Blood type: { profile.blood_type }</p>
                <p>Allergies: { profile.allergies }</p>
                <p>Gender: { profile.gender }</p>
                <p>Is insured: { String(profile.is_insured) }</p>
                { editing ?
                    null
                    : (
                        <button onClick={() => {
                            console.log(profile)
                            editProfile(profile)
                            }
                        }>
                            Edit
                        </button>
                    )}
                <button onClick={() => deleteProfile(profile.id)}>Delete profile</button>
                <hr/>
            </div>
    )
}

export default PatientProfile