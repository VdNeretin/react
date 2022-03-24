import React from "react";
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { authenticate } from './actions'

export class Registration extends React.Component {
  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  } 
  render () {
    
  return (
    <>{
      this.props.isLoggedIn ? (
        <Navigate to="/map" />
      ) : (
    <form onSubmit={this.authenticate}>
      <h1>Регистрация</h1>
      <label htmlFor="email">Адрес электронной почты *</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="email">Имя *</label>
      <input id="text" type="text" name="firstdname" size="28" />
      <label htmlFor="text">Фамилия *</label>
      <input id="text" type="text" name="lastname" size="28" />
      <label htmlFor="password">Пароль *</label>
      <input id="password" type="password" name="password" size="28" />
      <button type='submit'>Зарегистрироваться</button>
      <p>
        Уже зарегестрированны? <Link to='/'>Войти</Link>
      </p>
    </form>
    )
    }
    </>
  )
}
}


export const RegistrationWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Registration)