import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import {Link} from 'react-router-dom';

function Users({id,name,username,img}) {
   return (
      <div>
      <section className="friend-list-u">
      <div>
         <Link to="/Chat">
            <img src={img} alt={username} />
            <div className="userData">
               <span className="name_u">{username}</span>
               <span className="talk_u">{name}</span>
            </div>
            <span className="time_u">17:33</span>
         </Link>
      </div>
   </section>
      </div>
   )
   
}

Users.propTypes = {
   id:PropTypes.number.isRequired,
   name:PropTypes.string.isRequired,
   username:PropTypes.string.isRequired,
};

export default Users;
