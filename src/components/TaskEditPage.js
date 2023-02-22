import React, {useContext, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import employeeContext from '../storage/EmployeeContext'
import { findEmployee, getSessionStorageData } from '../functions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"

const TaskEditPage = () => {
    const context = useContext(employeeContext);
    const {employeeList, setEmployeeList} = context.value
    const [employee, setEmployee] = useState({})
    const {taskId, profileId} = useParams();
    useEffect(()=>{
        const newEmployeeList = getSessionStorageData()
        const employee = findEmployee(newEmployeeList, profileId);
        setEmployee(employee[0])
    },[])
  
  return (
    <div className='editPage__container editPage__container--task'>
        <div className="editPage__box editPage__box--task">
          <div className='editPage__header'>
            <div className='navigate__container'>
            <Link to={`/user/${employee.firstName}-${employee.lastName}/`}><button className='navigate__btn'><FontAwesomeIcon icon={faArrowAltCircleLeft}  style={{color: 'white', fontSize: '1.5rem'}}/></button></Link>
            <h2>Back to Profile</h2>
            </div>
            <div className="btn__container">
                <button onClick={(e) => {
                  e.preventDefault()
                }} className='allpurpose__btn allpurpose__btn--editProfile' form='editProfile' type='submit'>Save changes</button>
            </div>
          </div>
          <div className='edit-task__container'>
                <div className="edit-task__title-info">
                    <h2 className='edit-task__title'>Edit Task</h2>
                    <div className="edit-task__asigned-container">
                        <h2 className='edit-task__title2'>Assigned to:</h2>
                        <div className="edit-task__asigned-data">
                        <img className='employee__img employee__img--asigned-task' src={employee.imgUrl} alt="Employee" width="20px" height="20px"/>
                        <p>{employee.firstName} {employee.lastName}</p>
                        </div>
                    </div>
                </div>
                <div className='edit-task__input-container'>
                    <label htmlFor="taskTittle">Task Title</label>
                    <input className='edit-task__short-input' id='taskTittle' type="text" placeholder='Redact creative brief' />
                </div>
                <div className="edit-task__dates-container">
                    <div className='edit-task__input-container'>
                        <label htmlFor="start">Start Date</label>
                        <input className='' id='start' type="date" />
                    </div>
                    <div className='edit-task__input-container'>
                        <label htmlFor="end">Due Date</label>
                        <input  className='' id='end' type="date" />
                </div>
                </div>
                <div className='edit-task__input-container'>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5"></textarea>
                </div>
                <div className="edit-task__dates-container">
                    <div className='edit-task__input-container'>
                        <label htmlFor="priority">Priority</label>
                        <select className='edit-task__select' name="priority" id="priority">
                            <option value="urgent">High</option>
                            <option value="notUrgent">Low</option>
                        </select>
                    </div>
                    <div className='edit-task__input-container edit-task__input-container--status'>
                        <label htmlFor="status">Status</label>
                        <select className='edit-task__select' name="status" id="status">
                            <option value="urgent">Pending</option>
                            <option value="notUrgent">Complete</option>
                        </select>
                        <span className='circleStatus'></span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskEditPage