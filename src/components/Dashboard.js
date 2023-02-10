import React from 'react'
import EmployeeCard from './EmployeeCard'
import Select from './Select';

 
const Dashboard = ({employees, sortByDOB, setSortByAge, sortByAge, handleReset}) => {
   
  return (
    <main className='container'>
    <Select setSortByAge={setSortByAge} sortByAge={sortByAge}/>
    <div className="card__grid">
    {employees.map((sortByDOB(employees), employee => <EmployeeCard key={employee.dob.date} employee={employee} handleReset={handleReset}/>))}
    </div>
    </main>
  )
}

export default Dashboard