import React from 'react';

const Card = ({ profile }) => {

    return (
        <div key={ profile.id }>
            <h3>{ profile.user_id }</h3>
            <p>Height: { profile.height }</p>
            <p>Weight: { profile.weight }</p>
            <p>Blood type: { profile.blood_type }</p>
            <p>Allergies: { profile.allergies }</p>
            <p>Gender: { profile.gender }</p>
            <p>Is insured: { String(profile.is_insured) }</p>
            <hr/>
        </div>
    )
}

export default Card