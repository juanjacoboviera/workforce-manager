import './style.css';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import {EmployeeContextProvider} from './storage/EmployeeContext'; 
import ProfileEditPage from './components/ProfileEditPage';
import TaskEditPage from './components/TaskEditPage';

function App() {
 
  return (
    <>
    <EmployeeContextProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/user/:profileId" element={<ProfilePage/>}/>
    <Route exact path="/user/:profileId/edit" element={<ProfileEditPage/>}/>
    <Route exact path="/user/:profileId/task/:taskId/edit" element={<TaskEditPage/>}/>
    </Routes>
    </BrowserRouter>
    </EmployeeContextProvider>
    </>
  );
}

export default App;
