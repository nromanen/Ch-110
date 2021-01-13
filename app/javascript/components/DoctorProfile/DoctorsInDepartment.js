import React from 'react'
import { useState, useEffect } from "react"
import '../../../assets/stylesheets/doctor_card.scss'

const DoctorsInDepartment = ( { user } ) => {

		let url = `/appointments?doctor_id=${user.id}`;

        return (  
            <>  
            	<div key={ user.id }>      
                	<div className="card">
                        <img src={user.photo_path} alt={"photo_path"}/> 

                        <h2>{ user.name } {user.surname}</h2>

                        <p className="position">{ user.specialization }</p>
                        <p>{ user.description }</p>
                        <a href={url}>Create visit</a>
                    </div> 
                </div>                   
            </>
        );
}

export default  DoctorsInDepartment

