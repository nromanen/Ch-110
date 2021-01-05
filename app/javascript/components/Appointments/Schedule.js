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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({ appointments }) {
    const classes = useStyles();
    console.log(appointments)

    const limit = 4
    let counter = 0
    let newTable = []

    const row = (appointments, i, limit) => {
        return appointments.map((item, index) => {
            if (index >= i && index < i + limit) {
                return (
                    <TableCell key={ item.start } align="right">
                        { item.start.getHours() } -
                        { item.start.getMinutes() }
                    </TableCell>
                )
            }
        })
    }

    for (let i = 0; i < appointments.length; i += limit) {
        newTable.push(
            <TableRow key={ appointments[i].start } >
                <TableCell key={ appointments[i].start } align="right">
                    { appointments[i].start.getHours() }
                </TableCell>
                { row(appointments, i, limit) }
            </TableRow>
        )
    }


    const table = appointments.map(row => {

        if (counter === 0) {
            counter += 1
            return (
                <TableRow key={row.start} >
                    <TableCell key={row.start} align="right">
                        {row.start.getMinutes()}
                    </TableCell>
                </TableRow>
            )
        } else if (counter === limit) {
            counter = 0
            return (
                    <TableCell key={row.start} align="right">
                        {row.start.getHours()}
                    </TableCell>
            )
        } else {
            counter += 1
            return (
                <TableCell key={row.start} align="right">{row.start.getMinutes()}</TableCell>
            )
        }
    })

    return (
        <div className="schedule__table">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    {/*<TableHead>*/}
                    {/*    <TableRow>*/}
                    {/*        <TableCell align="right">Hour</TableCell>*/}
                    {/*        <TableCell align="right">0-15 min</TableCell>*/}
                    {/*        <TableCell align="right">15-30 min</TableCell>*/}
                    {/*        <TableCell align="right">30-45 min</TableCell>*/}
                    {/*        <TableCell align="right">45-60 min</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*</TableHead>*/}
                    <TableBody>
                        {/*{rows.map((row) => (*/}
                        {/*    <TableRow key={row.name}>*/}
                        {/*        <TableCell component="th" scope="row">*/}
                        {/*            {row.name}*/}
                        {/*        </TableCell>*/}
                        {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                        {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                        {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                        {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                        {/*    </TableRow>*/}
                        {/*))}*/}
                        { newTable }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
