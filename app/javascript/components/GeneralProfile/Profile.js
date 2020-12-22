import React from 'react';
import DoctorProfile from '../DoctorProfile/DoctorProfile'

const CurrentProfile = ( { currentUser } ) => {

    if ( currentUser.role === 'doctor' ) {
        return <DoctorProfile doctor={ currentUser } />;
    }
    return <PatientProfile patient={ currentUser } />;

}

export default CurrentProfile;