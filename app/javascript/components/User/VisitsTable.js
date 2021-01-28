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

export default function VisitsTable({ userVisits, currentUser }) {
    console.log(userVisits)

    const classes = useStyles();

    const [visits, setVisits] = useState([])
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([])
    const [openToast, setOpenToast] = useState(false);

    useEffect(  () => {
        setVisits(userVisits)
        setUser(currentUser)
        console.log(userVisits)
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
                `/visits/${id}.json`,
                { headers: headers }
            )
            if (response.status === 204) {
                setVisits(visits.filter(visit => visit.id !== id));
                setOpenToast(true)
            } else {
                console.log('Error!');
            }
        } catch (error) {
            // setErrors(error)
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
    ));

    if (visits.length) {
        return (
            <div>
                { errorMessages }
            <TableContainer component={Paper}>
                <h2>{I18n.t("activerecord.attributes.visits.visits")}:</h2>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{I18n.t(`activerecord.attributes.visits.${user.role == 'patient' ? 'doctor' : 'patient' }`)}</TableCell>
                            <TableCell align="right">{I18n.t("activerecord.attributes.visits.date")}</TableCell>
                            <TableCell align="right">{I18n.t("activerecord.attributes.visits.time")}</TableCell>
                            <TableCell align="right">{I18n.t("activerecord.attributes.visit_types.duration")}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visits.map((visit) => (
                            <TableRow key={user.role == 'patient' ? visit.doctor_name : visit.patient_name }>
                                <TableCell component="th" scope="row">
                                    {user.role == 'patient' ? visit.doctor_name : visit.patient_name }
                                </TableCell>
                                <TableCell align="right">{new Date(visit.start_time).toLocaleDateString()}</TableCell>
                                <TableCell align="right">{new Date(visit.start_time).toLocaleTimeString()}</TableCell>
                                <TableCell align="right">{visit.visit_duration} {I18n.t("activerecord.attributes.visit_types.minutes")}</TableCell>
                                <TableCell align="right"><button id={ visit.id } onClick={() => deleteVisit(visit.id)}>{I18n.t("activerecord.attributes.visits.cancel_visit")}</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                <CustomizedSnackbars
                    handleCloseToast={ handleCloseToast }
                    openToast={ openToast }
                    message={ I18n.t("activerecord.attributes.visits.was_canceled") }
                />
            </div>
        );} else {
        return (
            <div>
                <h2>{I18n.t("activerecord.attributes.visits.visits")}:</h2>
                <h4>{I18n.t("activerecord.attributes.visits.no_visits_message")}</h4>
            </div>
        );
    }
}
