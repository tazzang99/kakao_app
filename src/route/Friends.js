import React, {useState, useEffect} from 'react';
import './Friends.css';
import {Link} from 'react-router-dom';
import ImgJSON from '../ImgJSON';
import axios from 'axios';
import User from '../components/User';


function Friends() {

   const [users, setUsers] = useState([]);

   let getUser = async () => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users.data);
   }
   useEffect(async () => {
      await getUser();
   },[])

   if(users[0]){
   return (
      <div className="main">
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
         <img src={ImgJSON[0].img} alt={users[0].username} />
         <span>{users[0].username}</span>
         </Link>
      </div>
   </section>
   <section className="friends_list">
      <header>
         <h6>Friends</h6>
      </header>
      <div>
      {users.map((user, idx) => {
         if(idx!== 0){
         return(<User
          id={user.id}
          username={user.username}
          img = {ImgJSON[idx].img}
          name={user.name}
          />)}})}
      </div>
   </section>
</main>
   </div>

   )
         } else return null
}

export default Friends;
