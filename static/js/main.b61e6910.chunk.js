(this.webpackJsonpkakao=this.webpackJsonpkakao||[]).push([[0],{40:function(e,s,c){},41:function(e,s,c){},43:function(e,s,c){},61:function(e,s,c){},67:function(e,s,c){},68:function(e,s,c){},69:function(e,s,c){},70:function(e,s,c){},71:function(e,s,c){},72:function(e,s,c){},73:function(e,s,c){"use strict";c.r(s);var a=c(0),t=c(1),i=c.n(t),n=c(32),j=c.n(n),l=(c(40),c(10)),r=c(11),d=c(13),b=c(12),m=(c(41),c(4)),h=c(2),x=c(14),O=c.n(x),o=c(17),f=c(34),p=(c(43),c(9)),u=c(18),N=c.n(u);c(61);var v=function(e){e.id;var s=e.name,c=e.username,t=e.img;return Object(a.jsx)("div",{children:Object(a.jsx)("section",{className:"friend-list-u",children:Object(a.jsx)("div",{children:Object(a.jsxs)(m.b,{to:"/Chat",children:[Object(a.jsx)("img",{src:t,alt:c}),Object(a.jsxs)("div",{className:"userData",children:[Object(a.jsx)("span",{className:"name_u",children:c}),Object(a.jsx)("span",{className:"talk_u",children:s})]}),Object(a.jsx)("span",{className:"time_u",children:"17:33"})]})})})})};var _=function(){var e=Object(t.useState)([]),s=Object(f.a)(e,2),c=s[0],i=s[1],n=function(){var e=Object(o.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:s=e.sent,i(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)(Object(o.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)}))),[]),c[0]?Object(a.jsxs)("div",{className:"main",children:[Object(a.jsxs)("header",{className:"top",children:[Object(a.jsxs)("div",{className:"header_top",children:[Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"fas fa-plane"}),Object(a.jsx)("i",{className:"fas fa-wifi"})]}),Object(a.jsx)("div",{className:"header_column",children:Object(a.jsx)("span",{className:"header_time",children:"17:33"})}),Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("i",{className:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{className:"header_battery",children:["100% ",Object(a.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(a.jsxs)("div",{className:"header_bottom_f",children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"header_txt",children:"Manage"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("span",{className:"header_txt",children:["Friends",Object(a.jsx)("span",{className:"friends_num",children:"1"})]})}),Object(a.jsx)("div",{children:Object(a.jsx)("i",{className:"fas fa-cog"})})]})]}),Object(a.jsxs)("main",{className:"main_friends",children:[Object(a.jsxs)("div",{className:"search-bar_f",children:[Object(a.jsx)("i",{className:"fas fa-search"}),Object(a.jsx)("input",{type:"text",placeholder:"Find friends, chats, Plus Friends"})]}),Object(a.jsxs)("section",{className:"myProfile",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h6",{children:"My Profile"})}),Object(a.jsx)("div",{children:Object(a.jsxs)(m.b,{to:"/Profile",children:[Object(a.jsx)("img",{src:p[0].img,alt:c[0].username}),Object(a.jsx)("span",{children:c[0].username})]})})]}),Object(a.jsxs)("section",{className:"friends_list",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h6",{children:"Friends"})}),Object(a.jsx)("div",{children:c.map((function(e,s){if(0!==s)return Object(a.jsx)(v,{id:e.id,username:e.username,img:p[s].img,name:e.name})}))})]})]})]}):null},g=(c(67),function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).state={users:[]},e.getUsers=Object(o.a)(O.a.mark((function s(){var c,a;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:c=s.sent,a=c.data,e.setState({users:a});case 5:case"end":return s.stop()}}),s)}))),e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this.state.users;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{className:"top",children:[Object(a.jsxs)("div",{className:"header_top_c",children:[Object(a.jsxs)("div",{className:"header_column_c",children:[Object(a.jsx)("i",{className:"fas fa-plane"}),Object(a.jsx)("i",{className:"fas fa-wifi"})]}),Object(a.jsx)("div",{className:"header_column_c",children:Object(a.jsx)("span",{className:"header_time_c",children:"17:33"})}),Object(a.jsxs)("div",{className:"header_column_c",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("i",{className:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{className:"header_battery",children:["100% ",Object(a.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(a.jsxs)("div",{className:"header_bottom_c",children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"header_txt",children:"Edit"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"header_txt",children:"Chats"}),Object(a.jsx)("i",{className:"fas fa-caret-down"})]})]})]}),Object(a.jsxs)("main",{className:"friends_c",children:[Object(a.jsxs)("div",{className:"search-bar_c",children:[Object(a.jsx)("i",{className:"fas fa-search"}),Object(a.jsx)("input",{type:"text",placeholder:"Find friends, chats, Plus Friends"})]}),Object(a.jsx)("section",{className:"friend-list",children:Object(a.jsx)("div",{className:"users",children:e.map((function(e,s){return Object(a.jsx)(v,{id:e.id,username:e.username,name:e.name,img:p[s+1].img})}))})}),Object(a.jsx)("div",{className:"talk_btn",children:Object(a.jsx)("a",{href:"chat.html",children:Object(a.jsx)("i",{className:"fas fa-comment"})})})]})]})}}]),c}(i.a.Component));c(68);var y=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{className:"top",children:[Object(a.jsxs)("div",{className:"header_top",children:[Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"fas fa-plane"}),Object(a.jsx)("i",{className:"fas fa-wifi"})]}),Object(a.jsx)("div",{className:"header_column",children:Object(a.jsx)("span",{className:"header_time",children:"17:33"})}),Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("i",{className:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{className:"header_battery",children:["100% ",Object(a.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(a.jsxs)("div",{className:"header_bottom",children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"header_txt",children:"Edit"})}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"header_txt",children:"Find"})})]})]}),Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fas fa-address-book"}),Object(a.jsx)("span",{children:"Find"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fas fa-qrcode"}),Object(a.jsx)("span",{children:"QR Code"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fas fa-mobile-alt"}),Object(a.jsx)("span",{children:"Shake"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"far fa-envelope"}),Object(a.jsx)("span",{children:"Invite via SMS"})]})]})}),Object(a.jsxs)("main",{className:"find_main",children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:"Recommended Friends"})}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:"You have no Recommended friends."})})]})]})},k=(c(69),c.p+"static/media/kakaofriends.84375bb9.png"),w=c.p+"static/media/kakaostory.572f3ce5.png",F=c.p+"static/media/path.7d00edf7.png";var C=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{className:"top_m",children:[Object(a.jsxs)("div",{className:"header_top_m",children:[Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"fas fa-plane"}),Object(a.jsx)("i",{className:"fas fa-wifi"})]}),Object(a.jsx)("div",{className:"header_column",children:Object(a.jsx)("span",{className:"header_time",children:"17:33"})}),Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("i",{className:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{className:"header_battery",children:["100% ",Object(a.jsx)("i",{className:"fas fa-battery-three-quarters"})]})]})]}),Object(a.jsxs)("div",{className:"header_bottom_m",children:[Object(a.jsx)("span",{children:"More"}),Object(a.jsx)("div",{children:Object(a.jsx)("i",{className:"fas fa-cog"})})]})]}),Object(a.jsxs)("main",{className:"main_m",children:[Object(a.jsxs)("section",{className:"myName",children:[Object(a.jsx)("img",{src:p[0].img,alt:""}),Object(a.jsxs)("div",{className:"name-txt",children:[Object(a.jsx)("span",{children:"My Name"}),Object(a.jsx)("span",{children:"UserId@gmail.com"})]}),Object(a.jsx)("div",{className:"comment",children:Object(a.jsx)("i",{className:"far fa-comment"})})]}),Object(a.jsxs)("section",{className:"emoticons",children:[Object(a.jsxs)("div",{className:"emo",children:[Object(a.jsx)("i",{className:"far fa-smile"}),Object(a.jsx)("span",{children:"Emoticons"})]}),Object(a.jsxs)("div",{className:"emo",children:[Object(a.jsx)("i",{className:"fas fa-paint-brush"}),Object(a.jsx)("span",{children:"Themes"})]}),Object(a.jsxs)("div",{className:"emo",children:[Object(a.jsx)("i",{className:"far fa-hand-peace"}),Object(a.jsx)("span",{children:"Plus Friend"})]}),Object(a.jsxs)("div",{className:"emo",children:[Object(a.jsx)("i",{className:"fas fa-user-circle"}),Object(a.jsx)("span",{children:"Account"})]})]}),Object(a.jsxs)("section",{className:"plus",children:[Object(a.jsxs)("header",{className:"plus_h",children:[Object(a.jsx)("h6",{children:"Plus Friends"}),Object(a.jsxs)("div",{className:"learn",children:[Object(a.jsx)("i",{className:"fas fa-info-circle"}),Object(a.jsx)("span",{children:"Learn More"})]})]}),Object(a.jsxs)("div",{className:"menu_more",children:[Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-utensils"}),Object(a.jsx)("span",{children:"Order"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-home"}),Object(a.jsx)("span",{children:"Store"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-tv"}),Object(a.jsx)("span",{children:"TV Channel/Radio"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-pencil-alt"}),Object(a.jsx)("span",{children:"Creation"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-graduation-cap"}),Object(a.jsx)("span",{children:"Education"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-landmark"}),Object(a.jsx)("span",{children:"Politics/Society"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-won-sign"}),Object(a.jsx)("span",{children:"Finance"})]}),Object(a.jsxs)("div",{className:"menu_icon",children:[Object(a.jsx)("i",{className:"fas fa-video"}),Object(a.jsx)("span",{children:"Movie/Music"})]})]})]}),Object(a.jsxs)("section",{className:"family",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:k,alt:""}),Object(a.jsx)("span",{children:"Kakao Story"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:F,alt:""}),Object(a.jsx)("span",{children:"Path"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:w,alt:""}),Object(a.jsx)("span",{children:"Kakao friends"})]})]})]})]})},M=(c(70),function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{class:"top_c",children:[Object(a.jsxs)("div",{class:"header_top_chat",children:[Object(a.jsxs)("div",{class:"header_column",children:[Object(a.jsx)("i",{class:"fas fa-plane"}),Object(a.jsx)("i",{class:"fas fa-wifi"})]}),Object(a.jsx)("div",{class:"header_column",children:Object(a.jsx)("span",{class:"header_time",children:"17:33"})}),Object(a.jsxs)("div",{class:"header_column",children:[Object(a.jsx)("i",{class:"far fa-moon"}),Object(a.jsx)("i",{class:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{class:"header_battery",children:["100% ",Object(a.jsx)("i",{class:"fas fa-battery-full"})]})]})]}),Object(a.jsxs)("div",{class:"header_bottom",children:[Object(a.jsx)("div",{children:Object(a.jsx)(m.b,{to:"/Chats",children:Object(a.jsx)("i",{class:"fas fa-angle-left"})})}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{class:"header_txt",children:"Friend Name"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{class:"fas fa-search"}),Object(a.jsx)("i",{class:"fas fa-bars"})]})]})]}),Object(a.jsxs)("main",{className:"main_c",children:[Object(a.jsx)("div",{class:"date",children:Object(a.jsx)("span",{class:"date",children:"Wednesday, April 12, 2018"})}),Object(a.jsxs)("div",{class:"talk_y",children:[Object(a.jsx)("span",{children:"Hello!"}),Object(a.jsx)("span",{children:"Hello! This is a test message. Hello!"}),Object(a.jsx)("span",{children:"This is a test message."}),Object(a.jsx)("div",{class:"timer",children:Object(a.jsx)("span",{class:"time",children:"17:33"})})]}),Object(a.jsxs)("div",{class:"talk_l",children:[Object(a.jsx)("img",{src:p[1].img,alt:""}),Object(a.jsxs)("div",{class:"talk_w",children:[Object(a.jsx)("span",{class:"f_name",children:"Friend Name"}),Object(a.jsx)("span",{class:"answer",children:"And this is an answer"}),Object(a.jsx)("span",{class:"answer",children:"And this is an answer And this is an answer"}),Object(a.jsx)("span",{class:"answer",children:"And this is an answer"}),Object(a.jsx)("div",{class:"timer_l",children:Object(a.jsx)("span",{class:"time_l",children:"20:37"})})]})]})]}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("i",{class:"fas fa-plus"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text"}),Object(a.jsx)("i",{class:"far fa-smile"})]}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{class:"fas fa-microphone"})})]})]})}}]),c}(t.Component)),P=(c(71),function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("body",{children:[Object(a.jsxs)("header",{className:"top_p",children:[Object(a.jsxs)("div",{className:"header_top_p",children:[Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"fas fa-plane"}),Object(a.jsx)("i",{className:"fas fa-wifi"})]}),Object(a.jsx)("div",{className:"header_column",children:Object(a.jsx)("span",{className:"header_time",children:"17:33"})}),Object(a.jsxs)("div",{className:"header_column",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("i",{className:"fab fa-bluetooth-b"}),Object(a.jsxs)("span",{className:"header_battery",children:["100% ",Object(a.jsx)("i",{className:"fas fa-battery-three-quarters"})]})]})]}),Object(a.jsx)("div",{className:"header_bottom_p",children:Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"index.html",children:Object(a.jsx)("i",{className:"fas fa-times"})})})})]}),Object(a.jsxs)("main",{className:"main_p",children:[Object(a.jsx)("img",{src:p[0].img,alt:"",className:"img_p"}),Object(a.jsx)("header",{className:"main_p_header",children:Object(a.jsx)("h6",{children:"My Name"})}),Object(a.jsx)("input",{type:"text",placeholder:"UserId@gmail.com"}),Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsxs)("a",{href:"#",children:[Object(a.jsx)("i",{className:"fas fa-comment"}),Object(a.jsx)("span",{children:"My Chatroom"})]}),Object(a.jsxs)("a",{href:"#",children:[Object(a.jsx)("i",{className:"fas fa-pencil-alt"}),Object(a.jsx)("span",{children:"Edit Profile"})]})]})]})]})})}}]),c}(t.Component));c(72);var S=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"tab-bar",children:Object(a.jsxs)("div",{className:"tab-inner",children:[Object(a.jsxs)(m.c,{to:"/",exact:!0,activeClassName:"active",children:[Object(a.jsx)("i",{className:"fas fa-user"}),Object(a.jsx)("span",{children:"Friends"})]}),Object(a.jsxs)(m.c,{to:"/chats",activeClassName:"active",children:[Object(a.jsx)("i",{className:"fas fa-comment"}),Object(a.jsx)("span",{children:"Chats"})]}),Object(a.jsxs)(m.c,{to:"/find",activeClassName:"active",children:[Object(a.jsx)("i",{className:"fas fa-search"}),Object(a.jsx)("span",{children:"Find"})]}),Object(a.jsxs)(m.c,{to:"/more",activeClassName:"active",children:[Object(a.jsx)("i",{className:"fas fa-ellipsis-h"}),Object(a.jsx)("span",{children:"More"})]})]})})})},A=function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(h.a,{path:"/",exact:!0,component:_}),Object(a.jsx)(h.a,{path:"/chats",component:g}),Object(a.jsx)(h.a,{path:"/find",component:y}),Object(a.jsx)(h.a,{path:"/more",component:C}),Object(a.jsx)(S,{}),Object(a.jsx)(h.a,{path:"/chat",component:M}),Object(a.jsx)(h.a,{path:"/profile",component:P})]})})}}]),c}(i.a.Component),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,i=s.getLCP,n=s.getTTFB;c(e),a(e),t(e),i(e),n(e)}))};j.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),E()},9:function(e){e.exports=JSON.parse('[{"id":"1","img":"https://i.pinimg.com/236x/09/e8/62/09e8622b89a8267f307bb545c8dacd97.jpg"},{"id":"2","img":"https://i.pinimg.com/236x/a2/26/df/a226dfe2f0ce35acc6516912b3d999ef.jpg"},{"id":"3","img":"https://i.pinimg.com/236x/d7/d3/71/d7d371629f653711d0a477e6a523569e.jpg"},{"id":"4","img":"https://i.pinimg.com/236x/3e/2a/34/3e2a34f230fe1f36fe432f5719d6e693.jpg"},{"id":"5","img":"https://i.pinimg.com/236x/c1/2a/11/c12a11327c99110a1a95950a7badc1c7.jpg"},{"id":"6","img":"https://i.pinimg.com/236x/30/b9/94/30b99429eb34b16de9806c8bc04a58b9.jpg"},{"id":"7","img":"https://i.pinimg.com/236x/a4/cc/2a/a4cc2ae1f6aad5d6f401385a40b54069.jpg"},{"id":"8","img":"https://i.pinimg.com/236x/ff/f6/61/fff661a65e56c61f2cd250680ba76d15.jpg"},{"id":"9","img":"https://i.pinimg.com/236x/2d/43/b6/2d43b613414d522ee3f7049c55d78f7d.jpg"},{"id":"10","img":"https://i.pinimg.com/236x/39/a8/18/39a818fe7ddf1156edf5b5ea513bcb46.jpg"},{"id":"11","img":"https://i.pinimg.com/236x/d4/11/0c/d4110c63a9d6a95244e84d3d83978bf4.jpg"},{"id":"12","img":"https://i.pinimg.com/236x/31/2a/1d/312a1da10ceeb1c06a0339123b8e31dd.jpg"},{"id":"13","img":"https://i.pinimg.com/236x/9e/00/af/9e00afc5cb6eba4060697839560298a6.jpg"},{"id":"14","img":"https://i.pinimg.com/236x/17/b7/6f/17b76fd56499ed0508a87504bd7f47ad.jpg"},{"id":"15","img":"https://i.pinimg.com/236x/85/bd/52/85bd5275df7beae2cc330507a66cb243.jpg"},{"id":"16","img":"https://i.pinimg.com/736x/9c/96/c6/9c96c6727d260eb95f50e38863977279.jpg"},{"id":"17","img":"https://i.pinimg.com/236x/5b/54/99/5b5499de00caedd68541cc5f50266e21.jpg"}]')}},[[73,1,2]]]);
//# sourceMappingURL=main.b61e6910.chunk.js.map