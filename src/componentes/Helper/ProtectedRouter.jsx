import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
  const { login } = useContext(UserContext)

  console.log(login)
  if (login) {
    return children
  } else if (login === false) {
    return <Navigate to="/login" />
  } else return <></>
}

export default ProtectedRouter
