import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"


const Task = ({task}) => {
  console.log(task)
  return (
    <div className='task__card'>
        <div className='task__primaryInfo'>
            <div className='task__title'>
         <FontAwesomeIcon icon={faCheckCircle} style={{color: 'rgb(188, 188, 188)'}}/>
        <h2>{task.title}</h2> 
            </div>
          <input type="checkbox" className="toggle-switch"></input>
        </div>
        <div className='task__secondaryInfo'>
        <div className='task__dueDate'>
        <p>Due: {task.endDate ?  task.endDate : 'Pending date'}</p>
        {task.urgent ?  <div className='task__urgent'>
       <small>Urgent</small>
        </div> : null }
        </div>
        <button className='task__Editbtn'> <FontAwesomeIcon icon={faPencil} style={{color: '#b2acf4'}}/></button>
        </div>
    </div>
  )
}

export default Task