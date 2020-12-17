import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


const NewProfileForm = props => {
    const [profile, setProfile] = useState(props.initialFormState);

    useEffect(() => {
        setProfile(props.initialFormState)
    },[props.initialFormState])

    const handleInputChange = event => {
        const { name, value } = event.target
        setProfile({ ...profile, [name]: value })
    };

    const handleBooleanRadio = event => {
        const { name, value } = event.target
        console.log(event.target)
        if (value.toLowerCase() === "true") {
            setProfile({...profile, [name]: true})
        }
        if (value.toLowerCase() === "false") {
            setProfile({...profile, [name]: false})
        }
        // setProfile({...profile, [name]: Boolean(value)})
    }


    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.addProfile(profile)
            setProfile(props.initialFormState)
        }}>
            <h3>Create profile</h3>
            <label>Choose patient:</label><br/>
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
                    defaultChecked={ profile.gender === 'male' }
                /> Male
                <input
                    type="radio"
                    value='female'
                    name="gender"
                    defaultChecked={ profile.gender === 'female' }
                /> Female
            </div><br/>
            <div onChange={ handleBooleanRadio }>
                <span>Is insured: </span>
                <input
                    type="radio"
                    value='true'
                    name="is_insured"
                    defaultChecked={ profile.is_insured === true }
                /> True
                <input
                    type="radio"
                    value='false'
                    name="is_insured"
                    defaultChecked={ profile.is_insured === false }
                /> False
            </div><br/>
            {/*<div>*/}
            {/*    <input type="checkbox" id="isInsured" name="is_insured" value="true" />*/}
            {/*    <label htmlFor="isInsured" >Is insured: </label><br/>*/}
            {/*</div>*/}
            <label>Blood type: </label><br/>
            <select name='blood_type' value={ profile.blood_type } onChange={ handleInputChange }>
                <option value=''>Choose your type of blood ...</option>                { Object.keys(props.enum_blood_types).map((key, index) => <option
                    key={ index }
                    value={ key }>
                    { key }
                </option>)}
            </select><br/><br/>
            <button>Create profile</button>
        </form>
    )
}

export default NewProfileForm;