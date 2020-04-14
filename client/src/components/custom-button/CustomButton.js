import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ film }) => {
  //check you get id here
  
  // const id = film._id;
  
  return (
  // <Link to={`/booking/${id}`}>

  
  <Link to='/booking'>
    <button
    className='custom-button'  
    >
      Book now
    </button>
  </Link>

);
}

export default CustomButton;