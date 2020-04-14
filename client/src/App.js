//so to return js, use curlys, push the () down, prefaced by return 

//loadfilms to fire on first load home screen DONE (I THINK, WATCH FOR IT)
//when login, the page is broken, before refreshing to work. why? DONE 
//why is dashboard being called twice? see console logs 
//when logout, return to homepage DONE
//when click on sat cin logo, return to homepage DONE
//when a user adds a film, reload the page so that it appears immediatley.
//add a buy tickets button with a cart, and a checkout page
//add click throughs from film titles to an api from imdb.    
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import HowItWorks from './components/howitworks/HowItWorks';
import Dashboard from './components/dashboard/Dashboard';
import CreateFilm from './components/profile-forms/CreateFilm';
import Alert from './components/layout/Alert';
import Profile from './components/profile/Profile';
import CheckoutPage from './components/booking-page/BookingPage';
import FilmPage from './components/booking-page/BookingPage';
import CheckoutFilm from './components/checkout-film/Checkout-Film';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App1.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

	return (
	<Provider store={store}>
	   <Router> 
	    <Fragment>
	      	<Navbar />
	      	<Route exact path='/' component={Landing} />
	      	<section className="dark-overlay">
	      		<Alert />
	      		<Switch>
	      		
	      		  <Route exact path='/register' component={Register} />
	      		  <Route exact path='/login' component={Login} />
	      		  <Route exact path='/profile/:id' component={Profile} />          
	      		  <Route exact path='/howitworks' component={HowItWorks} />          
	      		  <Route exact path='/:id' component={FilmPage} /> 
	      		  <Route exact path='/booking/:id' component={CheckoutFilm} /> 
	      		  <PrivateRoute exact path='/film/dashboard' component={Dashboard} />
	      		  <PrivateRoute exact path='/create-film' component={CreateFilm} />
	      		  />
	      		</Switch>
	      	</section>
	    </Fragment>
	  </Router> 
  	</Provider>
 );
}

export default App;
// <PrivateRoute exact path='/booking/:id' component={CheckoutPage} /> 
	      		  
// <Route exact path='/dashboard' component={Dashboard} />
// render={(props) => <CheckoutPage {...props} 