import React from 'react';
import { LoginWithAuth } from './Login';
import { Map } from './Map'
import { Registration } from './Registration'
import { ProfileWithAuth } from './Profile'
import { withAuth } from './AuthContext';

const PAGES = {
  login: (props) => <LoginWithAuth {...props}/>,
  map: (props)=><Map {...props}/>,
  registration: Registration,
  profile: (props)=><ProfileWithAuth {...props}/>
}

class App extends React.Component {
  unauthenticate = () => {
    this.props.logOut();
    this.props.setPage("login")
  }
  state = { currentPage: 'login' };

  setPageTo = (page) => {
    if (this.props.isLoggedIn){
      this.setState({ currentPage: page })
    } else {
      this.setState({ currentPage: "login" })
    }
  }

  render() {
    const { page } = this.state
    const Page = PAGES[page]

    return (
      <>
      <header>
        <nav>
          <button onClick={() => this.setPageTo('map')}>Карта</button>
          <button onClick={() => this.setPageTo('profile')}>Профиль</button>
          <button onClick={this.unauthenticate}>Выйти</button>
        </nav>
      </header>
      <main>
        {PAGES [this.state.currentPage]({setPage: this.setPageTo})}
      </main>
      </>
    )
  }
}

export default withAuth(App);