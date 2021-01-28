import React, { useState } from 'react';
import { DirectUpload } from 'activestorage';


const EditProfileForm = ( props ) => {

    const {
        specializations,
        currentProfile,
        user,
        avatar,
        updateProfile,
        setEditing,
        setErrorsFromController
    } = props

    const [profile, setProfile] = useState(currentProfile);
    const [formData, setFormData] = useState({
        image: undefined
        });

    const handleInputChange = event => {
        if (event.target.name === 'image'){
            setFormData(prev =>({
                image: event.target.files[0]
                }));
        } else {
            const { type, checked, name, value } = event.target;
            setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
            console.log(profile.id)
        }    
    };

    const handleSubmitChange = event => {
            event.preventDefault()
            updateProfile(profile)
            if (formData.image != undefined){
                uploadFile(formData.image, profile)
                console.log('updload')
            }
            
    };

    const uploadFile = (file, user) => {
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error){
                console.log(error)
            } else {
                console.log(file)
                fetch(`http://localhost:3000/doctor_profile/${user.id}`,
                    {
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

    const url = `http://localhost:3000/${avatar.avatar}`

    return (
        <form onSubmit={handleSubmitChange}>
            <h3>Update profile</h3>
            <h3>{ user.email }</h3>

            <label>Photo: </label><br/>

            <img src={url} /> <br />

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