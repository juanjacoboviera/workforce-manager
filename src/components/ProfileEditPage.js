import React from 'react'

const ProfileEditPage = () => {
  return (
    <div className='editPage__container'>
        <div className='leftCol__container'>
            <div className='img__container'>
                <img src="" alt="" />
            </div>
            <div className='text__container'>
                <h2>Juan's <br />Profile page</h2>
            </div>
        </div>
        <div className='rightCol__container'>
            <h2>Profile Information</h2>
            <div className="rightCol__grid">
                <form action="submit">
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input id='firstName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input id='lastName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="dob"> Date of Birth</label>
                        <input id='dob'  type="date" />
                    </div>
                    <div>
                        <label htmlFor="cellPhone">Cell Phone</label>
                        <input id='cellPhone' type="number" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id='email' type="email" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input id='gender' type="text" />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input id='country'  type="text" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id='city' type="text" />
                    </div>
                    <div>
                        <label htmlFor="streetNumber">Street Number</label>
                        <input id='streetNumber' type="number" />
                    </div>
                    <div>
                        <label htmlFor="streetName">Street Name</label>
                        <input id='streetName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <input id='latitude' type="number" />
                    </div>
                    <div>
                        <label htmlFor="longitude">Longitude</label>
                        <input id='longitude' type="number" />
                    </div>
                    <button type='submit'>Update</button>
                </form>
            </div>
            
        </div>

    </div>
  )
}

export default ProfileEditPage