import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleAlert from './Alert';
import CustomizedSnackbars from './Toast'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SchedulesTable({ userSchedules, locale }) {
    console.log(userSchedules)

    const classes = useStyles();

    const [schedules, setSchedules] = useState([])
    const [errors, setErrors] = useState([])
    const [openToast, setOpenToast] = useState(false);

    useEffect(  () => {
        setSchedules(userSchedules)
        console.log(userSchedules)
    }, [])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf,
        'Accept': 'application/json'
    }

    const deleteVisit = async id => {
        try {
            setErrors([])
            const response = await axios.delete(
                `/schedules/${id}.json`,
                { headers: headers }
            )
            if (response.status === 204) {
                setSchedules(schedules.filter(schedule => schedule.id !== id));
                setOpenToast(true)
            } else {
                console.log('Error!');
            }
        } catch (error) {
            console.log('catchedError!');
            console.log(error.response.data);
            setErrors(error.response.data)
        }
    };

    const handleCloseToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenToast(false);
    };

    const errorMessages = errors.map(item => (
        <SimpleAlert
            key={ item }
            text={ item }
            handleClose={ setErrors }
        />
    ))

    if (scheduless.length) {
        return (
            <div>
                { errorMessages }
                <TableContainer component={Paper}>
                    <h2>{locale.visits}:</h2>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{locale.patient}</TableCell>
                                <TableCell align="left">{locale.doctor}</TableCell>
                                <TableCell align="right">{locale.date}</TableCell>
                                <TableCell align="right">{locale.time}</TableCell>
                                <TableCell align="right">{locale.visit_duration}</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visits.map((visit) => (
                                <TableRow key={visit.patient_name}>
                                    <TableCell component="th" scope="row">
                                        {visit.patient_name}
                                    </TableCell>
                                    <TableCell align="left">{visit.doctor_name}</TableCell>
                                    <TableCell align="right">{new Date(visit.start_time).toDateString()}</TableCell>
                                    <TableCell align="right">{new Date(visit.start_time).toLocaleTimeString()}</TableCell>
                                    <TableCell align="right">{visit.visit_duration} minutes</TableCell>
                                    <TableCell align="right"><button onClick={() => deleteVisit(visit.id)}>Cancel visit</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <CustomizedSnackbars
                    handleCloseToast={ handleCloseToast }
                    openToast={ openToast }
                    message={ 'Visit was successfully canceled' }
                />
            </div>
        );} else {
        return (
            <div>
                <h2>{locale.visits}:</h2>
                <h4>{locale.no_visits_message}</h4>
            </div>
        );
    }
}
