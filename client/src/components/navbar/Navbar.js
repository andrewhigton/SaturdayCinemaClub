import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Navbar.scss';
import '../../App.scss';

const Navbar = ({ auth: { isAuthenticated, loading }, logout, params }) => {
	
	const [ dropdownActive, setDropdownActive ] = useState(false);
	
	const authLinks = (
		<div className="logged-in-nav">
		<ul className={`${dropdownActive ? "dropdown" : "top-row"}`}>
	        
	        
	        <li className={`${dropdownActive ? "reg-dropdown" : "films-tickets-link"}`}>
		        
		        <Link to='/film/dashboard'>
		        <i/>{' '}
		        <span>Your films and tickets</span>
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "buytickets-dropdown" : "buy-tickets-link"}`}>
		        <Link to='/film'>
		        All films
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "how-dropdown" : "howitworks-loggedin"}`}>
			        <Link to='/create-film'>
			        Create screening
			        </Link>
		    </li>        
	      	<li onClick={logout}
	        className={`${dropdownActive ? "buy-dropdown" : "logout"}`}
	        >
		        <Link to='/'>
		        <i/>{' '}
		        <span>Logout</span>
		        </Link>
		        
	        </li>
		  	<div className={`${dropdownActive ? "dropdown" : ""}`}>
	      	</div>
	      </ul>
	      <div 
		      className="hamburgDiv-loggedin"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		  	</div> 	
		  </div> 		
		);

	const guestLinks = (
		<Fragment> 
		<div className="navbar-right">
		<ul className={`${dropdownActive ? "dropdown" : "top-row"}`}>
	        
	        <li className={`${dropdownActive ? "reg-dropdown" : "register"}`}>
		        <Link to="/register">Register</Link>
	        </li>
	        <li className={`${dropdownActive ? "log-dropdown" : "login"}`}>
	    	    <Link to="/login">/ Login</Link>
	        </li>
	        <li className={`${dropdownActive ? "buy-dropdown" : "buytickets-loggedout"}`}>
		        <Link to='/film'>
		        All films
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "how-dropdown" : "howitworks"}`}>
		        <Link to='/howitworks'>
		        How it works
		        </Link>
	        </li>
	     	
	     
	      </ul>
	   
	     </div> 
	     <div 
		      className="hamburgerDiv"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		   </div>
	    </Fragment>
	      
		);

	return (

		<nav className="navbar">
	      <div className="navbar-left">
				<Link to="/" className="main-title">
		        	<h1>SATURDAY CINEMA CLUB</h1> 
		        </Link>
		      
		        <h2 className="main-title-subdeck">
		            Your film, your screen  
		        </h2>
 	      </div>
	      	{(
	      	<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
	      	)}
	    </nav>
		);
	};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth

});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));



// const guestLinks = (
// 		<div className="auth">
// 		<ul className="navbar-right">
	        
// 	        <li className={`${dropdownActive ? "dropdown reg-dropdown" : "display register"}`}>
// 		        <Link to="/register">Register</Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown log-dropdown" : "display login"}`}>
// 	    	    <Link to="/login">/ Login</Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown buy-dropdown" : "display buy-tickets-link"}`}>
// 		        <Link to='/film/dashboard'>
// 		        Buy tickets
// 		        </Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown how-dropdown" : "display howitworks"}`}>
// 		        <Link to='/howitworks'>
// 		        Create screening
// 		        </Link>
// 	        </li>
	     	
	     
// 	      </ul>
// 	       <div 
// 		      className="hamburgerDiv"
// 		      onClick={() => setDropdownActive(!dropdownActive)}
// 		      >
// 		        <p className="hamburger"></p>
// 				<p className="hamburger"></p>
// 				<p className="hamburger"></p>
// 		   </div>
	       
	     
// 	     </div> 
	

// <ul className={`${dropdownActive ? "dropdown" : "navbar-right"}`}>
//<div className={`${dropdownActive ? "dropdown" : ""}`}></div> 	

// <nav className="navbar">
// 	      <div className="navbar-left">
// 			<Link className="main-title" to="/">
// 	        	<h1>Saturday Cinema Club</h1> 
// 	        </Link>
// 	      <h2 className="main-title-subdeck">
// 	            Your favourite films on the big screen  
// 	      </h2>
//  	      </div>
// 	      {(
// 	      	<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
// 	      )}
// </nav>
