import React from 'react';
const moment = require('moment');

const ImageSlide = ({ url, title, cinema, date, className }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 0.6s linear',
    // animation: 'slideshow 1s linear infinite'
  };

  const time = moment(date)
  const formattedDate = time.format('MMMM Do YYYY, h:mm a');

  return (
    <div 
    className={className} 
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