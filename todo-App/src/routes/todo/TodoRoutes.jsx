import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TodoApp } from '../../pages/todo/TodoApp'

export const TodoRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<TodoApp/>}/>
    <Route path='/*' element={<Navigate to='/'/>}/>
   </Routes>
  )
}
