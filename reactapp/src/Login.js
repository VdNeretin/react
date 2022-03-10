import React from 'react';

class Login extends React.Component {
  render () {
    const { setPage } = this.props

    return (
      <form onSubmit={() => setPage('map')}>
        <input name='login' />
        <input name='password' />
        <button type='submit'>Войти</button>
        <button onClick={() => setPage('registration')}>Зарегистрироваться</button>
      </form>
    )
  }
}

export { Login }