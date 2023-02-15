import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { findEmployee, getSessionStorageData } from '../functions';
import employeeContext from '../storage/EmployeeContext'

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
        <div className='leftCol__container'>
            <div className='img__container'>
               {employee &&  <img src={employee.picture.large} alt="" />}
            </div>
            <div className='text__container'>
                {employee && <h2>{employee.name.first}'s <br />Profile page</h2>}
            </div>
        </div>
        <div className='rightCol__container'>
            <div className="form__container">
            <h2>Profile Information</h2>
                <form id='editProfile' className='rightCol__grid' action="submit">
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input id='firstName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input id='lastName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="dob"> Date of Birth</label>
                        <input id='dob'  type="date" />
                    </div>
                    <div>
                        <label htmlFor="cellPhone">Cell Phone</label>
                        <input id='cellPhone' type="number" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id='email' type="email" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input id='gender' type="text" />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input id='country'  type="text" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id='city' type="text" />
                    </div>
                    <div>
                        <label htmlFor="streetNumber">Street Number</label>
                        <input id='streetNumber' type="number" />
                    </div>
                    <div>
                        <label htmlFor="streetName">Street Name</label>
                        <input id='streetName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <input id='latitude' type="number" />
                    </div>
                    <div>
                        <label htmlFor="longitude">Longitude</label>
                        <input id='longitude' type="number" />
                    </div>
                </form>
                    <button form='editProfile' type='submit'>Update</button>
            </div>
        </div>

    </div>
  )
}

export default ProfileEditPage