import React from 'react';
import Button from '@material-ui/core/Button'
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

export default function BasicTable({ appointments,
                                       limit,
                                       handleButtonTableClick }) {
    const classes = useStyles();
    console.log(appointments)

    let counter = 0
    let newTable = []

    const row = (appointments, i, limit) => {
        return appointments.map((item, index) => {
            if (index >= i && index < i + limit) {
                return (
                    <TableCell key={ item.start } align="right">
                        { item.available ?
                            <Button
                                onClick={ () => handleButtonTableClick(item) }
                                variant="outlined"
                                color="primary"
                            >
                                { item.start } - { item.end }
                            </Button> :
                            <Button variant="outlined" color="primary" disabled>
                                { item.start } - { item.end }
                            </Button>
                        }
                    </TableCell>
                )
            }
        })
    }

    for (let i = 0; i < appointments.length; i += limit) {
        newTable.push(
            <TableRow key={ appointments[i].start } >
                <TableCell
                    key={ appointments[i].start }
                    align="right"
                >
                    { appointments[i].start.split(':')[0] }
                </TableCell>
                { row(appointments, i, limit) }
            </TableRow>
        )
    }

    return (
        <div className="schedule__table">
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="simple table"
                >
                    <TableBody>
                        { newTable }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
