import React, { useState } from 'react'

import './Register.scss'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('http://your-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error)
        setLoading(false)
        return
      }

      // если регистрация прошла успешно, можно перенаправить пользователя на страницу входа
      window.location.href = '/login'
    } catch (error) {
      console.error(error)
      setError('An error occurred. Please try again later.')
      setLoading(false)
    }
  }

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </label>
        <br />
        <label className="register-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </label>
        <br />
        <label className="register-label">
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          />
        </label>
        <br />
        {error && <div className="register-error">{error}</div>}
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default Register
