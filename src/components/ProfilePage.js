import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
const ProfilePage = ({employees}) => {
      const [employee, setemployee] = useState()
      const {profileId} = useParams()
      
      const findEmployee = (users) =>{
        const firstWord = profileId.split("-")[0]
        const user = users.filter(employee => {
          return employee.name.first == firstWord
        })
        return user
      }

      useEffect(()=>{
        const employee = findEmployee(employees)
        setemployee(employee[0])
      },[])

     console.log(employee)
  
  return (
    <div>
      {employee && <h1>{employee.name.first} {employee.name.last}</h1>}
    </div>
  )
}

export default ProfilePage