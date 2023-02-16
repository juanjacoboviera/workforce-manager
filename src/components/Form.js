import React from 'react'

const Form = ({employee}) => {
  return (
    <form id='editProfile' className='editPage__content' action="submit">
    <div className="left__container">
    <div className="main__content">
    <h2>User Information</h2>
    <p>Enter the required information below to edit the user. You can change it anytime you want.</p>
    <div className="names__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Basic info</h2>
        </div>
        <div className='inputsX3__container'>
                <input id='firstName' type="text" placeholder='First name' />
                <input id='lastName' type="text" placeholder='Last name' />
                <input id='dob' type="date" placeholder='DOB' />
            </div>
    </div>
    <div className="names__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Contact</h2>
        </div>
        <div className='inputsX2__container'>
                <input id='phoneNumber' type="number" placeholder='Cell number' />
                <input id='email' type="text" placeholder='E-mail' />
            </div>
    </div>
    <div className="address__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Address</h2>
        </div>
        <div className='inputsX3__container'>
                <input id='country' type="text" placeholder='Country' />
                <input id='city' type="text" placeholder='City' />
                <input id='streetNumber' type="number" placeholder='Street number' />
        </div>
            <input id='streetName' type="text" placeholder='Street name' />
    </div>
    <div className="coordinates__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Coordinates</h2>
        </div>
        <div className='inputsX2__container'>
                <input id='latitude' type="number" placeholder='Latitude' />
                <input id='longitude' type="number" placeholder='Longitude' />
            </div>
    </div>
</div>     
</div>
<div className="right__container">
    <div className="main__content">
        <h2 className='form__tittle'>Profile photo</h2>
        <div className="img__container">
            {employee &&  <img className='employee__img' src={employee.picture.large} alt="Employee" width="130px" height="130px" />}
            <div className='block__container'>
                <label htmlFor="imgUrl">Profile photo URL</label>
                <input id='imgUrl' type="text" placeholder='https://randomuser.me/api/portraits/lego/1.jpg' />
                <p>You may need to upload the image to a hosting service or image sharing site in order to obtain a URL that can be used in this field.</p>
            </div>
        </div>
        <div className="gender__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Select gender:</h2>
        </div>
        <div className='gender__radios'>
            <label htmlFor="male">Male</label>
                <input className='radio' id='male' type="radio" />
            <label htmlFor="female">Female</label>
                <input className='radio' id='female' type="radio" />
        </div>
    </div>
    </div>
</div>
    </form>
  )
}

export default Form