import React, { useState, useEffect } from 'react'
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function PatientProfileTable() {
    const classes = useStyles();

    const [patientProfiles, setPatientProfiles] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        const response = await axios.get('/patients_profile_get_items')
        setPatientProfiles(response.data)
        console.log(response.data)
    }

    return (
        <div className='patient-profile'>
            <h1>Patient profiles:</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User id</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Is insured</TableCell>
                            <TableCell align="right">Blood type</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Manage</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patientProfiles.map((item) => (
                            <TableRow key={ item.id }>
                                <TableCell component="th" scope="row">
                                    { item.user_id }
                                </TableCell>
                                <TableCell align="right">{ item.gender }</TableCell>
                                <TableCell align="right">{ +item.is_insured }</TableCell>
                                <TableCell align="right">{ item.blood_type }</TableCell>
                                <TableCell align="right">{ item.height }</TableCell>
                                <TableCell align="right">{ item.weight }</TableCell>
                                <TableCell align="right"><Link to={ `/admin/patient_profile/${item.id}` }>Show</Link></TableCell>
                                <TableCell align="right"><Link to={ `/admin/patient_profile/edit/${item.id}` }>Edit</Link></TableCell>
                                <TableCell align="right"><Link to={ `/admin/patient_profile/delete/${item.id}` }>Delete</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to={ `/admin/patient_profile/add` }>Add profile</Link>
        </div>
    )
}

export  default PatientProfileTable