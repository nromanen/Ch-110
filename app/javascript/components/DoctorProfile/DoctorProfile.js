import React, { useState, useEffect } from 'react'
import axios from "axios";
import { CircularProgress } from '@material-ui/core';
import MediaCard from './Card'
import Button from '@material-ui/core/Button';
import Form from "./Form";



const DoctorProfile = ( { doctor } ) => {

    const [loading, setLoading] = useState(true)
    const [isProfileExist, setIsProfileIsExist] = useState(false)
    const [profile, setProfile] = useState({})
    const [currentProfile, setCurrentProfile] = useState({})
    const [errorsFromController, setErrorsFromController] = useState({})

    const initialProfile = {
        photo_path: '',
        specialization: '',
        description: '',
        user_id: 1
    }


    useEffect(() => {
        axios.get(`doctor_profile/${doctor.id}`)
            .then(res => {
                setLoading(false)
                setIsProfileIsExist(true)
                setProfile(res.data)
                console.log(res.data)
            })
            .catch(err => {
                setLoading(false)
                if (err.message === 'user id not found') {
                    setIsProfileIsExist(false)
                }
                setErrorsFromController(err.response.data)
                console.log(err)
            })
    }, [])

    const addProfile = doctor_profile => {
        axios.post(
            '/doctor_profile',
            { doctor_profile },
        )
            .then(res => {
                console.log(res.data)
                setProfile(res.data)
                setErrorsFromController({})
            })
            .catch( err => {
                console.log(err.response.data )
                setErrorsFromController(err.response.data)
            })
    };

    const deleteProfile = id => {
        axios.delete(
            `/doctor_profile/${id}.json`,
        )
            .then(response => {
                setIsProfileIsExist(false)
                setProfile(initialProfile)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error )
                setErrorsFromController(error.response.data)
            })
    }

    let component
    if (isProfileExist) {
        component = <MediaCard doctor={ doctor } profile={ profile } deleteProfile={ deleteProfile } />
    } else {
        component = <Form addProfile={ addProfile } doctor={ doctor } />
    }

    // let errors = []
    // for (let key in errorsFromController) {
    //     errorsFromController[key].forEach(item => errors.push(`${key}: ${item}`))
    // }
    // const displayErrors = errors.map((item, index) => <p key={index}>{item}</p>)

    return (
        <div>
            {/*{ displayErrors }*/}
            <h1>Doctors profile</h1>
            { loading && <CircularProgress /> }
            { !loading && component }
        </div>
    )
}

 export default  DoctorProfile