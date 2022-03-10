import React from 'react';
import { Login } from './Login';
import { Map } from './Map'
import { Registration } from './Registration'
import { Profile } from './Profile'

const PAGES = {
  login: Login,
  map: Map,
  registration: Registration,
  profile: Profile
}

class App extends React.Component {
  state = { page: 'login' }

  setPage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page } = this.state
    const Page = PAGES[page]

    return (
      <>
      <header>
        <nav>
          <button onClick={() => this.setPage('map')}>Карта</button>
          <button onClick={() => this.setPage('profile')}>Профиль</button>
          <button onClick={() => this.setPage('login')}>Выйти</button>
        </nav>
      </header>
      <main>
        <Page setPage={this.setPage} />
      </main>
      </>
    )
  }
}

export default App