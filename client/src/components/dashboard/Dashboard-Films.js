import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Film from '../films/Film';

const DashboardFilms = ({ films, user, loading }) => {
  // console.log(films)
  // console.log(loading)
  return (
     loading && films === null ? <Spinner /> : 
          
        <Fragment>
        
        <h2 className="your-film-header">Your films</h2>
        <div className="your-films">
        {films.map(item => (
             item.user === user._id ?  
             <div 
             
             key={item._id}>
             <Film
               film={item}
             />
             </div> : null
             ))}
        </div>
         <Fragment>
              <Link to='/create-film' className='btn'>
                    Click to create a movie showing
              </Link>
  
        </Fragment>
        
        </Fragment>

    )
  }  

export default DashboardFilms;