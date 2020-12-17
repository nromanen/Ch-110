import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import NewPatientProfile from "./NewPatientProfile";
import EditPatientProfile from "./EditPatientProfile";
import PatientProfile from "./PatientProfile";
import SimpleAlerts from './Alert'

const ListOfPatientProfiles = props => {

    const { patientProfiles = [], users = [], enum_blood_types = {} } = props

    let initialForm = {
        height: '',
        weight: '',
        blood_type: '',
        allergies: '',
        gender: 'male',
        is_insured: false,
        user_id: users[0].id || 1
    }

    const mainDiv = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    const [profiles, setProfiles] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentProfile, setCurrentProfile] = useState({})
    const [errorsFromController, setErrorsFromController] = useState({})
    const [initialFormState, setInitialFormState] = useState( initialForm )

    useEffect(  () => {
        setProfiles(patientProfiles)
        console.log(patientProfiles)
        console.log(enum_blood_types)
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
                setInitialFormState(initialForm)
                setErrorsFromController({})
            })
            .catch( error => {
                console.log((error))
                setInitialFormState(JSON.parse(error.response.config.data).patient_profile)
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
        setCurrentProfile( profile )
        setErrorsFromController({})
        console.log(currentProfile)
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
        errorsFromController[key].forEach(item => errors.push(`${ key }: ${ item }`))
    }
    console.log(errors)
    const displayErrors = errors.map((item, index) => {
        // return (<p key={index}>{item}</p>)
        return (
            <SimpleAlerts key={ index } message={ item } />
            )
    })

    return (
        <div style={ mainDiv }>
            <div>
                { displayErrors }
                { editing ? (
                    <EditPatientProfile
                        currentProfile={ currentProfile }
                        user={ users.find(item => item.id === currentProfile.user_id) }
                        setEditing={ setEditing }
                        updateProfile={ updateProfile }
                        enum_blood_types={ enum_blood_types }
                        setErrorsFromController={ setErrorsFromController }
                    />
                ) : (
                    <NewPatientProfile
                        users={ users }
                        addProfile={ addProfile }
                        enum_blood_types={ enum_blood_types }
                        initialFormState={ initialFormState }/>
                )}
            </div>
            <div>
                <h3>Profiles :</h3>
                {profiles.map(profile => <PatientProfile
                    user={ profile }
                    key={ profile.id }
                    profile={ profile }
                    deleteProfile={ deleteProfile }
                    editProfile={ editProfile }
                    editing={ editing } />
                )
                }
            </div>
        </div>
    )
}
ListOfPatientProfiles.propTypes = {
    patientProfiles: PropTypes.array
};
export default  ListOfPatientProfiles