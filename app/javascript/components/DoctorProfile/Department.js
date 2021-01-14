import React from 'react'
import { useState, useEffect } from "react"
import '../../../assets/stylesheets/doctor_card.scss'
import DoctorsInDepartment from "./DoctorsInDepartment";

const Department = props => {

    const { users = [] } = props
    console.log(users)
        return (  
            <>     
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
                
                <div className="container">
                    <div className="doctors">
                    <div className="row">
                        {
                            users.map( user => <DoctorsInDepartment
                            user={ user }
                            key={ user.id }
                            />
                            )
                        }
                    </div>
                    </div>
                </div>
            </>    
        );
      
}

export default  Department