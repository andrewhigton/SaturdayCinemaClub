import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import PropTypes from 'prop-types';
import { getFilmById, updateFilm } from '../../actions/film';
//import { updateUserTickets } from '../../actions/profile';
import { updateUserTickets } from '../../actions/auth';
//import { UPDATE_FILM } from '../../actions/types';
//import './checkout-item.styles.scss';

//when you buy a ticket, it swtiches to jim. why?

const CheckoutFilm = ({ 
  film: {film, loading}, 
  match, 
  getFilmById, 
  updateFilm, 
  updateUserTickets,
  history }) => {
  // let bookingTotal = 0;

  const [filmData, setFilmData] = useState({
    _id: film._id,
    user: film.user,
    title: film.title,
    date: film.date,
    cinema: film.cinema,
    image: film.image,
    ticketPrice: film.ticketPrice,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar
  });

  let [bookingCost, setBookingCost] = useState(0);

  const [ticketData, setTicketData] = useState({
    title: film.title,
    ticketPrice: film.ticketPrice,
    date: film.date,
    cinema: film.cinema,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar,
    numberOfTickets: 0,
    cost: 0
  });
    
  const onChange = (e) => {   
    let ticketsTotal = parseInt(e.target.value);
    let bookingTotal = parseInt(film.ticketPrice) * parseInt(e.target.value); 
    let totalTicketsBooked = film.totalsoFar + parseInt(e.target.value)
    setBookingCost(bookingTotal)
    setTotalSoFar(totalTicketsBooked);
    setTicketTotalSoFar(totalTicketsBooked, bookingTotal, ticketsTotal);
  }

  const setTotalSoFar = (totalTicketsBooked) => {
    setFilmData({...filmData, totalsoFar: totalTicketsBooked });
  }

  const setTicketTotalSoFar = (totalTicketsBooked, bookingTotal, ticketsTotal) => {
    setTicketData({...ticketData, 
     totalsoFar: totalTicketsBooked, 
     cost: bookingTotal,
     numberOfTickets: ticketsTotal });
  } 

  const onSubmit = (e) => {
    e.preventDefault();
    updateFilm(filmData, history);
    updateUserTickets(ticketData, history);
  };

  if (film === null) return null;
  return (
    <div className="film">
    <div>
      <form>
      <div className='checkout-page how-it-works'>
        <div className='checkout-header'>
          <div className='header-block'>

            <span>Film: {film.title}</span>
          </div>
          
          <div className='header-block'>
            <span>Date: {film.date} </span>
          </div>
          
          <div className='header-block'>
            <span>Price: £{film.ticketPrice} </span>
          </div>
          
          <div className='header-block'>
            <span>Crowdfunding Target: {film.crowdfundTarget} </span>
          </div>
          <div 
          className='header-block'>
            <span>Tickets sold: {film.totalsoFar}</span>
          </div>
        </div>
        </div>
        </form>
      

          <div className='header-block'>
            <input
              type='number'
              placeholder='Enter number of tickets'
              name='tickets'
              //onInput={e => setBookingCost({ parseInt({film.ticketPrice}) * parseInt(e.target.value)}) }
              onChange={e => onChange(e)}
            />
          </div>
          <div className='header-block'>
            <span>Basket total: £{bookingCost}</span>
          </div>
          <div>
          <Link className='btn btn-light my-1' to='/dashboard'>Go Back
          </Link>
          </div>
          <div>
          <div className='test-warning'>
          * Please use the following test credit card for payments  
          <br />
          4242 4242 4242 4242 - Exp 01/21 - CVV: 123
          </div>
            <span onClick={e => onSubmit(e)}> 
              <StripeCheckoutButton price={bookingCost} />
            </span>
          </div>
        </div>
      </div>
  )
}

CheckoutFilm.propTypes = {
  updateFilm: PropTypes.func.isRequired,
  updateUserTickets: PropTypes.func.isRequired,
  getFilmById: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  film: state.film
});

export default connect(mapStateToProps, { 
  getFilmById, 
  updateFilm, 
  updateUserTickets 
})(withRouter(CheckoutFilm));

//<button>Press</button>
              