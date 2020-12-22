import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = (props) => {
    const { id } = props.match.params
    const { enum_blood_types } = props
    const [profile, setProfile] = useState(initialForm)
    useEffect(() => {
        axios.get(`/patient_profile/${id}/edit`)
            .then(res => {
                setProfile(res.data)
                console.log(res.data)
            })
    }, [])

    const handleInputChange = event => {
        const { type, checked, name, value } = event.target;
        setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
    };

    return (
        <div>
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
                <div onChange={ handleInputChange }>
                    <span>Gender: </span>
                    <input
                        type="radio"
                        value='male'
                        name="gender"
                        defaultChecked={ profile.gender === "male" }
                    /> Male
                    <input
                        type="radio"
                        value='female'
                        name="gender"
                        defaultChecked={ profile.gender === "female" } /> Female
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
                <hr/>
            </form>
        </div>
    )
}

export default Form
