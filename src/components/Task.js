import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"


const Task = () => {
  return (
    <div className='task__card'>
        <div className='task__primaryInfo'>
            <div className='task__title'>
         <FontAwesomeIcon icon={faCheckCircle} style={{color: 'rgb(188, 188, 188)'}}/>
        <h2>Create login UX Flow for new product line</h2> 
            </div>
          <input type="checkbox" class="toggle-switch"></input>
        </div>
        <div className='task__secondaryInfo'>
        <div className='task__dueDate'>
        <p>Due 24 Jan 2023</p>
        <div className='task__urgent'>
       <small>Urgent</small>
        </div>
        </div>
        <button className='task__Editbtn'> <FontAwesomeIcon icon={faPencil} style={{color: '#b2acf4'}}/></button>
        </div>
    </div>
  )
}

export default Task