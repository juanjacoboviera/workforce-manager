import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import Map from './map/Map'
import Task from './Task'

const ProfilePage = ({employees}) => {
      const [employee, setemployee] = useState();
      const {profileId} = useParams();
      
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
      
  return (
    <div className='container'>
      <header className='profile__banner'>
      <div className='profile__banner-background bg-pan-left'>
        {employee && <img className="employee__img" src={employee.picture.large} alt="Employee" width="100px" height="100px"/>}
        <div className='profile__banner__info'>
        {employee && <h1>{employee.name.first} {employee.name.last}, {employee.dob.age}</h1>}
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
      <main className='profile__main'>
        <div className='profile__container'>
        <div className='profile__map'>
          {employee && <Map employee={employee}/>}
          <div id="gradient">
          </div>
          </div>
          <div className='profile__info'>
            <div className='profile__info__container'>
            <p>Gender:</p>
            {employee && <p>{employee.gender.charAt(0).toUpperCase() + employee.gender.slice(1)}</p>}
            </div>
            <div className='profile__info__container'>
            <p>Birthday:</p>
            {employee && <p>{new Date(employee?.dob.date).toLocaleDateString('en-US')}</p>}
            </div>
            <div className='profile__info__container'>
            <p>Born in:</p>
            {employee && <p> {employee.location.city}, {employee.location.country}</p>}
            </div>
            <div className='profile__info__container'>
            <p>Address:</p>
            {employee && <p>{employee.location.street.name}, {employee.location.street.number}</p>}
            </div>
          </div>
        </div>
        <div className='profile__container'>
          <div className='task__sectionTitle'>
           <FontAwesomeIcon icon={faTasks} style={{color: 'white'}}/>
          <h2>Employee Tasks</h2>
          </div>
          <Task/>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage