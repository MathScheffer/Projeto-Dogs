import React, { useEffect, useState } from 'react'
const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message:
      'A senha precisa ter no mínimo 8 caracteres com 1 caracter minúsculo, 1 maiúsculo, 1 digito.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.',
  },
}
const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }
  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }
  /**
   * executar o validate com o value no parâmetro permite que a função inteira seja executada somente como <hookname>.validate(), não sendo necessário que campo passase o valor externo da função, já que o estado do value se encontrará neste customHook
   */
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
