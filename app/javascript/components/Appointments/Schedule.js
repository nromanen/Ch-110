import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        minWidth: 650,
    },
}));


export default function BasicTable({ appointments,
                                       limit,
                                       handleButtonTableClick,
                                       selectedDate,
                                        doctorId
                                       }) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [item, setItem] = React.useState({})

    let body = ( <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Appointment</h2>
            <ul>
                <li>
                    Doctor id: { doctorId }
                </li>
                <li>
                    Date: { selectedDate.getFullYear() }-
                    { selectedDate.getMonth() }-
                    { selectedDate.getDate() }
                </li>
                <li>
                    { item.start } -
                    { item.end }
                </li>
            </ul>
            <Button
                color="primary"
                onClick={ () => {
                handleButtonTableClick(item)
                handleClose()
            } } >
                Confirm
            </Button>
            <Button
                onClick={ () => handleClose() }
                color="secondary"
            >
                Close
            </Button>
        </div>
    )


    const handleOpen = item => {
        setItem(item)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    let newTable = []

    const row = (appointments, i, limit) => {
        return appointments.map((item, index) => {
            if (index >= i && index < i + limit) {
                return (
                    <TableCell key={ item.start } align="right">
                        { item.available ?
                            <Button
                                onClick={ () =>{
                                    handleOpen(item)
                                } }
                                variant="outlined"
                                color="primary"
                            >
                                { item.start } - { item.end }
                            </Button> :
                            <Button
                                variant="outlined"
                                color="primary"
                                disabled
                            >
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
                    className={ classes.table }
                    aria-label="simple table"
                >
                    <TableBody>
                        { newTable }
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={ open }
                onClose={handleClose}
            >
                { body }
            </Modal>
        </div>
    );
}
