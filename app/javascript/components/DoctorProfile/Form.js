import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields(props) {
    const classes = useStyles();

    const initial = {
        photo_path: '',
        specialization: '',
        description: '',
        user_id: props.doctor.id
    }

    const [profile, setProfile] = useState(initial);


    const handleInputChange = event => {
        const { name, value } = event.target
        setProfile({ ...profile, [name]: value })
    }

    const submit = event => {
        event.preventDefault()
        if (!profile.photo_path ||
            !profile.specialization ||
            !profile.description) {
            console.log('enter details')
            return
        }
        props.addProfile(profile)
        setProfile(initial)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="photo_path"
                    name="photo_path"
                    value={profile.photo_path}
                    label="Photo path"
                    multiline
                    placeholder="Placeholder"
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <TextField
                    id="specialization"
                    name="specialization"
                    value={profile.specialization}
                    label="Specialization"
                    multiline
                    placeholder="Placeholder"
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <TextField
                    id="description"
                    name="description"
                    value={profile.description}
                    label="Description"
                    multiline
                    placeholder="Placeholder"
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <input
                    type="hidden"
                    name="user_id"
                    value={props.doctor.id}>
                </input>
            </div>
            <Button onClick={ submit } variant="contained">Submit</Button>
        </form>
    );
}
