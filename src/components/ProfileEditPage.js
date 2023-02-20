import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react';
import { findEmployee, getSessionStorageData, calculateAge } from '../functions';
import employeeContext from '../storage/EmployeeContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Form from './Form';

const ProfileEditPage = () => {
  const navigate = useNavigate();
    const context = useContext(employeeContext);
    const {employeeList, setEmployeeList} = context.value
    const {profileId} = useParams();
    const [employee, setEmployee] = useState(undefined);
    const [formData, setFormData] = useState({
            firstName: '',
            lastName:  '.',
            dob: undefined,
            age: undefined,
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
        firstName: employee[0].firstName,
        lastName:  employee[0].lastName,
        dob: new Date(employee[0].dob),
        age: calculateAge(new Date(employee[0].dob)),
        cell: employee[0].cell,
        email: employee[0].email,
        imgUrl: employee[0].imgUrl,
        country: employee[0].country,
        city: employee[0].city,
        streetNumber: employee[0].streetNumber,
        streetName: employee[0].streetName,
        latitude:  employee[0].latitude,
        longitude:  employee[0].longitude,
        gender: employee[0].gender
    
    })


}, [])

const updateEmployeeData = (array, match, formData) =>{
  const newListOfEmployees = array.map(employee =>{
    if (employee.email !== match.email){
      return employee
    }
    return{
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      age: calculateAge(new Date(formData.dob)),
      cell: formData.cell,
      email: formData.email,
      imgUrl: formData.imgUrl,
      country: formData.country,
      city: formData.city,
      streetNumber: formData.streetNumber,
      streetName: formData.streetName,
      latitude:formData.latitude,
      longitude:formData.longitude,
      gender: formData.gender,
      tasks: [...employee.tasks]
      
    }

  })
  setEmployeeList(newListOfEmployees)
  sessionStorage.setItem("employeesList", JSON.stringify(newListOfEmployees));
  navigate(`/user/${formData.firstName}-${formData.lastName}/`)
}


function handleFormChange(evt) {
    const value = evt.target.value;
    console.log(value)
    console.log(value)

    setFormData({
      ...formData,
      [evt.target.id]: value
    });
  }

console.log(employeeList)

  return (
    <div className='editPage__container'>
        <div className='editPage__box'>
            <div className="editPage__header">
            <div className="navigate__container">
            <Link to={`/user/${formData.firstName}-${formData.lastName}/`}><button className='navigate__btn'><FontAwesomeIcon icon={faArrowAltCircleLeft}  style={{color: 'white', fontSize: '1.5rem'}}/></button></Link>
            <h2>Profile Information</h2>
            </div>
            <div className="btn__container">
                <button onClick={(e) => {
                  e.preventDefault()
                  updateEmployeeData(employeeList, employee, formData)
                }} className='allpurpose__btn allpurpose__btn--editProfile' form='editProfile' type='submit'>Save changes</button>
            </div>
            </div>
               <Form formData={formData} handleFormChange={handleFormChange}/>
        </div>
    </div>
  )
}

export default ProfileEditPage