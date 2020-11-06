import React from 'react';
import {Link} from 'react-router-dom';
import './More.css';


function More() {
   return (
      <div>
          <header className="top_m">
      <div className="header_top_m">
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
            <span className="header_battery">100% <i className="fas fa-battery-three-quarters"></i></span>
         </div>
      </div>
      <div className="header_bottom_m">
         <span>More</span>
         <div>
            <i className="fas fa-cog"></i>
         </div>
      </div>
   </header>
   <main className="main_m">
      <section className="myName">
         <img src="images/empty.jpg" alt="" />
         <div className="name-txt">
            <span>My Name</span>
            <span>UserId@gmail.com</span>
         </div>
         <div className="comment">
            <i className="far fa-comment"></i>
         </div>
      </section>
      <section className="emoticons">
         <div className="emo">
            <i className="far fa-smile"></i>
            <span>Emoticons</span>
         </div>
         <div className="emo">
            <i className="fas fa-paint-brush"></i>
            <span>Themes</span>
         </div>
         <div className="emo">
            <i className="far fa-hand-peace"></i>
            <span>Plus Friend</span>             
         </div>
         <div className="emo">
            <i className="fas fa-user-circle"></i>
            <span>Account</span>
         </div>
      </section>
      <section className="plus">
         <header className="plus_h">
            <h6>Plus Friends</h6>
            <div className="learn">
               <i className="fas fa-info-circle"></i>
               <span>Learn More</span>
            </div>
         </header>
         <div className="menu_more">
            <div className="menu_icon">
               <i className="fas fa-utensils"></i>
               <span>Order</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-home"></i>
               <span>Store</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-tv"></i>
               <span>TV Channel/Radio</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-pencil-alt"></i>
               <span>Creation</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-graduation-cap"></i>
               <span>Education</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-landmark"></i>
               <span>Politics/Society</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-won-sign"></i>
               <span>Finance</span>
            </div>
            <div className="menu_icon">
               <i className="fas fa-video"></i>
               <span>Movie/Music</span>
            </div>
         </div>
      </section>
      <section className="family">
         <div>
            <img src="images/kakaostory.png" alt="" />
            <span>Kakao Story</span>
         </div>
         <div>
            <img src="images/path.png" alt="" />
            <span>Path</span>
         </div>
         <div>
            <img src="images/kakaofriends.png" alt="" />
            <span>Kakao friends</span>
         </div>
      </section>
   </main>
   </div>
   )
}

export default More
