import React from "react";

export class Registration extends React.Component {
  goToProfile = () => {
    this.props.setPage('profile')
  } 

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }

  render () {
    
  return (
    <>{
      this.props.isLoggedIn ? (
        <p>
          Вы вошли в аккаунт <button onClick={this.goToProfile}>перейти к профилю</button>
        </p>
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
    </form>
    )
    }
    </>
  )
}
}

export const RegistrationWithAuth = (Registration)