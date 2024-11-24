import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import FeedSvg from '../../Assets/feed.svg?react'
import EstatisticasSvg from '../../Assets/estatisticas.svg?react'
import AdicionarSvg from '../../Assets/adicionar.svg?react'
import SairSvg from '../../Assets/sair.svg?react'
import style from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'
const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const navigate = useNavigate()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])
  function handleLogout() {
    userLogout()
    navigate('/login')
  }
  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <FeedSvg />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <EstatisticasSvg />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarSvg />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <SairSvg />
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
