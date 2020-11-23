import React, { Component } from 'react';
import './Profile.css';
import ImgJSON from '../ImgJSON';

export default class Profile extends Component {
   render() {
      return (
         <div>
         <body>
   <header className="top_p">
      <div className="header_top_p">
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
      <div className="header_bottom_p">
         <div>
            <a href="index.html">
               <i className="fas fa-times"></i>
            </a>
         </div>
         <div>
            <i className="fas fa-user"></i>
         </div>
      </div>
   </header>
   <main className="main_p">
      <img src={ImgJSON[0].img} alt="" className="img_p"/>
      <header className="main_p_header">
         <h6>My Name</h6>
      </header>
      <input type="text" placeholder="UserId@gmail.com" />
      <div className="btn">
         <a href="#">
            <i className="fas fa-comment"></i>
            <span>My Chatroom</span>
         </a>
         <a href="#">
            <i className="fas fa-pencil-alt"></i>
            <span>Edit Profile</span>
         </a>
      </div>
   </main> 
</body>
         </div>
      )
   }
}
