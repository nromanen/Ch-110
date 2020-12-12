import React, { useState } from 'react';

const NewProfileForm = props => {
    const [profile, setProfile] = useState(props.initialFormState);

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
            props.addProfile(profile)
            setProfile(props.initialFormState)
        }}>
            <h3>Create profile</h3>
            <label>Height</label>
            <input type="number" name="height" value={profile.height} onChange={handleInputChange} ></input>
            <label>Weight</label>
            <input type="number" name="weight" value={profile.weight} onChange={handleInputChange} ></input>
            <label>Blood type</label>
            <input type="number" name="blood_type" value={profile.blood_type} onChange={handleInputChange} ></input>
            <label>Allergies</label>
            <input type="text" name="allergies" value={profile.allergies} onChange={handleInputChange} ></input>
            <div onChange={handleInputChange}>
                <p>Gender</p>
                <input type="radio" value='male' name="gender" /> Male
                <input type="radio" value='female' name="gender" /> Female
            </div>
            <div onChange={handleInputChange}>
                <p>Is insured</p>
                <input type="radio" value={ true } name="is_insured" /> True
                <input type="radio" value={ false } name="is_insured" /> False
            </div>
            <label>
                Choose patient:
                <select name='user_id' value={profile.userId} onChange={handleInputChange}>
                    {props.users.map(user => <option key={user.id} value={user.id}>{user.email}</option>)}
                </select>
            </label>
            <button>Create profile</button>
            <hr/>
        </form>
    )
}

export default NewProfileForm;