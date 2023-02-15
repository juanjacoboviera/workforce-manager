import React, {useState, useContext, useEffect} from 'react'
import EmployeeCard from './EmployeeCard'
import Select from './Select';
import employeeContext from '../storage/EmployeeContext';
import { assignTasks } from '../functions';

const Dashboard = () => {
  const [sortByAge, setSortByAge] = useState('youngest');
  const seed ='e4d249cc94fc478b';
  const workForceUrl = `https://randomuser.me/api/?seed=${seed}&results=30`
  const context = useContext(employeeContext);
  const {employeeList, setEmployeeList} = context.value

const sortByDOB = (people) => {
    return people.sort((a, b) => {
      const dateA = new Date(a.dob.date);
      const dateB = new Date(b.dob.date);
      if(sortByAge === 'oldest')return dateA - dateB;
      if (sortByAge === 'youngest')return dateB - dateA;
      
    });
  }

  const handleReset = () => {
    setSortByAge('youngest');
  };

useEffect(()=>{
  if (sessionStorage.length === 0 || sessionStorage.getItem('employeesList') === []) {
    fetch(workForceUrl)
    .then(response => response.json())
    .then(data => {
      const employeesList = data.results;
      fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const tasks = data.tasks
        const employees = assignTasks(employeesList, tasks)
        setEmployeeList(employees)
        sessionStorage.setItem("employeesList", JSON.stringify(employees));
      })
    }) 
  } if(sessionStorage.length >= 1) {
    const sessionStorageData = sessionStorage.getItem("employeesList");
    const employees = JSON.parse(sessionStorageData);
    setEmployeeList(employees)
  }
 
},[sortByAge])

  return (
    <main className='container'>
    <Select setSortByAge={setSortByAge} sortByAge={sortByAge}/>
    <div className="card__grid">
    {employeeList.map((sortByDOB(employeeList), employee => <EmployeeCard key={employee.dob.date} employee={employee} handleReset={handleReset}/>))}
    </div>
    </main>
  )
}

export default Dashboard