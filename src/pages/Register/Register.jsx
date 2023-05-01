import "./Register.scss";
import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    };
    fetch("http://35.203.36.97/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при регистрации");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Успешно зарегистрирован:", data);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.error("Ошибка регистрации:", error);
        setErrorMessage(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Фамилия:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Подтверждение пароля:
        <input
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </label>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">Регистрация прошла успешно!</p>}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
