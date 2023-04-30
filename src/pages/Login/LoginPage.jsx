import React, { useState } from 'react'

import './LoginPage.scss'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password) // здесь можно выполнить логику отправки данных на сервер
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
