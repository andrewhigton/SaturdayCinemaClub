import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Film from '../films/Film';
import PropTypes from 'prop-types';
import Spinner from '../layout/spinner';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';
// import { loadFilms } from '../../actions/film';

const Dashboard = ({ 
  getCurrentProfile, 
  auth: { user }, 
  profile: { profile, loading },
  films: {film}
  }) => {//starts here
  useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);
  console.log(user);
  // if (film === null) return null;
  let arrLength = 5;
  let total = 0;
 
  return (
        <Fragment>
        <div className="dashboard">
        <h1 className='large text-primary'>Welcome {user && user.name}</h1>
        <h2 className='lead'>
          <i className='fas fa-user' />Your movies 
        </h2>

        </div>  
            {user !== null ? 
               <Fragment>
               film
               <div>{film.map(item => (
                  item.user.id !== user.id ? total++ :
                  total++ === arrLength ? 
                  <div className="no-profile">
                    <p>You have not yet created a film</p>
                    <Link to='/create-film' className='btn btn-primary my-1'>
                      Create movie
                    </Link>
                  </div> : 
                    <Film
                      key={item.id}
                      film={item}
                    />
              ))}
                <div>
                  <Link to='/create-film' className='btn btn-primary my-1'>
                        Create movie
                  </Link>
                </div> 
              </div>    
              </Fragment> : 
              <Fragment>
               <div className="no-profile">
                    <p>You have not yet created a film</p>
                    <Link to='/create-film' className='btn btn-primary my-1'>
                      Create movie
                    </Link>
                  </div>
              </Fragment> 
              }  
        </Fragment>
      )
}

 Dashboard.propTypes = {
	  getCurrentProfile: PropTypes.func.isRequired,
	 //deleteAccount: PropTypes.func.isRequired,
	  auth: PropTypes.object.isRequired,
    // loadFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};  

const mapStateToProps = state => ({
 auth: state.auth,
 films: state.film,
 profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);          

// {



//   "title": "Bladerunner",
//   "date": "11/05/2020",
//   "cinema" : "London Curzon Victoria",
//   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE8NYlakt57jiBDcDQbKZE7Bf6-tf2mklrK7sJ4jTwpZWyaeef",
//   "ticketPrice": 1000,
//   "crowdfundTarget": 600,
//   "totalsoFar": 300
// }


// title
// :
// "In the Mood for Love"
// date
// :
// 2020-02-09T00:00:00.000+00:00
// cinema
// :
// "Curzon Aldgate"
// image
// :
// "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhM..."
// ticketPrice
// :
// 12
// crowdfundTarget
// :
// 300
// totalsoFar
// :
// 150
// __v
// :
// 0


// _id
// :
// 5e518fcad752ca2764dbc22e
// title
// :
// "In the Mood for Love"
// date
// :
// 2020-02-09T00:00:00.000+00:00
// cinema
// :
// "Curzon Aldgate"
// image
// :
// "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhM..."
// ticketPrice
// :
// 12
// crowdfundTarget
// :
// 300
// totalsoFar
// :
// 150
// __v
// :
// 0