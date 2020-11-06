import React from 'react';
import './Chats.css';

import ImgJSON from '../ImgJSON';
import axios from 'axios';

import User from '../components/User';


class Chats extends React.Component {

   state={
     users: [],
   }
 
   getUsers = async () => {
     const {data:users} = await axios.get('https://jsonplaceholder.typicode.com/users');
   //   const {data:img} = await axios.get('https://jsonplaceholder.typicode.com/photos');

   this.setState({users});
   }
 
   componentDidMount(){
     this.getUsers();
   }
 
   render(){
 
     const {users} = this.state;
 
     return (
      <div>
         <header className="top">
   <div className="header_top_c">
      <div className="header_column_c">
         <i className="fas fa-plane"></i>
         <i className="fas fa-wifi"></i>
      </div>
      <div className="header_column_c">
         <span className="header_time_c">17:33</span>
      </div>
      <div className="header_column_c">
         <i className="far fa-moon"></i>
         <i className="fab fa-bluetooth-b"></i>
         <span className="header_battery">100% <i className="fas fa-battery-full"></i></span>
      </div>
   </div>
   <div className="header_bottom_c">
      <div>
         <span className="header_txt">Edit</span>
      </div>
      <div>
         <span className="header_txt">Chats</span>
         <i className="fas fa-caret-down"></i>
      </div>
   </div>
</header>
<main className="friends_c">
   <div className="search-bar_c">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Find friends, chats, Plus Friends" />
   </div>
   <section className="friend-list">
   <div className="users">
          {users.map((user, idx) => (<User
          id={user.id}
          username={user.username}
          name={user.name}
          img = {ImgJSON[idx].img}
          />))}
        </div>
   </section>
   <div className="talk_btn">
      <a href="chat.html">
         <i className="fas fa-comment"></i>
      </a>
   </div>
</main>
      </div>
   )
}
}

export default Chats;
