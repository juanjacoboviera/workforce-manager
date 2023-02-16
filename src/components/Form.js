import React from 'react'

const Form = ({employee, formData, handleFormChange}) => {
console.log(formData.latitude)
  return (
    <form id='editProfile' className='editPage__content' action="submit">
    <div className="left__container">
    <div className="main__content">
    <h2>User Information</h2>
    <p>Modify the required information below to edit the user. You can change it anytime you want.</p>
    <div className="names__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Basic info</h2>
        </div>
        <div className='inputsX3__container'>
           {formData &&  <input id='firstName' type="text" placeholder='First name' value={formData.firstName} onChange={(e)=> handleFormChange(e)} />}
               {formData &&  <input id='lastName' type="text" placeholder='Last name' value={formData.lastName} onChange={(e)=> handleFormChange(e)} />}
               <input id='dob' type="date" placeholder='DOB'  value={formData.dob?.toISOString().substr(0, 10)} onChange={(e)=> handleFormChange(e)} />
            </div>
    </div>
    <div className="names__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Contact</h2>
        </div>
        <div className='inputsX2__container'>
               {formData &&  <input id='phoneNumber' type="text" placeholder='Cell number' value={formData.cell} onChange={(e)=> handleFormChange(e)} />}
                <input id='email' type="text" placeholder='E-mail' value={formData.email} onChange={(e)=> handleFormChange(e)} />
            </div>
    </div>
    <div className="address__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Address</h2>
        </div>
        <div className='inputsX3__container'>
                <input id='country' type="text" placeholder='Country' value={formData.country} onChange={(e)=> handleFormChange(e)} />
                <input id='city' type="text" placeholder='City' value={formData.city} onChange={(e)=> handleFormChange(e)} />
                <input id='streetNumber' type="number" placeholder='Street number' value={formData.streetNumber} onChange={(e)=> handleFormChange(e)} />
        </div>
            <input id='streetName' type="text" placeholder='Street name' value={formData.streetName} onChange={(e)=> handleFormChange(e)} />
    </div>
    <div className="coordinates__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Coordinates</h2>
        </div>
        <div className='inputsX2__container'>
                <input id='latitude' type="text" placeholder='Latitude' value={formData.latitude} onChange={(e)=> handleFormChange(e)} />
                <input id='longitude' type="number" placeholder='Longitude'  value={formData.longitude} onChange={(e)=> handleFormChange(e)} />
            </div>
    </div>
</div>     
</div>
<div className="right__container">
    <div className="main__content">
        <h2 className='form__tittle'>Profile photo</h2>
        <div className="img__container">
            {formData &&  <img className='employee__img' src={formData.imgUrl} alt="Employee" width="130px" height="130px" />}
            <div className='block__container'>
                <label htmlFor="imgUrl">Profile photo URL</label>
                <input id='imgUrl' type="text" placeholder='https://randomuser.me/api/portraits/lego/1.jpg'  value={formData.imgUrl} onChange={(e)=> handleFormChange(e)} />
                <p>You may need to upload the image to a hosting service or image sharing site in order to obtain a URL that can be used in this field.</p>
            </div>
        </div>
        <div className="gender__container block__container">
        <div className="namesTittle__container">
            <h2 className='form__tittle'>Select gender:</h2>
        </div>
        <div className='gender__radios'>
            <label htmlFor="male">Male</label>
                <input className='radio' id='male' type="radio" value='male' name='gender' checked={formData.gender === 'male'} onChange={(e)=> handleFormChange(e)}/>
            <label htmlFor="female">Female</label>
                <input className='radio' id='female' type="radio" value='female' name='gender' checked={formData.gender === 'female'} onChange={(e)=> handleFormChange(e)} />
        </div>
    </div>
    </div>
</div>
    </form>
  )
}

export default Form