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
import { appointments } from './mock.js'

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(Date.now())
    const handleDateChange = date => {
        console.log(date)
        setSelectedDate(date)
    }

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
                                        value={ selectedDate }
                                        onChange={ handleDateChange }
                                        KeyboardButtonProps = {{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <DoctorInfo />
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="wrapper-container">
                            <BasicTable />
                        </div>
                    </div>
                </div>
                < Footer text={ 'Here can be your advertising' } />
            </div>

    )
}

export default Appointment
