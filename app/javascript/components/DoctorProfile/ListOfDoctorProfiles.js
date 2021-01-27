import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import NewDoctorProfile from "./NewDoctorProfile";
import EditDoctorProfile from "./EditDoctorProfile";
import DoctorProfile from "./DoctorProfile";
import SimpleAlerts from './Alert'

import { DirectUpload } from 'activestorage';


const ListOfDoctorProfiles = props => {

    const { doctorProfiles = [], users = [], specializations = {}, avatars = [] } = props

    let initialForm = {
        photo_path: '',
        specialization: '',
        description: '',
        user_id: users[0].id || 1
    }

    const mainDiv = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    const [profiles, setProfiles] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentProfile, setCurrentProfile] = useState({})
    const [errorsFromController, setErrorsFromController] = useState([])
    const [initialFormState, setInitialFormState] = useState( initialForm )

    useEffect(  () => {
        setProfiles(doctorProfiles)
        console.log(doctorProfiles)
        console.log(avatars)
        console.log(specializations)
    }, [])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
    }

    const addProfile = doctor_profile => {
        axios.post(
            '/doctor_profile',
            { doctor_profile },
            { headers: headers }
        )
            .then(res => {
                console.log(res.data)
                setProfiles( [...profiles, res.data])
                setInitialFormState(initialForm)
                setErrorsFromController([])
            })

            .catch( error => {
                console.log((error))
                setInitialFormState(JSON.parse(error.response.config.data).doctor_profile)
                setErrorsFromController(error.response.data)
            })
    };


    const deleteProfile = id => {
        axios.delete(
            `/doctor_profile/${id}.json`,
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
        setErrorsFromController([])
        console.log(currentProfile)
    }

    const updateProfile = updatedProfile => {
        setEditing(false)

        axios.patch(
            `doctor_profile/${updatedProfile.id}`,
            { doctor_profile: updatedProfile },
            { headers: headers }
        )
            .then(res => {
                console.log(res)
                setProfiles(profiles.map(profile => (profile.id === updatedProfile.id) ? updatedProfile : profile))
                setErrorsFromController([])
            })
            .catch(error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
                setEditing(true)
            })
    }

    // let errors = []
    // for (let key in errorsFromController) {
    //     errorsFromController[key].forEach(item => errors.push(`${ key }: ${ item }`))
    // }
    // console.log(errors)
    const displayErrors = errorsFromController.map((item, index) => {
        return (
            <SimpleAlerts key={ index } message={ item } />
            )
    })

    return (
        <div style={ mainDiv }>
            <div>
                { displayErrors }
                { editing ? (
                    <EditDoctorProfile
                        currentProfile={ currentProfile }
                        user={ users.find(item => item.id === currentProfile.user_id) }
                        avatar={avatars.find(item => item.id === currentProfile.id)}
                        setEditing={ setEditing }
                        updateProfile={ updateProfile }
                        specializations={ specializations }
                        setErrorsFromController={ setErrorsFromController }
                    />
                ) : (
                    <NewDoctorProfile
                        users={ users }
                        addProfile={ addProfile }
                        specializations={ specializations }
                        initialFormState={ initialFormState }
                        />
                )}
            </div>
            <div>
                <h3>Profiles :</h3>
                {profiles.map((profile, index) => <DoctorProfile
                    user={ profile }
                    key={ profile.id }
                    profile={ profile }
                    deleteProfile={ deleteProfile }
                    editProfile={ editProfile }
                    editing={ editing }
                    avatar={avatars[index]} />
                )
                }
            </div>
        </div>
    )
}
ListOfDoctorProfiles.propTypes = {
    doctorProfiles: PropTypes.array
};
export default  ListOfDoctorProfiles