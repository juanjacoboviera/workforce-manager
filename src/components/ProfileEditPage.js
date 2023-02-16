import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { findEmployee, getSessionStorageData } from '../functions';
import employeeContext from '../storage/EmployeeContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Form from './Form';

const ProfileEditPage = () => {
    const context = useContext(employeeContext);
    const {employeeList, setEmployeeList} = context.value
    const {profileId} = useParams();
    const [employee, setEmployee] = useState(undefined);
    const [formData, setFormData] = useState({
            firstName: '',
            lastName:  '.',
            dob: undefined,
            cell: undefined, 
            email: '',
            imgUrl: '',
            country: '',
            city: '',
            streetNumber: 0,
            streetName: '',
            gender: '',
            latitude: 0,
            longitude: 0,
        
        })

   
 
useEffect(()=>{
    const newEmployeeList = getSessionStorageData()
    const employee = findEmployee(newEmployeeList, profileId);
    setEmployee(employee[0]);
    setEmployeeList(newEmployeeList)
    setFormData({
        firstName: employee[0].name.first,
        lastName:  employee[0].name.last,
        dob: new Date(employee[0].dob.date),
        cell: employee[0].cell,
        email: employee[0].email,
        imgUrl: employee[0].picture.large,
        country: employee[0].location.country,
        city: employee[0].location.city,
        streetNumber: employee[0].location.street.number,
        streetName: employee[0].location.street.name,
        latitude:  employee[0].location.coordinates.latitude,
        longitude:  employee[0].location.coordinates.longitude,
        gender: employee[0].gender
    
    })


}, [])


function handleFormChange(evt) {
    const value = evt.target.value;
    setFormData({
      ...formData,
      [evt.target.id]: value
    });
  }

console.log(formData)

  return (
    <div className='editPage__container'>
        <div className='editPage__box'>
            <div className="editPage__header">
            <div className="navigate__container">
            <FontAwesomeIcon icon={faArrowAltCircleLeft}  style={{color: 'white', fontSize: '1.5rem'}}/>
            <h2>Profile Information</h2>
            </div>
            <div className="btn__container">
                <button className='allpurpose__btn allpurpose__btn--editProfile' form='editProfile' type='submit'>Save changes</button>
            </div>
            </div>
               <Form employee={employee} formData={formData} handleFormChange={handleFormChange}/>
        </div>
    </div>
  )
}

export default ProfileEditPage