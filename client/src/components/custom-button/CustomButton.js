import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ film }) => {
  //check you get id here
  
  const id = film._id;
  
  return (
  // <Link to={`/booking/${id}`}>
  <Link to='booking'>
  
  <button
  //what is inverted?
    // className={`${inverted ? 'inverted' : ''} ${
    //   isGoogleSignIn ? 'google-sign-in' : ''
    // } custom-button`}
    // {...otherProps}
  className='custom-button'
  // film={film._id}
  >
    Book now
  </button>
  </Link>
);
}

export default CustomButton;