import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Films from '../films/Films';
import Film from '../films/Films';
import Footer from '../footer/Footer';
import { loadFilms } from '../../actions/film';
import FilmCarousel from '../carousel/Carousel';

const Landing = ({ 
	isAuthenticated, 
	loadFilms,
	film: {films} 
	}) => {
	  useEffect(() =>  {
    	loadFilms();	
	  	}, [loadFilms]);
	 
	// if (isAuthenticated) {
 //    return <Redirect to='/film/dashboard'/>;
 //  	}
  	//console.log(films)
	return (
		<section>
	      <div className="carousel">
		    <FilmCarousel/>	          
	       </div>
	       <div >
			<Films/>	       	
	       </div>
	       <Footer/>
	    </section>
		)
	}

Landing.propTypes = {
  loadFilms: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  film: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  film: state.film
});

export default connect(mapStateToProps, { loadFilms })(Landing);


// return (
// 		<section className="landing dark-overlay">
// 	      <div className="carousel">
// 		    <filmCarousel/>	          
// 	       </div>
// 	       <div>
// 			<Films/>	       	
// 	       </div>

// 	    </section>
// 		)