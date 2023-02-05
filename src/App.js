import './style.css';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/user/:profileId" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
