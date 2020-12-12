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
    const handleBooleanRadio = event => {
        const { name, value } = event.target
        setProfile({...profile, [name]: Boolean(value)})
    }


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
            <input
                type="number"
                name="height"
                value={profile.height}
                onChange={handleInputChange} >
            </input>
            <label>Weight</label>
            <input
                type="number"
                name="weight"
                value={profile.weight}
                onChange={handleInputChange} >
            </input>
            <label>Blood type</label>
            <input
                type="number"
                name="blood_type"
                value={profile.blood_type}
                onChange={handleInputChange} >
            </input>
            <label>Allergies</label>
            <input
                type="text"
                name="allergies"
                value={profile.allergies}
                onChange={handleInputChange} >
            </input>
            <p>Gender</p>
            <input
                type="radio"
                value='male'
                name="gender"
                onChange={handleInputChange}
                defaultChecked={profile.gender === "male"}
            /> Male
            <input
                type="radio"
                value='female'
                name="gender"
                onChange={handleInputChange}
                defaultChecked={profile.gender === "female"}
            /> Female
            <p>Is insured</p>
            <input
                type="radio"
                value='1'
                name="is_insured"
                onChange={handleBooleanRadio}
                defaultChecked={ profile.is_insured === true }
            /> True
            <input
                type="radio"
                value=''
                name="is_insured"
                onChange={handleBooleanRadio}
                defaultChecked={ profile.is_insured === false }
            /> False
            <input
                type="hidden"
                name="user_id"
                value={profile.user_id}>
            </input>
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