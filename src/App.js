import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Friends from './route/Friends';
import Chats from './route/Chats';
import Find from './route/Find';
import More from './route/More';
import Chat from './route/Chat';
import Profile from './route/Profile';
import Nav from './components/Navigation';


class App extends React.Component {

  render(){

    return (
       <div>
          <HashRouter>
            <Route path="/" exact={true} component={Friends} />
            <Route path="/chats" component={Chats} />
            <Route path="/find" component={Find} />
            <Route path="/more" component={More} />
            <Nav/>
            <Route path="/chat" component={Chat} />
            <Route path="/profile" component={Profile} />
          </HashRouter>
       </div>
    )
  }
}

export default App
