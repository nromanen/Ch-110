import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Add = (props) => {

    let initialForm = {
        height: '',
        weight: '',
        blood_type: '',
        allergies: '',
        gender: 'male',
        is_insured: false,
        user_id: props.location.user_id || 1
    }

    const { enum_blood_types } = props
    const  { user_id, email } = props.location
    const history = useHistory();
    const [profile, setProfile] = useState(initialForm)
    const [users, setUsers] = useState( [])


    useEffect(() => {
        if ( !user_id ) {
            axios.get(`/users_to_react_form`)
                .then(res => {
                    setUsers(res.data)
                    console.log(res.data)
                })
        }
    }, [])

    const handleInputChange = event => {
        const { type, checked, name, value } = event.target;
        setProfile({ ...profile, [name]: type === 'checkbox' ? checked : value })
    };

    const addProfile = profile => {
        axios.post(
            `/patient_profile/`,
            {patient_profile: profile},
        )
            .then(res => {
                console.log(res)
                goBack()
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    const goBack = () => {
        history.goBack()
    }

    let selectedUser
    if ( user_id ) {
        selectedUser = <input
                            type="hidden"
                            name="user_id"
                            value={ user_id }>
                        </input>
    } else {
        selectedUser = <div>
            <label>Choose patient:</label><br/>
            <select
                name='user_id'
                value={ user_id }
                onChange={ handleInputChange }
            >
                { users.map(user => <option
                    key={ user.id }
                    value={ user.id }
                >{ user.email }
                </option>) }
            </select><br/><br/>
        </div>
    }

    return (
        <div>
            <h3>User email: { email }</h3>
            <form onSubmit={ event => {
                event.preventDefault()
                addProfile(profile)
            } }>
                <h3>Create profile</h3>
                { selectedUser }
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
                <button>Create profile</button>
                <button onClick={ goBack }>
                    Cancel
                </button>
                <hr/>
            </form>
        </div>
    )
}

export default Add
