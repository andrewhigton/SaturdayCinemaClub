import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import Navbar from './components/navbar/Navbar';
import Landing from './components/layout/Landing';
import HowItWorks from './components/howitworks/HowItWorks';
import Dashboard from './components/user-dashboard/Dashboard';
import CreateFilm from './components/create-film/CreateFilm';
import BookingPage from './components/booking-page/BookingPage';
import FilmPage from './components/films-page/FilmPage';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.scss';

if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App = () => { 

	return (
	   <Router> 
	    <Fragment >
	      	
      	<Navbar />
      	<Route exact path='/' component={Landing} />
      	<section className="dark-overlay">
      		<Switch>
      		  <Route exact path='/register' component={Register} />
      		  <Route exact path='/login' component={Login} />
            <Route exact path='/film/' component={FilmPage} />
      		  <Route exact path='/howitworks' component={HowItWorks} />          
      		  <PrivateRoute exact path='/api/film/:id' component={BookingPage} /> 
      		  <PrivateRoute exact path='/film/dashboard' component={Dashboard}/>
      		  <PrivateRoute exact path='/create-film' component={CreateFilm} />
      		  />
      		</Switch>
      	</section>
	    </Fragment>
	  </Router> 
 );
}

export default App;