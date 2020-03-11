import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
	        <li>
		        <Link to='/dashboard'>
		        <i className="fas fa-sign-out-alt" />{' '}
		        <span className="hide-sm">Your films</span>
		        </Link>
	        </li>
	        <li onClick={logout}>
		        
		        <Link to='/'>
		        <i className="fas fa-sign-out-alt" />{' '}
		        <span className="hide-sm">Logout</span>
		        </Link>
		        
	        </li>        
	      </ul>
		);

	const guestLinks = (
		<div className="links">
		<ul >
	        <li className='register'>
		        <Link to="/register">Register</Link>
	        </li>
	        <li className='login'>
	    	    <Link  to="/login">/  Login</Link>
	        </li>
	        <div className='guide-link'>
		        <li >
			        <Link to='/howitworks'>
			        How it works
			        </Link>
		        </li>
	        </div>
	      </ul>
	     </div> 
		);

	return (
		<nav className="navbar bg-dark">
	      <div className="main-title">
			<Link to="/">
	        	<h1 >Saturday Cinema Club</h1> 
	        </Link>
	      
	      <h2 className="main-title-subdeck">
	            Your favourite films on the big screen  
	      </h2>
	      </div>

	      { !loading && (
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
	auth: state.auth,
	//isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);


// <li>
// 		        <Link to='/profiles'>
// 		        Developers
// 		        </Link>
// 	        </li>
// 	        <li>
// 		        <Link to='/posts'>
// 		        Posts
// 		        </Link>
// 	        </li>
// 			<li>
// 		        <Link to='/dashboard'>
// 		        <i className="fas fa-user" />{' '}
// 		        <span className="hide-sm">Dashboard</span>
// 		        </Link>
// 	        </li>