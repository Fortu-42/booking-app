import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/navigations/MainNavigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className='main-content'>
            <Switch>
              <Redirect from='/' to='/auth' exact></Redirect>
              <Route path='/auth' component={AuthPage}></Route>
              <Route path='/events' component={EventsPage}></Route>
              <Route path='/bookings' component={BookingsPage}></Route>
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
