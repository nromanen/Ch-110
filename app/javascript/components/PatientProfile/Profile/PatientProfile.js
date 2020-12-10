import React from 'react'

const Profile = ({ profiles, deleteProfile, editProfile, editing }) => {
    return (
        profiles.map(profile =>
            <div key={profile.id}>
                <h3>Name: {profile.height}</h3>
                <h3>Name: {profile.weight}</h3>
                <h3>Name: {profile.blood_type}</h3>
                <h3>Name: {profile.allergies}</h3>
                { editing ?
                    null
                    : (
                        <button onClick={() => editProfile(profile)}>
                            Edit
                        </button>
                    )}
                <button onClick={() => deleteProfile(profile.id)}>Delete profile</button>
                <hr/>
            </div>
        )
    )
}

export default Profile