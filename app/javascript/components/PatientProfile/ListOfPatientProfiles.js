import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import NewPatientProfile from "./NewPatientProfile";
import EditPatientProfile from "./EditPatientProfile";
import PatientProfile from "./PatientProfile";

const ListOfPatientProfiles = props => {

    const { patientProfiles = [], users = [] } = props

    const initialFormState = {
        height: '',
        weight: '',
        blood_type: '',
        allergies: '',
        user_id: users[0].id || 1
    }

    const [profiles, setProfiles] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentProfile, setCurrentProfile] = useState(initialFormState)
    const [errorsFromController, setErrorsFromController] = useState({})

    useEffect(  () => {
        setProfiles(patientProfiles)
        console.log(patientProfiles)
    }, [])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
    }

    const addProfile = patient_profile => {
        axios.post(
            '/patient_profile',
            { patient_profile },
            { headers: headers }
        )
            .then(res => {
                console.log(res.data)
                setProfiles( [...profiles, res.data])
                setErrorsFromController({})
            })
            .catch( error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
            })
    };

    const deleteProfile = id => {
        axios.delete(
            `/patient_profile/${id}.json`,
            { headers: headers }
        )
            .then(response => {
                setProfiles(profiles.filter(profile => profile.id !== id))
            })
            .catch(error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
            })
    }

    const editProfile = profile => {
        setEditing(true)
        setCurrentProfile({
            id: profile.id,
            height: profile.height,
            weight: profile.weight,
            blood_type: profile.blood_type,
            allergies: profile.allergies,
            user_id: profile.user_id
        })
    }

    const updateProfile = updatedProfile => {
        setEditing(false)

        axios.patch(
            `patient_profile/${updatedProfile.id}`,
            { patient_profile: updatedProfile },
            { headers: headers }
        )
            .then(res => {
                console.log(res)
                setProfiles(profiles.map(profile => (profile.id === updatedProfile.id) ? updatedProfile : profile))
                setErrorsFromController({})
            })
            .catch(error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
                setEditing(true)
            })
    }

    let errors = []
    for (let key in errorsFromController) {
        errorsFromController[key].forEach(item => errors.push(`${key}: ${item}`))
    }
    const displayErrors = errors.map((item, index) => <p key={index}>{item}</p>)

    return (
        <div>
            { displayErrors }
            <div>
                { editing ? (
                    <EditPatientProfile
                        currentProfile={ currentProfile }
                        setEditing={ setEditing }
                        updateProfile={ updateProfile }
                        setErrorsFromController={ setErrorsFromController }
                    />
                ) : (
                    <NewPatientProfile
                        users={ users }
                        addProfile={ addProfile }
                        initialFormState={ initialFormState }/>
                )}
            </div>
            <br/>
            <h3>Profiles :</h3>
            <br/>
            {profiles.map(profile => <PatientProfile
                user={profile}
                key={profile.id}
                profile={ profile }
                deleteProfile={ deleteProfile }
                editProfile={ editProfile }
                editing={ editing } />
                )
            }
        </div>
    )
}
ListOfPatientProfiles.propTypes = {
    patientProfiles: PropTypes.string
};
export default  ListOfPatientProfiles