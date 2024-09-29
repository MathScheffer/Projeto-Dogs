import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react'
import { UserContext } from '../UserContext'
const Header = () => {
  const { data, userLogout } = useContext(UserContext)

  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to="/conta">
              {data.nome}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  )
}

export default Header