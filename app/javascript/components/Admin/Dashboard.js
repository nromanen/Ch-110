import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Dashboard.css'
import DoctorProfileTable from "./DoctorProfileTable"
import PatientProfileTable from "./PatientProfileTable"
import UsersTable from './UsersTable'
import SideBar from "./SideBar"
import Show from './PatientProfile/Show'
import Edit from './PatientProfile/Edit'
import Delete from './PatientProfile/Delete'
import Add from "./PatientProfile/Add";


function Dashboard( props ) {
    const { users, patientProfiles, doctorProfiles, user, enum_blood_types } = props
    console.log(users)
    return (
        <Router>
            <div className='dash-board' >
                <SideBar />
                <div className='content'>
                    <Switch>
                        <Route
                            path='/admin/users'
                            render={(props) => <UsersTable
                                {...props}
                                users={ users }
                                patientProfiles={ patientProfiles }
                            />}
                        />
                        <Route path='/admin/doctor_profiles' component={ DoctorProfileTable } />
                        <Route path='/admin/patient_profiles' component={ PatientProfileTable } />
                        {/*<Route exact path='/admin/patient_profile/add'  component={ Add } />*/}
                        <Route exact path='/admin/patient_profile/add' render={(props) => <Add
                            {...props}
                            enum_blood_types={ enum_blood_types }
                        />}
                        />
                        <Route exact path='/admin/patient_profile/:id' component={ Show } />
                        <Route exact path='/admin/patient_profile/edit/:id' render={(props) => <Edit
                            {...props}
                            enum_blood_types={ enum_blood_types }
                        />}
                        />
                        <Route exact path='/admin/patient_profile/delete/:id'  component={ Delete } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export  default Dashboard