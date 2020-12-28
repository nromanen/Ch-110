import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddBoxIcon from '@material-ui/icons/AddBox'

const PatientCell = ({ user }) => {

    const [profile, setProfile] = useState({})
    const [profileExists, setProfileExists] = useState(false)

    useEffect(async () => {
        let isSubscribed = true
        try {
            const res = await axios.get(`/patient_profile?user_id=${ user.id }`)
            console.log(res.data)
            if (isSubscribed) {
                if (res.data.message === 'no profile') {
                    setProfileExists(false)
                } else {
                    setProfileExists(true)
                    setProfile(res.data)
                }
            }
        } catch (err) {
            if (isSubscribed) {
                console.log(err)
            }
        }
        return (() => (isSubscribed = false))
    }, [])

    let cell

    if (profileExists) {
        cell = <div>
            <Link to={ {
                pathname: `/admin/patient_profile/${ profile.id }`,
                email: user.email
            } }>{ <VisibilityIcon /> }</Link>
            <Link to={ {
                pathname: `/admin/patient_profile/edit/${ profile.id }`,
                email: user.email
            } }>{ <EditIcon /> }</Link>
            <Link to={ {
                pathname: `/admin/patient_profile/delete/${ profile.id }`,
                email: user.email
            } }>{ <DeleteIcon /> }</Link>
        </div>
    } else {
        cell = <div>
            <Link to={ {
                pathname: `/admin/patient_profile/add`,
                user_id: user.id,
                email: user.email
            } }>{ <AddBoxIcon /> }</Link>
        </div>
    }

    return (
        cell
    )
}

export  default PatientCell