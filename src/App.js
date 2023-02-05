import './style.css';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import { useParams } from 'react-router-dom'


function App() {
  const {profileId} = useParams()
  const [id, setId] = useState('');
  const [singleEmployee, setSingleEmployee] = useState({});
  const [employees, setemployees] = useState([]);
  const [sortByAge, setSortByAge] = useState('oldest');
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

  // const getId = (identification) =>{
  //   setId(identification)
  // }

useEffect(()=>{
  fetch(workForceUrl)
  .then(response => response.json())
  .then(data => setemployees(data.results))


},[sortByAge, profileId])

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard employees={employees} sortByDOB={sortByDOB} setSortByAge={setSortByAge}/>}/>
    <Route exact path="/user/:profileId" element={<ProfilePage employees={employees}  />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
