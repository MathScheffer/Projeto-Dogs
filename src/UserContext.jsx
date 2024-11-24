import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    async function validate() {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError(null)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)

          if (!response.ok) throw new Error('Token Invalido')
          const json = await response.json()
          console.log(json)

          await getUser(token)
        } catch (Err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }

    validate()
  }, [])
  const getUser = async (token) => {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
    setData(json)
    setLogin(true)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)

      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Verifique usuario e senha.`)
      const { token } = await tokenRes.json()

      window.localStorage.setItem('token', token)

      await getUser(token)
      setLogin(true)
      navigate('/conta')
    } catch (err) {
      console.log(err)
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
  }, [])
  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, loading, error, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
