import React from 'react';
import CustomButton from '../custom-button/CustomButton'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const moment = require('moment');
//import { loadFilms } from '../../actions/film';
//import ImageSlide from '../carousel/ImageSlide';

const Film = ({ film }) => {
const { _id, title,date,cinema,image,ticketPrice,crowdfundTarget,totalsoFar } = film;
const time = moment(date)
const formattedDate = time.format('MMMM Do YYYY, h:mm a');
//console.log(_id);
const handleClick = (e) => {
    // const { param } = e.target._id;
    // console.log(e);
    //do what you want to do with the parameter
  }
  //what's teh link between film abd bookingpage. think this migth need sorting next
  return (
      <div className="film">
        <img src={image} className="" />
        <p>{title}</p>
        <p>{cinema}</p>
        <p>{formattedDate}</p>
        <p>Ticket Price £{ticketPrice}</p>
        <p>Ticket Target {crowdfundTarget}</p>
        <p>Tickets sold {totalsoFar}</p>
          <Link to={`/${_id}`}>    

          
            <button 
            className='custom-button'

            />
            </Link>
          </div> 
    )
  }  

export default Film;
  // <Link to={`booking/${_id}`}>    
            // {{
            //  pathname: `booking/${title}`,
            //  state: {title}
            // }}

// Film.propTypes = {
//   // loadFilms: PropTypes.func.isRequired,
//   films: PropTypes.object.isRequired
// };

// Film.propTypes = {
//   film: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   films: state.film
// });

// export default connect(mapStateToProps)(Film);
      
