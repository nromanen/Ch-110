import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

import { DirectUpload } from 'activestorage';

const NewProfileForm = props => {
    const [profile, setProfile] = useState(props.initialFormState);
    const [formData, setFormData] = useState({
        image: undefined
        });

    useEffect(() => {
        setProfile(props.initialFormState)
    },[props.initialFormState])

    const handleInputChange = event => {
        if (event.target.name === 'image'){
            setFormData(prev =>({
                image: event.target.files[0]
                }));
        } else {
            const { type, checked, name, value } = event.target;
            setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
        }
    };

    const handleSubmit = event => {
            event.preventDefault()
            setProfile(props.initialFormState)     
            fetch('http://localhost:3000/doctor_profile', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(profile)
            })
            .then(response => response.json())
            .then(data => uploadFile(formData.image, data))  
        }

    const uploadFile = (file, user) => {
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error){
                console.log(error)
            } else {
                console.log(file)
                fetch(`http://localhost:3000/doctor_profile/${user.id}`, {
                    method: 'PUT',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({avatar: blob.signed_id, doctor_profile: user})
                })
                    .then(response => response.json())
                    .then(result => console.log(result))
            }
        })
    }
    

   

    return (
        <form onSubmit={ handleSubmit }>
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
                name="image"
                onChange={ handleInputChange } >
            </input><br/><br/>
            
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