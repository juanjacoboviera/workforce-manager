import React from 'react'

const EmployeeCard = ({employee}) => {
    
  return (
    <div className="employee__card">
                        <i className="fa-solid fa-circle-xmark employee__deleteBtn"></i>
                        <img className="employee__img" src={employee.picture.large} alt="Employee" width="100px" height="100px"/>
                        <h2>{employee.name.first} {employee.name.last}</h2>
                        <h3 id="employee__roll">{employee.email}</h3>
                        <h3 id="employee__roll">Age: {employee.dob.age}</h3>
                        <div className="employee__taskContainer">
                            <div className="task">
                                <p>9</p>
                                <h3>work orders</h3>
                            </div>
                            <div className="task">
                                <p>20</p>
                                <h3>tasks</h3>
                            </div>
                            <div className="task">
                                <p>2</p>
                                <h3>roles</h3>
                            </div>
                        </div>
                        <button className="employee__editBtn">Profile</button>
                    </div>
  )
}

export default EmployeeCard