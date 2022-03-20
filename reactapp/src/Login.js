import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from './actions'
import { Link } from 'react-router-dom'

export class Login extends React.Component {
  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  }

  render() {
   

    return (
      <>
        {
          this.props.isLoggedIn ? (
            <p>
              Вы вошли в аккаунт <Link to='/profile'>перейти к профилю</Link>
            </p>
          ) : (
            <form onSubmit={this.authenticate}>
              <label htmlFor='email'>E-mail:</label>
              <input name='email' id='email' type='email' size='28' />
              <label htmlFor='password'>password:</label>
              <input name='password' id='password' type='password' size='28' />
              <button type='submit'>Войти</button>
              {/* <button onClick={this.goToReg}>Зарегистрироваться</button> */}
            </form>
          )
        }
      </>
    )
  }
}

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login)