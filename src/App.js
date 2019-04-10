import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Error404 from './components/error404';
import Logout from './containers/Logout';
import Feed from './components/Feed';

import AuthContext from './contexts/auth';

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Header} />
          <div className='container mt-5'>
            <Switch>
            <Route path='/' exact component={ Home } />
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
              <Route path='/feed' exact component={ Feed } />x`
              <Route component={ Error404 } />
              
            </Switch>
          </div>
        </AuthContext.Provider>
      </HashRouter>

    );
  }
}

export default App;
