import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
import { loadFilms } from '../../actions/film';
import Film from '../films/Film';
import '../films/Films.css';

const FilmPage = ({ 
	loadFilms,
	film: {films, loading} 
	}) => {

	useEffect(() =>  {
      loadFilms();  
  }, [loadFilms]);

	return (
		<Fragment>
        	<div className="all-screenings">
        	<div>
	    		<h2 className="all-screenings-title">All our screenings</h2>
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
           </div>
           <Footer/>
        </Fragment>    	
	)
}

FilmPage.propTypes = {
	films: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	film: state.film
});

export default connect(mapStateToProps, { loadFilms })(FilmPage);