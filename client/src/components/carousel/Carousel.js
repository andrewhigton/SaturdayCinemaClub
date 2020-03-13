import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow'; 
import '../../App1.css';

const Carousel = ({ films: 
  { film } 
  }) => {

  const [ currentImageIndex, setImageIndex ] = useState([0]);
  
  // const [active, setActive] = useState();

  // useEffect(() => {
  //   const timer = setTimeout(nextSlide, 3000);
  //   return () => clearTimeout(timer);
  // }, [nextSlide])

  // useEffect(() => {
  // setImageIndex(0);
  // }, [setImageIndex]);

  // function previousSlide () {
  //   const lastIndex = film.length - 1;
  //   const shouldResetIndex = currentImageIndex === 0;
  //   const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
  //   setImageIndex(index)  
  // }
  
  // function nextSlide () {
  //   const lastIndex = film.length - 1;
  //   const shouldResetIndex = currentImageIndex === lastIndex;
  //   const index = shouldResetIndex ? 0 : currentImageIndex + 1;
  // setImageIndex(index)
  //   }

  if (film === null) return null;
    return (
        <div>
        <p>works</p>
        
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
        // className={'image-slide'} 
        // // className={active ? 'fade image-slide' : 'image-slide'} 
        // url={ film[currentImageIndex].image } 
        // title={ film[currentImageIndex].title }
        // cinema={ film[currentImageIndex].cinema }
        // date={ film[currentImageIndex].date }
        // />     
        // <div className="arrows">
        // <Arrow
        //   direction="left"
        //   // clickFunction={ previousSlide } 
        //   glyph="&#9664;" 
        //  />
        // <Arrow
        //   direction="right"
        //   // clickFunction={ nextSlide }
        //   glyph="&#9654;" 
        //  />
        //</div>   