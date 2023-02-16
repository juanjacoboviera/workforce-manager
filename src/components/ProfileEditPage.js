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

useEffect(()=>{
    const newEmployeeList = getSessionStorageData()
    const employee = findEmployee(newEmployeeList, profileId);
    setEmployee(employee[0]);
    setEmployeeList(newEmployeeList)
}, [])

    console.log(employeeList)
    console.log(employee)

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
               <Form employee={employee}/>
        </div>
    </div>
  )
}

export default ProfileEditPage