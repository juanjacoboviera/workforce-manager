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
      const dateA = new Date(a.dob);
      const dateB = new Date(b.dob);
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
      const rawEmployeesList = data.results;
      const employeesList = rawEmployeesList.map(employee =>{
        const newEmployee =  {
          firstName: employee.name.first,
          lastName:  employee.name.last,
          dob: employee.dob.date,
          age:  employee.dob.age,
          cell: employee.cell, 
          email: employee.email,
          imgUrl: employee.picture.large,
          country: employee.location.country,
          city: employee.location.city,
          streetNumber: employee.location.street.number,
          streetName: employee.location.street.name,
          gender: employee.gender,
          latitude: employee.location.coordinates.latitude,
          longitude: employee.location.coordinates.longitude,

        }
        return {...newEmployee}
      })
    
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
    {employeeList.map((sortByDOB(employeeList), employee => <EmployeeCard key={employee.dob} employee={employee} handleReset={handleReset}/>))}
    </div>
    </main>
  )
}

export default Dashboard