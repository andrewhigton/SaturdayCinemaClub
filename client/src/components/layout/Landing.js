import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Films from '../films/Films';
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