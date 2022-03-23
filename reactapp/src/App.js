import React from 'react';
import { LoginWithAuth } from './Login';
import { Map } from './Map'
// import { RegistrationWithAuth } from './Registration'
import { ProfileWithAuth } from './Profile'
import { connect, useSelector } from 'react-redux';
import { Link, Routes, Route, Navigate } from 'react-router-dom'

const ProtectedPage = ({ component }) => {
  const isLoggedIn = useSelector (state => state.auth.isLoggedIn)

  return isLoggedIn ? component : <Navigate to='/' />
}


class App extends React.element {
  render() {

    return (
      <>
      <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="map">Карта</Link></li>
          <li><Link to="profile">Профиль</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <Routes >
           <Route exact path='/' element={<LoginWithAuth />} />
           <Route path='map' element={<ProtectedPage component={<Map />} />} />
           <Route path='profile' element={<ProtectedPage component={<ProfileWithAuth />} />} />
          </Routes>
        </section>
      </main>
      </>
    )
  }
}

export default connect(
state => ({isLoggedIn: state.auth.isLoggedIn}))(App);