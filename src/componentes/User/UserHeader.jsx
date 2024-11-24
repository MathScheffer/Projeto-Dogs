import React, { useEffect, useState } from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Postar Foto')
        break
      default:
        setTitle('Minha Conta')
        break
    }
  }, [pathname])

  return (
    <header className={`animeLeft ${styles.header}`}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
