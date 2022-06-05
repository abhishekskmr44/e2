import React from 'react'
import { FirstName } from '../App'

const ComC = () => {
  return (
    <div>
    <FirstName.Consumer>{(fname)=>{}}</FirstName.Consumer>
      <h1>My name is Abhishek</h1>
    </div>
  )
}

export default ComC
