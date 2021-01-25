import React, { useState, useEffect } from 'react'
import axios from "axios";
import { CircularProgress } from '@material-ui/core';
import MediaCard from './Card'
import Button from '@material-ui/core/Button';
import Form from "./Form";



const DoctorProfile = ( { profile, deleteProfile, editProfile, editing, user, avatar } ) => {
    console.log(avatar.avatar)
    const url = `http://localhost:3000/${avatar.avatar}`;
    return (
            <div key={ profile.id }>
                <img src={url} alt={"photo_path"}/> 
                <p>Specialization: { profile.specialization }</p>
                <p>Description: { profile.description }</p>
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

 export default  DoctorProfile