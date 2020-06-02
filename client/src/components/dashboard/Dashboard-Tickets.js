import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Ticket from '../ticket/Ticket';

const DashboardTickets = ({ user, loading }) => {

  return (
     loading && user === null ? <Spinner /> : 
        <Fragment>
        <div className="">
        <h1 className='large text-primary'>Welcome {user && user.name}</h1>

        </div>  
        
        {user.tickets.length === 0 ? 
          (
         <Fragment >  
         <h2>Your tickets</h2>
              <p>You haven't bought any tickets yet</p>
          <Link  to="/">
            <p className="films-link">Search films</p> 
          </Link>
          </Fragment>
          ) :
          (   
        <Fragment>
        <h2>Your tickets</h2>
        <div className="your-tickets">{user.tickets.map(item => (         
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