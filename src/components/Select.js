import React from 'react'

const Select = ({setSortByAge}) => {
  return (
<select onChange={(e) => setSortByAge(e.target.value) } name="age" id="cars">
  <option value="oldest">Oldest</option>
  <option value="youngest">Youngest</option>
</select>
  )
}

export default Select