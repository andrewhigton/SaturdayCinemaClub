import React from 'react';
import CustomButton from '../custom-button/CustomButton'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Films.scss';
const moment = require('moment');

//import { loadFilms } from '../../actions/film';
//import ImageSlide from '../carousel/ImageSlide';

const Film = ({ film }) => {
const { _id, title,date,filmtime,cinema,image,ticketPrice,crowdfundTarget,totalsoFar } = film;
const time = moment(date)
const formattedDate = time.format('D MMMM YYYY');
// const handleClick = (e) => {
//   }

  return (
      <div className="film film-border">
        <img src={image} className="small-film-pic" />
        <p>{title}</p>
        <p>{cinema}</p>
        <p>{formattedDate} {filmtime}</p>
        <p>Ticket Price £{ticketPrice}</p>
        <p>Ticket Target {crowdfundTarget}</p>
        <p>Tickets sold {totalsoFar}</p>
          <Link to={`/api/film/${_id}`}>    
            <button className='custom-button'>
            Buy tickets
            </button>
            </Link>
      </div> 
    )
  }  

export default Film;
      // <div className="film film-border">
      //   <img src={image} className="small-film-pic" />
      //   <p>{title}</p>
      //     <Link to={`/api/film/${_id}`}>    
      //       <button className='custom-button'>
      //       Buy tickets
      //       </button>
      //       </Link>
      // </div> 