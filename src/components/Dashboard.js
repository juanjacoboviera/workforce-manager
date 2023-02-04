import React from 'react'
import EmployeeCard from './EmployeeCard'
import {useState, useEffect} from 'react'

const Dashboard = () => {
    const [employees, setemployees] = useState([]);
    const seed ='e4d249cc94fc478b'
    const workForceUrl = `https://randomuser.me/api/?seed=${seed}&results=30`

  useEffect(()=>{
    fetch(workForceUrl)
    .then(response => response.json())
    .then(data => setemployees(data.results))
  },[])
  console.log(employees)

  return (
    <div className="card__grid">
    {employees.map(employee => <EmployeeCard employee={employee}/>)}
    </div>
  )
}

export default Dashboard