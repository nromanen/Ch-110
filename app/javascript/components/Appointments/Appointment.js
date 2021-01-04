import React, { useState, useEffect } from 'react'
import './appointment.css'
import Footer from "./Footer";
import DatePickers from "./DatePicker";
import DoctorInfo from "./DoctorInfo";
import BasicTable from "./Schedule"

const Appointment = () => {
    const [] = useState()
    return (
        <div className="wrapper">
            <div className="content">
                <div className="header">
                    <div className="wrapper-container">
                        <div className="header__row">
                            <DatePickers />
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
