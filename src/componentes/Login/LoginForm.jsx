import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST } from '../../api'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, loading, error } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    })

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="usuario" {...username} label="Usuário" />
        <Input type="password" name="password" label="Senha" {...password} />

        {loading ? (
          <Button disabled> Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
