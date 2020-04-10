import React, {Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App =()=> {
    useEffect(() => {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }, []);
 
return (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Route exact path='/' component={Landing}></Route>
      <section className="container">
        <Alert></Alert>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
)};

export default App;
