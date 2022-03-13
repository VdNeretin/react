import React from 'react';
import { withAuth } from './AuthContext';

export class Login extends React.Component {

  goToProfile = () => {
    this.props.setPage('profile')
  }

  goToReg = () => {
    this.props.setPage('registration')
  }

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }

  render() {
    const { setPage } = this.props

    return (
      <>
        {
          this.props.isLoggedIn ? (
            <p>
              Вы вошли в аккаунт <button onClick={this.goToProfile}>перейти к профилю</button>
            </p>
          ) : (
            <form onSubmit={this.authenticate}>
              <label htmlFor='email'>E-mail:</label>
              <input name='email' id='email' type='email' size='28' />
              <label htmlFor='password'>password:</label>
              <input name='password' id='password' type='password' size='28' />
              <button type='submit'>Войти</button>
              <button onClick={this.goToReg}>Зарегистрироваться</button>
            </form>
          )
        }
      </>
    )
  }
}

export const LoginWithAuth = withAuth(Login)