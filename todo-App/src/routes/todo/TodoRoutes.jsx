import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TodoApp } from '../../pages/todo/TodoApp'
import { TaskView } from '../../pages/todo/TaskView';
import { NavBar } from '../../pages/todo/components/NavBar';

export const TodoRoutes = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo/tasks/:id" element={<TaskView />} />
        <Route path="/*" element={<Navigate to="/todo" />} />
      </Routes>
    </>
  );
}
