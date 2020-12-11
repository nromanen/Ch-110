import React, { useState } from 'react';

const NewProfileForm = ({
        currentProfile,
        updateProfile,
        setEditing,
        setErrorsFromController
        }) => {
    const [profile, setProfile] = useState(currentProfile);

    const handleInputChange = event => {
        const { name, value } = event.target
        setProfile({ ...profile, [name]: value })
    };


    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!profile.height ||
                !profile.weight ||
                !profile.blood_type ||
                !profile.allergies ||
                !profile.user_id) {
                console.log('enter details')
                return
            }
            updateProfile(profile)
        }}>
            <h3>Update profile</h3>
            <label>Height</label>
            <input type="number" name="height" value={profile.height} onChange={handleInputChange} ></input>
            <label>Weight</label>
            <input type="number" name="weight" value={profile.weight} onChange={handleInputChange} ></input>
            <label>Blood type</label>
            <input type="number" name="blood_type" value={profile.blood_type} onChange={handleInputChange} ></input>
            <label>Allergies</label>
            <input type="text" name="allergies" value={profile.allergies} onChange={handleInputChange} ></input>
            <input type="hidden" name="user_id" value={profile.user_id}></input>
            <button>Update profile</button>
            <button onClick={() => {
                setEditing(false)
                setErrorsFromController({})
            }
            }>
                Cancel
            </button>
            <hr/>
        </form>
    )
}

export default NewProfileForm;