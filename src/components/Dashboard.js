import React from 'react'
import EmployeeCard from './EmployeeCard'
import {useState, useEffect} from 'react'
import Select from './Select';

 
const Dashboard = ({employees, sortByDOB, setSortByAge}) => {
   
  return (
    <main className='container'>
    <Select setSortByAge={setSortByAge}/>
    <div className="card__grid">
    {employees.map((sortByDOB(employees), employee => <EmployeeCard key={employee.dob.date} employee={employee}/>))}
    </div>
    </main>
  )
}

export default Dashboard