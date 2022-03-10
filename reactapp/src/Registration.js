import React from "react";

class Registration extends React.Component {
  render () {
    const { setPage } = this.props
  return (
    <form onSubmit={() => {setPage('map')}}>
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
}

export { Registration }