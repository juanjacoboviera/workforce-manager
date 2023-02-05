import React from 'react'
import { useParams } from 'react-router-dom'
const ProfilePage = () => {
      const {profileId} = useParams()
      console.log(profileId)
  
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage