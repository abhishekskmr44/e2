import {useState} from "react";
import { createContext } from "react";

import const AuthContext = createContext();

import React from 'react'

const AuthContext = ({children}) => {
 const [isAuthorized, setIsAuthorized] = useState(false);
 
    return (
    <div>
      
    </div>
  )
}

export default AuthContext
