import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ProfilePage = ({employees}) => {
      const [employee, setemployee] = useState()
      const {profileId} = useParams()
      
      const findEmployee = (users) =>{
        const firstWord = profileId.split("-")[1]
        const user = users.filter(employee => {
          return employee.name.last == firstWord
        })
        return user
      }

      useEffect(()=>{
        const employee = findEmployee(employees)
        setemployee(employee[0])
      },[])

     console.log(employee)
  
  return (
    <div className='container'>
      <header className='profile__banner'>
      <div className='profile__banner-background bg-pan-left'>
        {employee && <img className="employee__img" src={employee.picture.large} alt="Employee" width="100px" height="100px"/>}
        <div className='profile__banner__info'>
        {employee && <h1>{employee.name.first} {employee.name.last}</h1>}
        {employee && <p> Age: {employee.dob.age}</p>}
        </div>
      </div>
      <div className='profile__banner__secondaryInfo'>
        <FontAwesomeIcon icon={faPhone}/>
        {employee && <p> {employee.cell}</p>}
        <FontAwesomeIcon icon={faLocationPin}/>
        {employee && <p>{employee.location.country}</p>}
        <FontAwesomeIcon icon={faEnvelope}/>
       {employee && <p> {employee.email} </p>}


      </div>

      </header>
    </div>
  )
}

export default ProfilePage