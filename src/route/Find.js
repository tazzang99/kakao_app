import React from 'react';
import {Link} from 'react-router-dom';
import './Find.css';

function Find() {
   return (
      <div>
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
      <div className="header_bottom">
         <div>
            <span className="header_txt">Edit</span>
         </div>
         <div>
            <span className="header_txt">Find</span>
         </div>
      </div>
   </header>
   <section>
      <div className="menu">
         <div>
            <i className="fas fa-address-book"></i>
            <span>Find</span>
         </div>
         <div>
            <i className="fas fa-qrcode"></i>
            <span>QR Code</span>
         </div>
         <div>
            <i className="fas fa-mobile-alt"></i>
            <span>Shake</span>
         </div>
         <div>
            <i className="far fa-envelope"></i>
            <span>Invite via SMS</span>
         </div>
      </div>
   </section>
   <main className="find_main">
      <div>
         <span>Recommended Friends</span>
      </div>
      <div>
         <span>You have no Recommended friends.</span>
      </div>
   </main>
   </div>
   )
}

export default Find
