import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../App.scss';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	
	const [ dropdownActive, setDropdownActive ] = useState(false);
	
	const authLinks = (
		<ul className="loggedin navbar-right">
	        
	        <li className={`${dropdownActive ? "films-dropdown" : "films-tickets-link"}`}>
		        <Link to='/film/dashboard'>
		        <i/>{' '}
		        <span>Films and tickets</span>
		        </Link>
	        </li>
	        <li onClick={logout}
	        className={`${dropdownActive ? "logout-dropdown" : "logout"}`}
	        >
		        <Link to='/'>
		        <i/>{' '}
		        <span>Logout</span>
		        </Link>
		        
	        </li>
	        <li className={`${dropdownActive ? "how-auth-dropdown" : "how-loggedin"}`}>
			        <Link to='/howitworks'>
			        How it works
			        </Link>
		        </li>        
	      <div 
		      className="hamburgerDiv"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		  	</div> 	
		  	<div className={`${dropdownActive ? "dropdown" : ""}`}>
	      	</div>
	      </ul>
	      
		);

	const guestLinks = (
		
		<ul className="loginlinks navbar-right">
	        <div className='auth'>
	        <li className={`${dropdownActive ? "reg-dropdown" : "register"}`}>
		        <Link to="/register">Register</Link>
	        </li>
	        <li className={`${dropdownActive ? "log-dropdown" : "login"}`}>
	    	    <Link  to="/login"> Login</Link>
	        </li>
	        </div>
	        <li className={`${dropdownActive ? "how-dropdown" : "howitworks"}`}>
		        <Link to='/howitworks'>
		        How it works
		        </Link>
	        </li>
		 <div 
		      className="hamburgerDiv"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      //this isn't toggling. why? 
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		  	</div> 	
		  	<div className={`${dropdownActive ? "dropdown" : ""}`}>
	      	</div>
	      </ul>
	      
	      
		);

	//next, make it fold
	//then a drop down
	//why doesn't it work on mobile? 
	return (

		<nav className="navbar">
	      <div className="navbar-left">
			<Link className="main-title" to="/">
	        	<h1>Saturday Cinema Club</h1> 
	        </Link>
	      
	      <h2 className="main-title-subdeck">
	            Your favourite films on the big screen  
	      </h2>
 	      </div>

	      {  (
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

export default connect(mapStateToProps, { logout })(Navbar);

// <li>
// 		        <Link to='/'>
// 		        <i />{' '}
// 		        <span>Film showings</span>
// 		        </Link>
// 	        </li>