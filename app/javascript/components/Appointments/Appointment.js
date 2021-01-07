import React, { useState, useEffect } from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'
import axios from 'axios'
import DateFnsUtils from '@date-io/date-fns'
import './appointment.css'
import Footer from "./Footer"
import DoctorInfo from "./DoctorInfo"
import BasicTable from "./Schedule"
import { mockAppointments } from './mock.js'

const Appointment = ({ users }) => {

    const initialDate = new Date(Date.now())
    const doctorId = 4

    const [selectedDate, setSelectedDate] = useState(initialDate)
    const [limit, setLimit] = useState(0)
    const [visit_type_id, setVisit_type_id] = useState(0)
    const [appointments, setAppointments] = useState([])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
    }

    const fetchData = async (user_id, date) => {
        try {
            const res = await axios.get(`/slots?doctor_id=${user_id}&date=${date}`)
            const data = res.data
            console.log(data)
            const [ { visit_type_id, slots } ] = data

            const duration = ({start, end}) => {
                const [startHours, startMinutes] = start.split(':')
                const [endHours, endMinutes] = end.split(':')
                const minutesInOneHour = 60
                const dur = (endHours * minutesInOneHour + endMinutes) -
                    (startHours * minutesInOneHour + startMinutes)
                return dur
            }


            switch (duration(slots[0])) {
                case 20:
                    setLimit(3)
                    break
                case 30:
                    setLimit(2)
                    break
            }
            setAppointments(slots)
            setVisit_type_id(visit_type_id)
        } catch (error) {
            console.log(error)
        }
    }

    const dateFormat = (date) => {
        let stringMonth
        let stringDay
        if (date.getMonth() < 10) {
            stringMonth = `0${date.getMonth() + 1}`
        } else {
            stringMonth = `${date.getMonth() + 1}`
        }

        if (date.getDate() < 10) {
            stringDay = `0${date.getDate()}`
        } else {
            stringDay = `${date.getDate()}`
        }

        return `${date.getFullYear()}-${stringMonth}-${stringDay}`
    }

    const handleDateChange = date => {
        console.log(date)
        fetchData(doctorId, dateFormat(date))
        setSelectedDate(date)
    }

    const handleButtonTableClick = async ({ start, end }) => {
        try {
            const minutesInOneHour = 60
            const secondsInOneMinute = 60
            const [startHours, startMinutes] = start.split(':')
            const startTimeInMilliseconds = (startHours * minutesInOneHour + startMinutes) * secondsInOneMinute * 1000
            const date = new Date(selectedDate.getTime() + startTimeInMilliseconds)
            console.log(date)
            const response = await axios.post(
                '/visits',
                { visit: {
                        doctor_id: doctorId,
                        visit_type_id,
                        date,
                        patient_id: 6
                    }
                },
                { headers: headers }
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(selectedDate)
        fetchData(doctorId, dateFormat(selectedDate))
    }, [])

    return (
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <div className="wrapper-container">
                            <div className="header__row">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker"
                                        label="Date picker"
                                        minDate={ initialDate }
                                        value={ selectedDate }
                                        onChange={ handleDateChange }
                                        KeyboardButtonProps = {{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <DoctorInfo doctorId={ 4 } />
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="wrapper-container">
                            <BasicTable
                                appointments={ appointments }
                                limit={ limit }
                                handleButtonTableClick={ handleButtonTableClick }
                            />
                        </div>
                    </div>
                </div>
                < Footer text={ 'Your advertising can be here' } />
            </div>

    )
}

export default Appointment
