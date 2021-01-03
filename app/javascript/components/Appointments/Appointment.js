import React from 'react'
import './appointment.css'
import Footer from "./Footer";
import DatePickers from "./DatePicker";
import DoctorInfo from "./DoctorInfo";

const Appointment = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="header">
                    <div className="wrapper-container">
                        <div className="header__row">
                            <div className="header__date-picker">
                                < DatePickers />
                            </div>
                            <DoctorInfo />
                        </div>
                    </div>

                </div>
                <div className="">

                </div>
            </div>
            < Footer text={ 'Here can be your advertising' } />
        </div>
    )
}

export default Appointment
