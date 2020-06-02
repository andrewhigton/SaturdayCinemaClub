import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
// import { loadFilms } from '../../actions/film';
//import { loadFilms } from '../../actions/film';
import Film from './Film';

const Films = ({ 
	// loadFilms,
	film: {films, loading} 
	}) => {

	if (films === null) return null;
	//console.log(films)
	return (
	<Fragment>
    	
        <section className="all-screenings">
        	<h2 className="all-screenings-title">All our screenings</h2>
        	<div className="films-list"> 
	    	{films.map(item => (
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
	film: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	film: state.film
});

export default connect(mapStateToProps)(Films);