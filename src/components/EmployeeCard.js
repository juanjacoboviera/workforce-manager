import React from 'react'
import {Link} from 'react-router-dom'

const EmployeeCard = ({employee, handleReset}) => {
    return (
    <div className="employee__card">
                        <i className="fa-solid fa-circle-xmark employee__deleteBtn"></i>
                        <img className="employee__img" src={employee.imgUrl} alt="Employee" width="100px" height="100px"/>
                        <h2>{employee.firstName} {employee.lastName}</h2>
                        <h3 id="employee__roll">{employee.email}</h3>
                        <h3 id="employee__roll">Age: {employee.age}</h3>
                        <div className="employee__taskContainer">
                            <div className="task">
                                <p>{employee.tasks.length}</p>
                                <h3>tasks</h3>
                            </div>
                            <div className="task">
                               <p>{employee.tasks.filter(task => task.completed).length}</p>
                                <h3>completed</h3>
                            </div>
                            <div className="task">
                            <p>{employee.tasks.filter(task => !task.completed).length}</p>
                                <h3>pending</h3>
                            </div>
                        </div>
                        <Link to={`/user/${employee.firstName}-${employee.lastName}`} ><button onClick={()=> handleReset()} className="employee__editBtn">Profile</button></Link>
                    </div>
  )
}

export default EmployeeCard