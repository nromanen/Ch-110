import React from 'react';
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


export default function VisitsTable({ visits, locale }) {
    const classes = useStyles();

    if (visits.length) {
        return (
            <TableContainer component={Paper}>
                <h2>{locale.visits}:</h2>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{locale.patient}</TableCell>
                            <TableCell align="left">{locale.doctor}</TableCell>
                            <TableCell align="right">{locale.date}</TableCell>
                            <TableCell align="right">{locale.time}</TableCell>
                            <TableCell align="right">{locale.visit_type}</TableCell>
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
                                <TableCell align="right">{visit.visit_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );} else {
        return (
            <div>
                <h2>{locale.visits}:</h2>
                <h4>{locale.no_visits_message}</h4>
            </div>
        );
    }
}
