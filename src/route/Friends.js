import React from 'react';
import './Friends.css';
import {Link} from 'react-router-dom';

import imgA from '../images/empty.jpg';

function Friends() {
   return (
      <div classNameName="main">
         <header className="top">
   <div className="header_top">
      <div className="header_column">
         <i className="fas fa-plane"></i>
         <i className="fas fa-wifi"></i>
      </div>
      <div className="header_column">
         <span className="header_time">17:33</span>
      </div>
      <div className="header_column">
         <i className="far fa-moon"></i>
         <i className="fab fa-bluetooth-b"></i>
         <span className="header_battery">100% <i className="fas fa-battery-full"></i></span>
      </div>
   </div>
   <div className="header_bottom_f">
      <div>
         <span className="header_txt">Manage</span>
      </div>
      <div>
         <span className="header_txt">Friends<span className="friends_num">1</span></span>
      </div>
      <div>
         <i className="fas fa-cog"></i>
      </div>
   </div>
</header>
<main className="main_friends">
   <div className="search-bar_f">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Find friends, chats, Plus Friends" />
   </div>
   <section className="myProfile">
      <header>
         <h6>My Profile</h6>
      </header>
      <div>
         <Link to="/Profile">
         <img src={imgA} alt="user" />
         <a href="profile.html">My Name</a>
         </Link>
      </div>
      <div>
         <img src={imgA} alt="user" />
         <a href="#">Friends' Names Display</a>
      </div>
   </section>
   <section className="friends_list">
      <header>
         <h6>Friends</h6>
      </header>
      <div>
         <img src={imgA} alt="user" />
         <a href="#">Friend Name</a>
         <div><span className="talk">Have a good day. See you soon.</span></div>
      </div>
      <div>
         <img src={imgA} alt="user" />
         <a href="#">Friend Name</a>
         <div><span className="talk">Have a good day. See you soon.</span></div>
      </div>
      <div>
         <img src={imgA} alt="user" />
         <a href="#">Friend Name</a>
         <div><span className="talk">Have a good day. See you soon.</span></div>
      </div>
      <div>
         <img src={imgA} alt="user" />
         <a href="#">Friend Name</a>
         <div><span className="talk">Have a good day. See you soon.</span></div>
      </div>
   </section>
</main>
   </div>
   )
}

export default Friends
