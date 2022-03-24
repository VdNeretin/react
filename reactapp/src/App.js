import React from 'react';
import { LoginWithAuth } from './Login';
import { Map } from './Map'
import { RegistrationWithAuth } from './Registration'
import { ProfileWithAuth } from './Profile'
import { connect, useSelector } from 'react-redux';
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import { logOut } from './actions'

const ProtectedPage = ({ component }) => {
  const isLoggedIn = useSelector (state => state.auth.isLoggedIn)

  return isLoggedIn ? component : <Navigate to='/' />
}



class App extends React.Component {

  unauthenticate = () => {
    this.props.logOut();
  }

  render() {

    return (
      <>
      <header>
        <nav>
          <ul>
          <li><Link to="map">Карта</Link></li>
          <li><Link to="profile">Профиль</Link></li>
          <li><button onClick={this.unauthenticate}>Log Out</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <Routes >
           <Route exact path='/' element={<LoginWithAuth />} />
           <Route exact path='/registration' element={<RegistrationWithAuth />} />
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
state => ({isLoggedIn: state.auth.isLoggedIn}), { logOut })(App);