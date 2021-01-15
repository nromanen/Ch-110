import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    const navStyle={
        color: 'white',
        'textDecoration': 'none',
        padding: '5px'
}
    return (
        <nav className='side-bar'>
            <h3 style={ navStyle }>Menu:</h3>
            <ul className='nav-links'>
                <Link style={ navStyle } to='/admin/users'>
                    <li>Users</li>
                </Link>
                <Link style={ navStyle } to='/admin/doctor_profiles'>
                    <li>Doctors profile</li>
                </Link>
                <Link style={ navStyle } to='/admin/patient_profiles'>
                    <li>Patients profile</li>
                </Link>
                {/*<Link style={ navStyle } to='/admin/appointments?doctor_id=4'>*/}
                {/*    <li>Appointments</li>*/}
                {/*</Link>*/}
            </ul>
        </nav>
    )
}

export default SideBar