import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Ticket from '../ticket/Ticket';
import '../../App.css';
import './Dashboard.css'; 

const DashboardTickets = ({ user, loading }) => {

  return (
     loading && user === null ? <Spinner /> : 
        <Fragment>
        {user.tickets.length === 0 ? 
          (
         <Fragment >  
              <p className='films-link'>You haven't bought any tickets yet</p>
          <Link  to="/">
            <p className="films-link">Search films</p> 
          </Link>
      
          </Fragment>
          ) :
          (   
        <Fragment>
        
    
        <div className='your-tickets'>
        {user.tickets.map(item => (         
             <div 
             className="singleTicket"
             key={item._id}>
             <Ticket
               ticket={item}
             />
             </div> 
        ))}
        </div> 
      
        </Fragment>
         ) 
       }    
      </Fragment>
    )

  }  

export default DashboardTickets;

  // <div className='welcome-message'>
  //         <h2 className='tickets-films-head'>Your tickets</h2>
  //       </div>
