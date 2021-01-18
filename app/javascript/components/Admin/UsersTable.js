import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PatientCell from "./UsersTable/PatientProfileCell";
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable({ users, patientProfiles }) {
    const classes = useStyles();



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
                        <TableCell align="right">Active</TableCell>
                        <TableCell align="right">Patient profile</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={ user.email }>
                            <TableCell component="th" scope="row">
                                { user.email }
                            </TableCell>
                            <TableCell align="right">{ user.name }</TableCell>
                            <TableCell align="right">{ user.surname }</TableCell>
                            <TableCell align="right">{ user.phone_number }</TableCell>
                            <TableCell align="right">{ user.role }</TableCell>
                            <TableCell align="right">{ user.is_active ?
                                <DoneIcon /> :
                                <CloseIcon /> }
                            </TableCell>
                            <TableCell align="right">{ <PatientCell user={ user } /> }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

