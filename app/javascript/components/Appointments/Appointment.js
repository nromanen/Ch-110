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
import CustomizedSnackbars from "./Toast"
import SimpleAlert from './Alert'


const Appointment = ({ user, location, doctorId }) => {

    // let search = window.location.search;
    // let params = new URLSearchParams(search);
    // let doctorIdFromParams = params.get('doctor_id');

    // console.log(location.search)


    const initialDate = new Date(Date.now())
    // const doctorId = doctorIdFromParams

    const [selectedDate, setSelectedDate] = useState(initialDate)
    const [startTime, setStartTime] = useState('')
    const [limit, setLimit] = useState(0)
    const [visit_type_id, setVisit_type_id] = useState(0)
    const [appointments, setAppointments] = useState([])
    const [openToast, setOpenToast] = useState(false);
    const [errors, setErrors] = useState([])

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf,
        'Accept': 'application/json'
    }


    const fetchData = async (user_id, date) => {
        try {
            setErrors([])
            const res = await axios.get(`/slots?doctor_id=${user_id}&date=${date}`,{
                headers: headers
            })
            const data = res.data
            if (res.data.length > 0) {
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

                const timeNow = new Date(Date.now())
                const yearNow = timeNow.getFullYear()
                const monthNow = timeNow.getMonth() + 1
                const dateNow = timeNow.getDate()
                const hourNow = timeNow.getHours()
                const minuteNow = timeNow.getMinutes()

                const [year, month, day] = date.split('-')

                slots.map(item => {
                    const [startHours, startMinutes] = item.start.split(':')
                    if (
                        (yearNow === +year && monthNow === +month && dateNow === +day) &&
                        ((+startHours < hourNow) || ((+startHours === hourNow) && (+startMinutes <= minuteNow))))
                    {
                        item.available = false
                        return item
                    }
                    return item
                })
                setAppointments(slots)
                setVisit_type_id(visit_type_id)
            } else {
                setErrors(['Sorry but the doctor is not working that day'])
            }

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
        fetchData(doctorId, dateFormat(date))
        setSelectedDate(date)
    }


    const handleButtonTableClick = async ({ start, end }) => {
        try {
            setErrors([])
            const [startHours, startMinutes] = start.split(':')
            const date = new Date(Date.UTC(selectedDate.getFullYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                startHours,
                startMinutes
                ))

            const response = await axios.post(
                '/visits',
                { visit: {
                        doctor_id: doctorId,
                        visit_type_id,
                        start_time: date,
                        patient_id: user.id
                    }
                },
                { headers: headers }
            )

            if (response.status === 200) {
                setStartTime(start)
                setAppointments(appointments.map(item => {
                    if (item.start === start) {
                        item.available = false
                        return item
                    }
                    return item
                }))
                setOpenToast(true)
            } else {
                console.log("Hurrrrrraaaaaa response status is not 200")
            }
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    const handleCloseToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenToast(false);
    };

    const errorMessages = errors.map(item => (
        <SimpleAlert
            key={ item }
            text={ item }
            handleClose={ setErrors }
        />
    ))

    useEffect(() => {
        fetchData(doctorId, dateFormat(selectedDate))
    }, [])

    return (
            <div className="wrapper">
                <div className="content-1">
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
                                <DoctorInfo doctorId={ doctorId } />
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="wrapper-container">
                            { errorMessages }
                            <BasicTable
                                appointments={ appointments }
                                limit={ limit }
                                handleButtonTableClick={ handleButtonTableClick }
                                selectedDate={ selectedDate }
                                doctorId={ doctorId }
                                setErrors={ setErrors }

                        />
                        </div>
                    </div>
                </div>
                <CustomizedSnackbars
                    handleCloseToast={ handleCloseToast }
                    openToast={ openToast }
                    time={ startTime }
                />
                {/*< Footer text={ 'Your advertising can be here' } />*/}
            </div>

    )
}

export default Appointment
