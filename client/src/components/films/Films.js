import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
// import { loadFilms } from '../../actions/film';
//import { loadFilms } from '../../actions/film';
import Film from './Film';
import './Films.scss';

const Films = ({ 
	// loadFilms,
	film: {films, loading} 
	}) => {

	if (films === null) return null;
	//console.log(films)
	return (
		<Fragment>
        	<div className="all-screenings">
        	<div>
	    		<h2 className="all-screenings-title">Latest films</h2>
	    	</div>	
	    	<div className="films-list">
	    	{films.map(item => (
				<Film
				film={item}
				key={item._id}
	    		/>
          	))
           }
            </div>
           	<div className="view-all-link">
           		<Link to='/film/dashboard'>View all >></Link>
        	</div>    	
           </div>
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