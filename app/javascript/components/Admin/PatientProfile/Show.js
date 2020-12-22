import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Card from "./Card"

const Show = (props) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    const { id } = props.match.params
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`/patient_profile/${id}`)
            .then(res => {
                setItem(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            <h1>Show</h1>
            <Card profile={ item } />
            <button onClick={ goBack }>
                Back
            </button>
        </div>

    )
}

export default Show