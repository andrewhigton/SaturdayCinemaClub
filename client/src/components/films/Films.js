import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/spinner';
import { connect } from 'react-redux';
import { loadFilms } from '../../actions/film';
import Film from './Film';

const Films = ({ 
	loadFilms,
	films: {film, loading} 
	}) => {

	// useEffect(() =>  {
 //    	loadFilms();	
	//   	}, [loadFilms]);
	
	if (film === null) return null;
	console.log(film)
	return (
	<Fragment>
    	
        <section className="all-screenings">
        	<h2 className="all-screenings-title">All our screenings</h2>
        	<div className="films-list"> 
	    	{film.map(item => (
				<Film
				film={item}
				key={item._id}
	    		/>
          	))
           }
           </div>
        </section>    	
	
      </Fragment>
	)
}

Films.propTypes = {
	loadFilms: PropTypes.func.isRequired,
	films: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	films: state.film
});

export default connect(mapStateToProps, { loadFilms })(Films);