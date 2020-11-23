import React, { Component } from 'react';
import './Chat.css';
import {Link} from 'react-router-dom';
import ImgJSON from '../ImgJSON';

export default class Chat extends Component {
   render() {
      return (
         <>
   <header class="top_c">
      <div class="header_top_chat">
         <div class="header_column">
            <i class="fas fa-plane"></i>
            <i class="fas fa-wifi"></i>
         </div>
         <div class="header_column">
            <span class="header_time">17:33</span>
         </div>
         <div class="header_column">
            <i class="far fa-moon"></i>
            <i class="fab fa-bluetooth-b"></i>
            <span class="header_battery">100% <i class="fas fa-battery-full"></i></span>
         </div>
      </div>
      <div class="header_bottom">
         <div>
            <Link to="/Chats">
               <i class="fas fa-angle-left"></i>
            </Link>
         </div>
         <div>
            <span class="header_txt">Friend Name</span>
         </div>
         <div>
            <i class="fas fa-search"></i>
            <i class="fas fa-bars"></i>
         </div>
      </div>
   </header>
   <main className="main_c">
      <div class="date">
         <span class="date">Wednesday, April 12, 2018</span>
      </div>
      <div class="talk_y">
         <span>Hello!</span>
         <span>Hello! This is a test message. Hello!</span>
         <span>This is a test message.</span>
         <div class="timer">
            <span class="time">17:33</span>
         </div>
      </div>
      <div class="talk_l">
            <img src={ImgJSON[1].img} alt="" />
         <div class="talk_w">
            <span class="f_name">Friend Name</span>
            <span class="answer">And this is an answer</span>
            <span class="answer">And this is an answer And this is an answer</span>
            <span class="answer">And this is an answer</span>
            <div class="timer_l">
               <span class="time_l">20:37</span>
            </div>
         </div>
      </div>
   </main>
   <footer>
      <div>
         <i class="fas fa-plus"></i>
      </div>
      <div>
         <input type="text" />
         <i class="far fa-smile"></i>
      </div>
      <a href="#">
         <i class="fas fa-microphone"></i>
      </a>
   </footer>
   </>
      )
   }
}
