import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Card from "./Card"


const Delete = (props) => {
    const history = useHistory();

    const { id } = props.match.params
    const [item, setItem] = useState({})
    const  { email } = props.location

    useEffect(() => {
        axios.get(`/patient_profile/${id}`)
            .then(res => {
                setItem(res.data)
                console.log(res.data)
            })
    }, [])

    const goBack = () => {
        history.goBack()
    }

    const onDelete = () => {
        axios.delete(`/patient_profile/${id}`)
            .then(res => {
                console.log('delete data', res.data)
                goBack()
            })
    }

    return (
        <div>
            <h1>Are you sure?</h1>
            <h3>User email: { email }</h3>
            <Card profile={ item } />
            <button onClick={ onDelete }>
                Delete
            </button>
            <button onClick={ goBack }>
                Cancel
            </button>
        </div>
    )
}

export default Delete