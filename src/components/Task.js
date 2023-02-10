import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';


const Task = ({task}) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  useEffect(()=>{
    console.log(isChecked)
  }, [isChecked])
  
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked)
  return (
    <div className='task__card'>
        <div className='task__primaryInfo'>
            <div className='task__title'>
         <FontAwesomeIcon icon={faCheckCircle} style={{ color: isChecked ? 'rgb(51, 255, 173)' : 'rgb(188, 188, 188)' }}/>
        <h2>{task.title}</h2> 
            </div>
          <input type="checkbox" className="toggle-switch" checked={isChecked} onChange={handleChange}></input>
        </div>
        <div className='task__secondaryInfo'>
        <div className='task__dueDate'>
        <p><span className='task__span'>Due:</span> {task.endDate ?  task.endDate : 'date has not been assigned'}</p>
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