import './style.css';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
import {EmployeeContextProvider} from './storage/EmployeeContext'; 
import ProfileEditPage from './components/ProfileEditPage';

function App() {
 
  return (
    <>
    <EmployeeContextProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/user/:profileId" element={<ProfilePage/>}/>
    <Route exact path="/user/:profileId/edit" element={<ProfileEditPage/>}/>
    </Routes>
    </BrowserRouter>
    </EmployeeContextProvider>
    </>
  );
}

export default App;
