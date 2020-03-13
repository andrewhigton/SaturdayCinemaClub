import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/spinner';
import Films from '../films/Films';
import Film from '../films/Films';
import { loadFilms } from '../../actions/film';
import Carousel from '../carousel/Carousel';

const Landing = ({ 
	isAuthenticated, 
	loadFilms,
	films: {film} 
	}) => {
	  useEffect(() =>  {
    	loadFilms();	
	  	}, [loadFilms]);
	  
	if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  	}

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
  films: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  films: state.film
});

export default connect(mapStateToProps, { loadFilms })(Landing);
//export default Landing;