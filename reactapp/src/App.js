import React from 'react';
import { LoginWithAuth } from './Login';
import { Map } from './Map'
// import { RegistrationWithAuth } from './Registration'
import { ProfileWithAuth } from './Profile'
import { connect } from 'react-redux';
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'


class App extends React.element {
  render() {

    return (
      <>
      <header>
        {/* <nav>
          <button onClick={() => this.setPageTo('map')}>Карта</button>
          <button onClick={() => this.setPageTo('profile')}>Профиль</button>
          <button onClick={this.unauthenticate}>Выйти</button>
        </nav> */}
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Карта</Link>
            </li>
            <li>
            <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <Routes >
           <Route exact path="/" element={<LoginWithAuth/>} />
            <PrivateRouter path="/map" element={<Map/>} />
            <PrivateRouter path="/profile" element={<ProfileWithAuth/>} />
          </Routes>
        </section>
      </main>
      </>
    )
  }
}

export default connect(
state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);