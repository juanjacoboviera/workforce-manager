import './style.css';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import { assignTasks } from './functions';

function App() {
  const [employees, setemployees] = useState([]);
  const [sortByAge, setSortByAge] = useState('youngest');
  const seed ='e4d249cc94fc478b';
  const workForceUrl = `https://randomuser.me/api/?seed=${seed}&results=30`

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
  if (sessionStorage.length === 0) {
    fetch(workForceUrl)
    .then(response => response.json())
    .then(data => {
      const employeesList = data.results;
      fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const tasks = data.tasks
        const employees = assignTasks(employeesList, tasks)
        setemployees(employees)
        sessionStorage.setItem("employeesList", JSON.stringify(employees));
      })
    }) 
  } else {
    const sessionStorageData = sessionStorage.getItem("employeesList");
    const employees = JSON.parse(sessionStorageData);
    setemployees(employees)
  }
 
},[sortByAge])

// console.log(employees)

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard employees={employees} sortByDOB={sortByDOB} setSortByAge={setSortByAge} sortByAge={sortByAge} handleReset={handleReset}/>}/>
    <Route exact path="/user/:profileId" element={<ProfilePage employees={employees}  />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
