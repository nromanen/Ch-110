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
            if (!profile.height || !profile.weight || !profile.blood_type || !profile.allergies) return;
            setEditing(false)
            setErrorsFromController({})
            updateProfile(profile)
        }}>
            <h3>Create profile</h3>
            <label>Height</label>
            <input type="text" name="height" value={profile.height} onChange={handleInputChange} ></input>
            <label>Weight</label>
            <input type="text" name="weight" value={profile.weight} onChange={handleInputChange} ></input>
            <label>Blood type</label>
            <input type="text" name="blood_type" value={profile.blood_type} onChange={handleInputChange} ></input>
            <label>Allergies</label>
            <input type="text" name="allergies" value={profile.allergies} onChange={handleInputChange} ></input>
            <button>Create profile</button>
            <hr/>
        </form>
    )
}

export default NewProfileForm;