import React from 'react'
import { useState, useEffect } from "react"
import '../../../assets/stylesheets/doctor_card.scss'

const DoctorsInDepartment = ( { user } ) => {

		let url = `/choose_date?doctor_id=${user.id}`;

        return (  
            <>       
                	<div className="card">
                        <img src={user.photo_path} alt={"photo_path"} className="img_responsive"/> 
                        <h2>{ user.name } {user.surname}</h2>
                        <p className="position">{ user.specialization }</p>
                        <p className="description">{ user.description }</p>
                        <a href={url} className="link">Create visit</a>
                    </div>                   
            </>
        );
}

export default  DoctorsInDepartment

