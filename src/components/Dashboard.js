import React from 'react'
import EmployeeCard from './EmployeeCard'
import {useState, useEffect} from 'react'
import Select from './Select';

const Dashboard = () => {
    const [employees, setemployees] = useState([]);
    const [sortByAge, setSortByAge] = useState('oldest')
    const seed ='e4d249cc94fc478b'
    const workForceUrl = `https://randomuser.me/api/?seed=${seed}&results=30`

  const sortByDOB = (people) => {
      return people.sort((a, b) => {
        const dateA = new Date(a.dob.date);
        const dateB = new Date(b.dob.date);
        if(sortByAge === 'oldest')return dateA - dateB;
        if (sortByAge === 'youngest')return dateB - dateA;
        
      });
    }

  useEffect(()=>{
    fetch(workForceUrl)
    .then(response => response.json())
    .then(data => setemployees(data.results))
  },[])

  return (
    <>
    <Select setSortByAge={setSortByAge}/>
    <div className="card__grid">
    {employees.map((sortByDOB(employees), employee => <EmployeeCard employee={employee}/>))}
    </div>
    </>
  )
}

export default Dashboard