import {FC} from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRoutes:FC = ():JSX.Element => {
  return (
    <Routes>
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/*" element={<Navigate to="/auth/register" />} />
  </Routes>
  )
}
