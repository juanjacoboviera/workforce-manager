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
    const [formData, setFormData] = useState({
        id: undefined,
        personId: undefined,
        tittle: '',
        startDate: "",
        endDate: undefined,
        description: '',
        urgent: '',
        completed: ''
    })
    const [complete, setComplete] = useState(formData.completed)
    const [priority, setpriority] = useState(formData.urgent)

    const getTask = (employee, taskId) =>{
        const task = employee.tasks.find(task => {
            return task.id == taskId
        })
        return task
    }

    function handleFormChange(evt) {
        const value = evt.target.value;
      console.log('hey')
        setFormData({
        ...formData,
        [evt.target.id]: value
        });
       
        // if(evt.target.id == 'completed'){
        //     setComplete(evt.target.value)
        // }
        // if(evt.target.id == 'urgent' ){
        //     setpriority(evt.target.value)
        // }
    }

    useEffect(()=>{
        const newEmployeeList = getSessionStorageData()
        const employee = findEmployee(newEmployeeList, profileId);
        setEmployee(employee[0])
        const task = getTask(employee[0], taskId);
        setFormData({
            id: task.id,
            personId: task.personId,
            tittle: task.title,
            startDate: task.startDate,
            endDate: task.endDate,
            description: task.description,
            urgent: task.urgent,
            completed: task.completed
        })
       console.log('re render')
        
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
                }} className='allpurpose__btn allpurpose__btn--editProfile' form='editTask' type='submit'>Save changes</button>
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
                <form id='editTask' action="submit">
                <div className='edit-task__input-container'>
                    <label htmlFor="taskTittle">Task Title</label>
                    <input className='edit-task__short-input' id='tittle' type="text" placeholder='Redact creative brief' value={formData.tittle} onChange={(e)=> handleFormChange(e)} />
                </div>
                <div className="edit-task__dates-container">
                    <div className='edit-task__input-container'>
                        <label htmlFor="start">Start Date</label>
                        <input className='' id='startDate' type="date" onChange={(e)=> handleFormChange(e)} value={formData.startDate} />
                    </div>
                    <div className='edit-task__input-container'>
                        <label htmlFor="end">Due Date</label>
                        <input className='' id='endDate' type="date" onChange={(e)=> handleFormChange(e)} value={formData && formData.endDate == null ? new Date((formData.startDate ? new Date(formData.startDate).getTime() : new Date().getTime()) + 106400000).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }) : (formData && formData.endDate ? new Date(formData.endDate).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '')}
 />

                </div>
                </div>
                <div className='edit-task__input-container'>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" onChange={(e)=> handleFormChange(e)} value={formData.description}></textarea>
                </div>
                <div className="edit-task__dates-container  edit-task__input-container--status">
                    <div className='edit-task__input-container'>
                        <label htmlFor="priority">Priority</label>
                        <select className='edit-task__select' name="priority" id="urgent"  onChange={(e)=> handleFormChange(e)} value={formData.urgent}>
                            <option value={true}>High</option>
                            <option value={false}>Low</option>
                        </select>
                        <span id='circlePriority' style={{ backgroundColor: priority ? 'rgb(255, 157, 0)' : 'rgb(51, 255, 173)' }}></span>
                    </div>
                    <div className='edit-task__input-container edit-task__input-container--status'>
                        <label htmlFor="status">Status</label>
                        <select className='edit-task__select' name="status" id="completed"  onChange={(e)=> {handleFormChange(e)}} value={formData.completed}>
                            <option value={false}>Pending</option>
                            <option value={true}>Complete</option>
                        </select>
                        <span id='circleStatus' style={{ backgroundColor: complete ? 'rgb(51, 255, 173)' : 'rgb(255, 157, 0)' }}></span>
                </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TaskEditPage