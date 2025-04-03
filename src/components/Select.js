import React from 'react'

const Select = ({setSortByAge, sortbyAge}) => {
  return (
<select className='select' onChange={(e) => setSortByAge(e.target.value) } name="age" id="sortBy" value={sortbyAge}>
  <option value="youngest">Youngest</option>
  <option value="oldest">Oldest</option>
</select>
  )
}

export default Select