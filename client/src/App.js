import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import HowItWorks from './components/howitworks/HowItWorks';
import Dashboard from './components/dashboard/Dashboard';
import CreateFilm from './components/create-film/CreateFilm';
import Alert from './components/layout/Alert';
// import Profile from './components/profile/Profile';
//import CheckoutPage from './components/booking-page/BookingPage';
import FilmPage from './components/booking-page/BookingPage';
//import CheckoutFilm from './components/checkout-film/Checkout-Film';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { loadFilms } from './actions/film'	;
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.scss';

if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App = () => { 
  // useEffect(() => {
  //   store.dispatch(loadUser())
  // }, []);

  // useEffect(() => {
  //   store.dispatch(loadFilms())
  // }, []);

	return (
	// <Provider store={store}>
	   <Router> 
	    <Fragment >
	      	
	      	<Navbar />
	      	<Route exact path='/' component={Landing} />
	      	<section className="dark-overlay">
	      		<Alert />
	      		<Switch>
	      		
	      		  <Route exact path='/register' component={Register} />
	      		  <Route exact path='/login' component={Login} />
	      		  <Route exact path='/howitworks' component={HowItWorks} />          
	      		  <PrivateRoute exact path='/api/film/:id' component={FilmPage} /> 
	      		  <PrivateRoute exact path='/film/dashboard' component={Dashboard} />
	      		  <PrivateRoute exact path='/create-film' component={CreateFilm} />

	      		  />
	      		</Switch>
	      	</section>
	    </Fragment>
	  </Router> 
  	// </Provider>
 );
}

export default App;
// <PrivateRoute exact path='/booking/:id' component={CheckoutPage} /> 
	      		  	
// <Route exact path='/dashboard' component={Dashboard} />
// render={(props) => <CheckoutPage {...props} 