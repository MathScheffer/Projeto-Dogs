import React from 'react'
import styles from './Input.module.css'
/**
 *
 * @param {value}  é o valor passado pelo useForm()
 * @param {onChange} é a função passada desestruturando o hook useForm()
 * @returns
 */
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
