import React, { useState, useEffect, useRef } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow'; 
import '../../App1.css';

const Carousel = ({ films: 
  { film } 
  }) => {
  
  const [ currentImageIndex, setImageIndex ] = useState();
  
  useEffect(() => {
    const timer = setTimeout(nextSlide, 4000)
    return () => clearTimeout(timer)
  }, [nextSlide])

  useEffect(() => {
  setImageIndex(0);
  }, [setImageIndex]);

  function previousSlide () {
    const lastIndex = film.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setImageIndex(index)  
  }
  
  function nextSlide () {
    const lastIndex = film.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
  setImageIndex(index)
    }

  if (film === null) return null;
    return (
        <div>
        <ReactCSSTransitionGroup 
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { film[currentImageIndex].image }      
        </ReactCSSTransitionGroup>
      </div>
    );
}

Carousel.propTypes = {
  films: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  films: state.film
});

export default connect(mapStateToProps)(Carousel);

// <ImageSlide 
//             url={ film[currentImageIndex].image } 
//             title={ film[currentImageIndex].title }
//             cinema={ film[currentImageIndex].cinema }
//             date={ film[currentImageIndex].date }
//             /> 