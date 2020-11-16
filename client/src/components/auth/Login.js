import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './auth.scss';

const Login = ( { login, isAuthenticated } ) => {
	const  [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => setFormData
	({...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {  
		e.preventDefault(); 
		//console.log('Success');
		login(email, password)
		//this fires login/actions
		//gets body in actions, sends data to the link
		//dispatches login success in reducers 
		}

		if(isAuthenticated) {
			return <Redirect to="/film/dashboard"/>;
		}

return <Fragment>
		      <p className="lead">Sign in to your account</p>
		      <form className="form" action="create-profile.html" onSubmit={e => onSubmit(e)}>
		        <div className="form-group">
		          <input type="email" 
		          placeholder="Email Address" 
		          name="email" 
		          value={email}
		          onChange={e => onChange(e)} 
		          required />
		        </div>
		        <div className="form-group">
		          <input
		            type="password"
		            placeholder="Password"
		            name="password"
		            value={password}
		          	onChange={e => onChange(e)} 
		            minLength="3"
		          />
		        </div>
		        <input type="submit" className="btn btn-primary" value="Login" />
		      </form>
		      <p className="lead">
		        Don't have an account? <Link className="reg" to="/register">Sign Up</Link>
		      </p>
		   </Fragment>
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login} )(Login);