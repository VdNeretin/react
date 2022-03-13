import React from "react";
import { withAuth } from "./AuthContext";

class Profile extends React.Component {

  unauthenticate = () => {
    this.props.logOut();
    this.props.setPage("login")
  }

  render () {
    const { setPage } = this.props

    return (
      <form onSubmit={() => setPage('map')}>
      <h1>Профиль</h1>
      <label htmlFor="email">Имя владельца</label>
      <input id="text" type="text" name="firstdname" size="28" />
      <label htmlFor="number">Номер карты</label>
      <input id="number" type="number" name="cardnumber" size="28" />
      <label htmlFor="date">MM/YY</label>
      <input id="date" type="date" name="date" size="28" />
      <label htmlFor="cvc">CVC</label>
      <input id="cvc" type="number" name="cvcnumber" size="28" />
      <button type='submit'>сохранить</button>
      <button onClick={this.unauthenticate}>Log Out</button>
    </form>
    )
  }
}

export const ProfileWithAuth = withAuth(Profile)
