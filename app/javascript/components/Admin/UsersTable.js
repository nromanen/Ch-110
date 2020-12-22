import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PatientCell from "./UsersTable/PatientProfileCell";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ users, patientProfiles }) {
    const classes = useStyles();
    console.log('users from table', users)
    console.log('profiles from table', patientProfiles.find(item => item.user_id === 1))

    const addProfile = patient_profile => {
        axios.post(
            '/patient_profile',
            { patient_profile },
            { headers: headers }
        )
            .then(res => {
                console.log(res.data)
                setProfiles( [...profiles, res.data])
                setInitialFormState(initialForm)
                setErrorsFromController({})
            })
            .catch( error => {
                console.log((error))
                setInitialFormState(JSON.parse(error.response.config.data).patient_profile)
                setErrorsFromController(error.response.data)
            })
    };

    const deleteProfile = id => {
        axios.delete(
            `/patient_profile/${id}.json`,
            { headers: headers }
        )
            .then(response => {
                setProfiles(profiles.filter(profile => profile.id !== id))
            })
            .catch(error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
            })
    }

    const editProfile = profile => {
        setEditing(true)
        setCurrentProfile( profile )
        setErrorsFromController({})
        console.log(currentProfile)
    }

    const updateProfile = updatedProfile => {
        setEditing(false)

        axios.patch(
            `patient_profile/${updatedProfile.id}`,
            { patient_profile: updatedProfile },
            { headers: headers }
        )
            .then(res => {
                console.log(res)
                setProfiles(profiles.map(profile => (profile.id === updatedProfile.id) ? updatedProfile : profile))
                setErrorsFromController({})
            })
            .catch(error => {
                console.log(error.response.data )
                setErrorsFromController(error.response.data)
                setEditing(true)
            })
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Phone number</TableCell>
                        <TableCell align="right">Role</TableCell>
                        <TableCell align="right">Is Active</TableCell>
                        <TableCell align="right">Patient profile</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.email}>
                            <TableCell component="th" scope="row">
                                {user.email}
                            </TableCell>
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.surname}</TableCell>
                            <TableCell align="right">{user.phone_number}</TableCell>
                            <TableCell align="right">{user.role}</TableCell>
                            <TableCell align="right">{+user.is_active}</TableCell>
                            {/*<TableCell align="right">{ (patientProfiles.find(item => item.user_id === user.id) ? 'to profile': 'no profile')}</TableCell>*/}
                            <TableCell align="right">{ <PatientCell user={ user } /> }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

