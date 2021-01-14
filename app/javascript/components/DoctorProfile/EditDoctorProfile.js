import React, { useState } from 'react';

const EditProfileForm = ( props ) => {

    const {
        specializations,
        currentProfile,
        user,
        updateProfile,
        setEditing,
        setErrorsFromController
    } = props

    const [profile, setProfile] = useState(currentProfile);

    const handleInputChange = event => {
        const { type, checked, name, value } = event.target;
        setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
    };

    return (
        <form onSubmit={ event => {
            event.preventDefault()
            updateProfile(profile)
        } }>
            <h3>Update profile</h3>
            <h3>{ user.email }</h3>

            <label>Photo: </label><br/>

            <input
                type="text"
                name="photo_path"
                value={ profile.photo_path }
                onChange={ handleInputChange } >
            </input><br/>

            <label>Specialization: </label><br/>
            <select
                name='specialization'
                value={ profile.specialization }
                onChange={ handleInputChange }
            >
                <option value=''>Choose your specialization ...</option>
                {Object.keys(specializations).map((key, index) => <option
                    key={ index }
                    value={ key }>
                    { key }
                </option>)}
            </select><br/><br/>

            <label>Description: </label><br/>
            <textarea name="description" value={ profile.description } onChange={ handleInputChange } /><br/><br/>
            <input
                type="hidden"
                name="user_id"
                value={ profile.user_id }>
            </input>

            <button>Update profile</button>
            <button onClick={() => {
                setEditing(false)
                setErrorsFromController([])
                }
            }>
                Cancel
            </button>
            <hr/>
        </form>
    )
}

export default EditProfileForm