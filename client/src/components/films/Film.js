import React from 'react';
import { Link } from 'react-router-dom';
import './Films.scss';
const moment = require('moment');

const Film = ({ film, index }) => {
const { _id, title,date,filmtime,cinema,image,ticketPrice,crowdfundTarget,totalsoFar } = film;
const time = moment(date)
const formattedDate = time.format('D MMMM YYYY');

  return (

      <div className={`film film-border _${index}`}>
        <img src={image} alt='' className='small-film-pic'/>
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