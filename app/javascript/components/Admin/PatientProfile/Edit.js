import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


let initialForm = {
    height: '',
    weight: '',
    blood_type: '',
    allergies: '',
    gender: 'male',
    is_insured: false,
    user_id: 1
}

const Edit = (props) => {

    const { id } = props.match.params
    const { enum_blood_types } = props
    const history = useHistory();
    const [profile, setProfile] = useState(initialForm)
    const  { email } = props.location


    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        let isSubscribed = true
        axios.get(`/patient_profile/${id}/edit`)
            .then(res => {
                if (isSubscribed) {
                    setProfile(res.data)
                    console.log(res.data)
                }
            })
        return () => isSubscribed = false
    }, [])

    const handleInputChange = event => {
        const { type, checked, name, value } = event.target;
        setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
    };

    const updateProfile = updatedProfile => {
        axios.patch(
            `/patient_profile/${updatedProfile.id}`,
            {patient_profile: updatedProfile},
        )
            .then(res => {
                console.log(res)
                goBack()
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    return (
        <div>
            <h3>User email: { email }</h3>
            <form onSubmit={ event => {
                event.preventDefault()
                updateProfile(profile)
            } }>
                <h3>Update profile</h3>
                <h3>{ profile.user_id }</h3>
                <label>Height: </label><br/>
                <input
                    type="number"
                    name="height"
                    value={ profile.height }
                    onChange={ handleInputChange } >
                </input><br/>
                <label>Weight: </label><br/>
                <input
                    type="number"
                    name="weight"
                    value={ profile.weight }
                    onChange={ handleInputChange } >
                </input><br/>
                <label>Allergies: </label><br/>
                <input
                    type="text"
                    name="allergies"
                    value={ profile.allergies }
                    onChange={ handleInputChange } >
                </input><br/><br/>
                <div>
                    <span>Gender: </span>
                    <input
                        type="radio"
                        value='male'
                        name="gender"
                        onChange={ handleInputChange }
                        checked={ profile.gender === "male" }
                    /> Male
                    <input
                        type="radio"
                        value='female'
                        name="gender"
                        onChange={ handleInputChange }
                        checked={ profile.gender === "female" } /> Female
                </div><br/>
                <div>
                    <label
                        htmlFor="isInsured">
                        Is insured:
                    </label>
                    <input
                        type="checkbox"
                        id="isInsured"
                        name="is_insured"
                        checked={ profile.is_insured }
                        onChange={ handleInputChange }
                    />
                </div><br/>
                <label>Blood type: </label><br/>
                <select
                    name='blood_type'
                    value={ profile.blood_type }
                    onChange={ handleInputChange }
                >
                    <option value=''>Choose your type of blood ...</option>
                    {Object.keys(enum_blood_types).map((key, index) => <option
                        key={ index }
                        value={ key }>
                        { key }
                    </option>)}
                </select><br/><br/>
                <input
                    type="hidden"
                    name="user_id"
                    value={ profile.user_id }>
                </input>
                <button>Update profile</button>
                <button onClick={ goBack }>
                    Cancel
                </button>
                <hr/>
            </form>
        </div>
    )
}

export default Edit
