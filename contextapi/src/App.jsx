import React, { createContext } from 'react'
import ComA from './Components/Navbar'


const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
    <div>
    <FirstName.Provider value={'Abhishek Sukumar'}>
    <LastName.Provider value={'Sukumar'}><ComA/></LastName.Provider>
    </FirstName.Provider>
    
      
    </div>
  )
}

export default App
export {FirstName}
