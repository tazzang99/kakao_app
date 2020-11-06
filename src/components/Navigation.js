import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {
   return (
      <div>
      <nav className="tab-bar">
      <div className="tab-inner">
         <NavLink to="/" exact activeClassName="active">
         <i className="fas fa-user"></i>
         <span>Friends</span>
         </NavLink>
         <NavLink to="/chats" activeClassName="active">
            <i className="fas fa-comment"></i>
            <span>Chats</span>
         </NavLink>
         <NavLink to="/find" activeClassName="active">
            <i className="fas fa-search"></i>
            <span>Find</span>
         </NavLink>
         <NavLink to="/more" activeClassName="active">
            <i className="fas fa-ellipsis-h"></i>
            <span>More</span>
         </NavLink>   

         </div>
      </nav>
      </div>
   )
}

export default Navigation


{/* <Link to="/">
   <i className="fas fa-user"></i>
   <span>Friends</span>
</Link>
<Link to="/chats">
   <i className="fas fa-comment"></i>
   <span>Chats</span>
</Link>
<Link to="/find">
   <i className="fas fa-search"></i>
   <span>Find</span>
</Link>
<Link to="/more">
   <i className="fas fa-ellipsis-h"></i>
   <span>More</span>
</Link> */}
