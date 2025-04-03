import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import Map from './map/Map'
import Task from './Task'
import { getSessionStorageData, findEmployee, handleUpdateTask } from '../functions'
import employeeContext from '../storage/EmployeeContext'
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const ProfilePage = () => {
      const [employee, setEmployee] = useState(undefined);
      const {profileId} = useParams();
      const [updateTask, setUpdateTask] = useState(null)
      const [clicked, setClicked] = useState(false)


useEffect(() => {
  const newEmployeeList = getSessionStorageData()
  let employee = findEmployee(newEmployeeList, profileId);
  setEmployee(employee[0]);
      

  if (updateTask) {
    console.log('inside', updateTask)
    const employeesSessionStorageList = getSessionStorageData()
    const newEmployeeList = handleUpdateTask(updateTask, employee, employeesSessionStorageList)
    sessionStorage.setItem("employeesList", JSON.stringify(newEmployeeList));
    
    
    employee = findEmployee(newEmployeeList, profileId);
    setEmployee(employee[0]);

  }
}, [updateTask]);

const handleUpdate = (task) => {
  setUpdateTask(task);
};


  return (
    <div className='container'>
      <div className='profile__layout'>
      <header className='profile__banner'>
      <div className='profile__banner-background bg-pan-left'>
        <div className='navigate__container'>
        <Link to={`/`}><button className='navigate__btn margin__left'><FontAwesomeIcon icon={faArrowAltCircleLeft}  style={{color: 'white', fontSize: '1.5rem'}}/></button></Link>
        <h2>Back to profiles</h2>
        </div>
        {employee && <img className="employee__img" src={employee.imgUrl} alt="Employee" width="100px" height="100px"/>}
        <div className='profile__banner__info'>
        {employee && <h1>{employee.firstName} {employee.lastName}, {employee.age}</h1>}
        {employee && <Link to={`/user/${employee.firstName}-${employee.lastName}/edit`}><button className='allpurpose__btn allpurpose__btn--editProfile'>Edit Profile</button></Link>}
        </div>
      </div>
      <div className='profile__banner__secondaryInfo'>
        <FontAwesomeIcon icon={faPhoneSquare}  style={{color: '#5c618d'}}/>
        {employee && <p> {employee.cell}</p>}
        <FontAwesomeIcon icon={faMapLocationDot} style={{color: '#5c618d'}}/>
        {employee && <p>{employee.country}</p>}
        <FontAwesomeIcon icon={faEnvelope} style={{color: '#5c618d'}}/>
       {employee && <p> {employee.email}</p>}
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
            <h2>Gender:</h2>
            {employee && <p>{employee.gender.charAt(0).toUpperCase() + employee.gender.slice(1)}</p>}
            </div>
            <div className='profile__info__container'>
            <h2>Birthday:</h2>
            {employee && <p>{new Date(employee.dob).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>}
            </div>
            <div className='profile__info__container'>
            <h2>Born in:</h2>
            {employee && <p> {employee.city}, {employee.country}</p>}
            </div>
            <div className='profile__info__container'>
            <h2>Address:</h2>
            {employee && <p>{employee.streetNumber} - {employee.streetName}</p>}
            </div>
          </div>
        </div>
        <div className='profile__container'>
          <div className='task__sectionTitle'>
           <FontAwesomeIcon icon={faTasks} style={{color: 'white'}}/>
          <h2>Employee Tasks</h2>
          </div>
          <div className='task__cardContainer'>
          {employee && employee.tasks.map(task => <Task  key={task.id} task={task} setUpdateTask={setUpdateTask} setClicked={setClicked} employee={employee} handleUpdate={handleUpdate} updateTask={updateTask}/>)}
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default ProfilePage