import React from 'react';
import '../../App.scss';

const moment = require('moment');


//so yo ueither have to import all at same size
//or do media queries with varying sizes 
//standard images shrink to fit, background don't
const ImageSlide = ({ url, title, cinema, date, className }) => {
  
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    transition: 'all 0.6s linear',
    objectFit: 'contain',
    // borderBottom: 'solid 10px'
  };

  const time = moment(date)
  const formattedDate = time.format('MMMM Do YYYY, h:mm a');
  
  return (
    <div 
    className={'image-slide'}
    style={styles}
    title={title}
   	cinema={cinema}
   	date={date}   
	>
		<div className="inset-text">
		<h2 className="inset-text-title">{title}</h2>
		<h2 className="inset-text-cinema">{cinema}</h2>
		<h2 className="inset-text-date">{formattedDate}</h2>
		</div>
 	</div>
  );
}

export default ImageSlide;