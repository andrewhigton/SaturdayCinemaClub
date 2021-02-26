import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Film from '../films/Film';
import '../../App.css';
import './Dashboard.css';

const DashboardFilms = ({ films, user, loading }) => {

  return (
     loading && films === null ? <Spinner /> : 
        <Fragment>
        <div className='your-films'>
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
        </Fragment>
    )
  }  

export default DashboardFilms;