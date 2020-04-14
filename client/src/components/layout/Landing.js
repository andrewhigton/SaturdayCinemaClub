import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Films from '../films/Films';
import Film from '../films/Films';
import { loadFilms } from '../../actions/film';
import Carousel from '../carousel/Carousel';

const Landing = ({ 
	isAuthenticated, 
	loadFilms,
	// film: {films} 
	}) => {
	  useEffect(() =>  {
    	loadFilms();	
	  	}, [loadFilms]);
	 
	// if (isAuthenticated) {
 //    return <Redirect to='/film/dashboard'/>;
 //  	}
  	
	return (
		<section className="landing dark-overlay">
	      <div className="carousel">
		    <Carousel/>	          
	       </div>
	       <div>
			<Films/>	       	
	       </div>

	    </section>
		)
	}

Landing.propTypes = {
  loadFilms: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  // film: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  // film: state.film
});

export default connect(mapStateToProps, { loadFilms })(Landing);