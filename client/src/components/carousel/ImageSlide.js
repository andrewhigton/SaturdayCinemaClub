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

//this was previous self-built version 

// // filmCarousel.propTypes = {
// //   film: PropTypes.object.isRequired
// // };

// const mapStateToProps = state => ({
//   film: state.film
// });

// //export default connect(mapStateToProps)(filmCarousel);
// export default filmCarousel;

// const filmsArr = [
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZdheVy1gmxsH9S5N1_uCeEXx9_dphDAHdT0-wy4e9bs7YM3it&usqp=CAU',
// 'data:image/jpeg;base64,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',
// 'data:image/jpeg;base64,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'
// ];

// const Carousel = ({ 
//   film: { films } 
//   }) => {

//   const [ currentImageIndex, setImageIndex ] = useState([0]);  
//   const [active, setActive] = useState();

//   useEffect(() => {
//     const timer = setTimeout(nextSlide, 3000);
//     return () => clearTimeout(timer);
//   }, [nextSlide])

//   useEffect(() => {
//   setImageIndex(0);
//   }, [setImageIndex]);

//   function previousSlide () {
//     const lastIndex = filmsArr.length - 1;
//     // const lastIndex = films.length - 1;
//     const shouldResetIndex = currentImageIndex === 0;
//     const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
//     setImageIndex(index)  
//   }
  
//   function nextSlide () {
//     const lastIndex = filmsArr.length - 1;
//     // const lastIndex = films.length - 1;
//     const shouldResetIndex = currentImageIndex === lastIndex;
//     const index = shouldResetIndex ? 0 : currentImageIndex + 1;
//     setImageIndex(index)
//     }

  
//     return (  
//       films === null ? <Spinner /> : 
//       <>
//         <ImageSlide 
//         // carousel isn't getting films, so blocks reloading    
//         className={active ? 'fade image-slide' : 'image-slide'} 
//         url={ filmsArr[currentImageIndex] } 
//         // url={ filmsArr[currentImageIndex].image } 
//         title={ films[currentImageIndex].title }
//         cinema={ films[currentImageIndex].cinema }
//         date={ films[currentImageIndex].date }
//         />     
//         <div className="arrows">
//         <Arrow
//           direction="prev"
//           clickFunction={ previousSlide } 
//           glyph="&#9664;" 
//          />
//         <Arrow
//           direction="next"
//           clickFunction={ nextSlide }
//           glyph="&#9654;" 
//          />
//         </div>  

//       </> 
//     );
// }

//forget this

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