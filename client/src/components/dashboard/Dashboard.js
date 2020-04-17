import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Film from '../films/Film';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';
import Ticket from '../ticket/Ticket';
import { createProfile } from '../../actions/profile';

const Dashboard = ({ 
  auth: { user }, 
  film: {films},
  history
  }) => {
       return (
       !user && !films ? <Spinner /> :
        <Fragment>
        <div className="dashboard">
        <h1 className='large text-primary'>Welcome {user && user.name}</h1>
        <h2 className='lead'>
          <i className='fas fa-user' />Your movies and tickets 
        </h2>

        </div>  
        {user.tickets !== null ?              
            <Fragment>
            <h1 className="displayHeader">Your films</h1>
            <div className="displayDash">{films.map(item => (
                 item.user === user._id ?
                 <div key={item._id}>
                 <Film
                   film={item}
                 />
                 </div> : null
            ))}
            </div> 
            <h1 className="displayHeader">Your tickets</h1>
            <div className="displayDash">{user.tickets.map(item => (
                 
                 <div 
                 className="singleTicket"
                 key={item._id}>
                 <Ticket
                   ticket={item}
                 />
                 </div> 
                 // <div>
                 //  <p>No tickets
                 //  </p>
                 //  </div>
            ))}
            </div> 
            </Fragment>
            : null
          }  
          </Fragment>
     )
}

 Dashboard.propTypes = {
	  getCurrentProfile: PropTypes.func.isRequired,
	 //deleteAccount: PropTypes.func.isRequired,
	  auth: PropTypes.object.isRequired,
    // loadFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired,
    profiles: PropTypes.object.isRequired
};  

const mapStateToProps = state => ({
 auth: state.auth,
 film: state.film,
 profiles: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);                              

 
// {user !== null ?              

//                <Fragment>
//                <div>{films.map(item => (
//                     item.user === user._id ?
//                     <div key={item._id}>
//                     <Film
//                       film={item}
//                     />
//                     </div> : null
//               ))}
//                 <div>
//                   <Link to='/create-film' className='btn btn-primary my-1'>
//                         Create movie
//                   </Link>
//                 </div> 
//               </div> 
              
//                <div className="no-profile">
//                     <p>You have not yet created a film</p>
//                     <Link to='/create-film' className='btn btn-primary my-1'>
//                       Create movie
//                     </Link>
//                 </div>
//               </Fragment>
              
//               profile !== null ? 
//                <Fragment>
//                <div>{tickets.map(item => (
//                     <div key={}>
//                     <p>tickets</p>
//                     </div>
//                     ))} :
//                 <div>
//                   <Link to='/' className='btn btn-primary my-1'>
//                         You have not bought any tickets. Click to search films</p>  
//                   </Link>
//                 </div> 
//               </div>    
//               </Fragment>
//                 }
//               }  

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


// <Fragment>
//               <div>{tickets.map(item => (
//                     <div>
//                     <p>tickets</p>
//                     </div>
//                     ))} 
//                 <div>
//                   <Link to='/' className='btn btn-primary my-1'>
//                         <p>You have not bought any tickets. Click to search films</p>  
//                   </Link>
//                 </div> 
//               </div>    
//           </Fragment>
