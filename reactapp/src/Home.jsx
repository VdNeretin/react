import React from "react";

export const Home = () => {
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="email">Имя пользователя</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Пароль</label>
      <input id="password" type="password" name="password" size="28" />
      <button>Войти</button>
    </form>
  )
}