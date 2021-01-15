import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Card from "./Card"

const Show = (props) => {

    const history = useHistory();
    const  { email } = props.location

    const goBack = () => {
        history.goBack()
    }

    const { id } = props.match.params
    const [item, setItem] = useState({})

    useEffect(() => {
        let isRendered = true
        if (isRendered) {
            axios.get(`/patient_profile/${id}`)
                .then(res => {
                    setItem(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        return(() => isRendered = false)
    }, [])


    return (
        <div>
            <h1>Show</h1>
            <h3>User email: { email }</h3>
            <Card profile={ item } />
            <button onClick={ goBack }>
                Back
            </button>
        </div>

    )
}

export default Show