import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"

const ListOfPatientProfiles = props => {

    const initialFormState = {
        height: '',
        weight: '',
        blood_type: '',
        allergies: ''
    }

    const { patientProfiles } = props
    const [profiles, setProfiles] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentProfile, setCurrentProfile] = useState(initialFormState)
    const [errorsFromController, setErrorsFromController] = useState({})

    useEffect(() => {
        setProfiles(patientProfiles, () => console.log(profiles))
    }, [])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
    }

    const addProfile = profile => {
        axios.post(
            '/patient_profile',
            { profile },
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
            name: profile.name,
            position: profile.position,
            img: profile.img
        })
    }

    const updateProfile = updatedProfile => {
        setEditing(false)

        axios.patch(
            `profiles/${updatedProfile.id}`,
            { profile: updatedProfile },
            { headers: headers }
        )
            .then(res => {
                console.log(res)
                setProfiles(profiles.map(profile => (profile.id === updatedProfile.id) ? updateProfile : profile))
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
                    <EditProfileForm
                        currentProfile={ currentProfile }
                        setEditing={ setEditing }
                        updateProfile={ updateProfile }
                        setErrorsFromController={ setErrorsFromController }
                    />
                ) : (
                    <NewProfileForm
                        addProfile={ addProfile }
                        initialFormState={ initialFormState }/>
                )}
            </div>
            <br/>
            <h3>Profiles :</h3>
            <br/>
            <Profile
                profiles={ profiles }
                deleteProfile={ deleteProfile }
                editProfile={ editProfile }
                editing={ editing }
            />
        </div>
    )
}
ListOfPatientProfiles.propTypes = {
    patientProfiles: PropTypes.array
};
export default  ListOfPatientProfiles