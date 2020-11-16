import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Film from '../films/Film';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import Ticket from '../ticket/Ticket';
import Footer from '../footer/Footer';
import { loadFilms } from '../../actions/film';
import DashboardTickets from './Dashboard-Tickets';
import DashboardFilms from './Dashboard-Films';;

const Dashboard = ({ 
  auth: { user, loading }, 
  film: { films },
  loadFilms,
  history
  }) => {

  useEffect(() =>  {
      loadFilms();  
  }, [loadFilms]);

  // console.log(user);

return ( 
        <Fragment>
          <div>
          <h2 className='welcome-message'>Welcome {user && user.name} — Your tickets and screenings</h2>
          </div>
          <div className="dashboard-display">
          <DashboardTickets
          user={user}
          loading={loading}
           />
          <DashboardFilms
          user={user}
          films={films}
          />
          </div>
          <Footer />
        </Fragment>
      )
}

 Dashboard.propTypes = {
	  auth: PropTypes.object.isRequired,
    loadFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired,
};  

const mapStateToProps = state => ({
 auth: state.auth,
 film: state.film,
});

export default connect(mapStateToProps, { loadFilms })(Dashboard);