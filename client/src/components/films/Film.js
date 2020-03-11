import React, { Fragment, useState, useEffect } from 'react';
import CustomButton from '../custom-button/CustomButton'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const moment = require('moment');
//import { loadFilms } from '../../actions/film';
//import ImageSlide from '../carousel/ImageSlide';

const Film = ({ film }) => {
const { title,date,cinema,image,ticketPrice,crowdfundTarget,totalsoFar } = film;
const time = moment(date)
const formattedDate = time.format('MMMM Do YYYY, h:mm a');
  // console.log({film})
  return (
      <div className="film">
        <img src={image} className="" />
        <p>{title}</p>
        <p>{cinema}</p>
        <p>{formattedDate}</p>
        <p>Ticket Price £{ticketPrice}</p>
        <p>Ticket Target {crowdfundTarget}</p>
        <p>Tickets sold {totalsoFar}</p>
          <div>
            <CustomButton film={film}/>
          </div>          
      </div>  
    )
  }  
  
   

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
      
export default Film;

// <p className="inset-text-title">{title}</p>
// <p className="inset-text-details">{cinema}</p>
// <img url={image} className="homepage-img fade"/>