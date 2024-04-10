import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/authentication/Login'
import { Register } from '../../pages/authentication/Register'

export const AuthRoutes = () => {
  return (
  <Routes>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
   <Route path='*' element={<Navigate to='/auth/login'/>}/>
  </Routes>
  )
}
