import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars({ openToast, message, handleCloseToast }) {
    const classes = useStyles();
    // setTimeout(() => handleCloseToast([]), 5000)

    return (
        <div className={classes.root}>
            <Snackbar
                open={ openToast }
                autoHideDuration={ 4000 }
                onClose={ handleCloseToast }
            >
                <Alert
                    onClose={ handleCloseToast }
                    severity="success">
                    { message }
                </Alert>
            </Snackbar>

        </div>
    );
}
