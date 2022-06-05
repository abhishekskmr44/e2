import React from 'react'
import Navbar from '../Component/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  { useEffect, useState } from "react";
import Users from './Users';


function AllRoutes () {
  return (
    <div>
      <Navbar/>
      <div>
      <Routes>
      <Route path = "/" element = {<div>Home</div>}/>
      <Route path = "/login" element = {<div>Login</div>}/>
      <Route path = "/users/:id" element = {
        //   <PrivateRoute>
          <Users/>
        //   </PrivateRoute>
        }/>
      <Route path = "/users/:id" element = {<PrivateRoute><UsersPage/></PrivateRoute>}/>
      </Routes>
      </div>
    </div>
  )
}

export default AllRoutes
