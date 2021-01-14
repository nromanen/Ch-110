import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


const NewProfileForm = props => {
    const [profile, setProfile] = useState(props.initialFormState);

    useEffect(() => {
        setProfile(props.initialFormState)
    },[props.initialFormState])

    const handleInputChange = event => {
        const { type, checked, name, value } = event.target;
        setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
    };


    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.addProfile(profile)
            setProfile(props.initialFormState)
        }}>
            <h3>Create profile</h3>
            <label>Choose doctor:</label><br/>
            <select
                name='user_id'
                value={ profile.userId }
                onChange={ handleInputChange }
            >
                { props.users.map(user => <option
                    key={ user.id }
                    value={ user.id }
                >{ user.email }
                </option>) }
            </select><br/><br/>

            <label>Photo: </label><br/>

            <input
                type="file"
                name="photo_path"
                accept="image/png, image/jpeg"
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
                { Object.keys(props.specializations).map((key, index) => <option
                    key={ index }
                    value={ key }>
                    { key }
                </option>)}
            </select><br/><br/>

            <label>Description: </label><br/>
            <textarea name="description" value={ profile.description } onChange={ handleInputChange } /><br/><br/>
            <button>Create profile</button>
        </form>
    )
}

export default NewProfileForm