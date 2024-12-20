import React, { useContext } from 'react'
import styles from './Login.module.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordReset from './LoginPasswordReset'
import LoginPasswordLost from './LoginPasswordLost'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
