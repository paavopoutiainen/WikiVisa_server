(this.webpackJsonpwikivisafront=this.webpackJsonpwikivisafront||[]).push([[0],{100:function(e,t){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),o=(a(67),a(24)),m=a(8),i=a(6),u=a(109),s=a(106),E=a(56),d=a(112),g=a(114),f=function(e){var t=e.title;return r.a.createElement("h1",{className:"text-center"},t)},b=function(e){var t=e.setScreen,a=e.setGamertag,n=e.gamertag;return document.title="Welcome!",r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(f,{title:"Give Gamertag"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a.Control,{size:"lg",className:"text-center",onChange:function(e){return a(e.target.value)},placeholder:"Provide gamertag"}))),r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(g.a,{block:!0,disabled:!n.length,variant:"success",onClick:function(){return t("JoinOrCreate")}},"Next"))),r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(g.a,{block:!0,variant:"link",onClick:function(){return t("JoinOrCreate")}},"Randomize name"))))))},p=a(9),h=function(e){var t=e.setScreen;return document.title="Format Game",r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(f,{title:"Join or Create a game"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{size:"lg",block:!0,variant:"primary",onClick:function(){return t("JoinGame")}},r.a.createElement(p.d,{size:20})," Join Game"))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{size:"lg",block:!0,variant:"success",onClick:function(){return t("CreateGame")}},r.a.createElement(p.g,{size:20})," Create Game")))))},v=a(113),w=a(107),C=function(e){var t=e.game,a=e.joinGame;return r.a.createElement(v.a.Item,null,r.a.createElement(s.a,null,r.a.createElement(E.a,{sm:"auto"},r.a.createElement(w.a,{pill:!0,variant:"primary"},t.currentPlayers,"/",t.maxPlayers)),r.a.createElement(E.a,null,t.roomCode),r.a.createElement(E.a,null,t.categories[0]),r.a.createElement(E.a,{sm:"auto"},r.a.createElement(g.a,{size:"sm",variant:"success",onClick:function(){return a(t.roomCode)}},"Join"))))},y=function(e){var t=e.getPublicGames,a=e.publicGames,l=e.joinGame;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement(v.a,null,a.map((function(e,t){return r.a.createElement(C,{key:t,game:e,joinGame:l})})))},j=a(111),G=function(e){var t=e.setModalVisibility,a=e.visibility,n=e.getPublicGames,l=e.publicGames,c=e.joinGame;return r.a.createElement(j.a,{className:"findGameModal",show:a,size:"md",centered:!0},r.a.createElement(j.a.Header,null,r.a.createElement(j.a.Title,null,"Find Game"),r.a.createElement(g.a,{size:"sm",className:"findGameModalRefreshBtn",onClick:function(){return n()},variant:"light"},r.a.createElement(p.a,{size:"18"})," Refresh List")),r.a.createElement(j.a.Body,null,r.a.createElement(y,{getPublicGames:n,publicGames:l,joinGame:c})),r.a.createElement(j.a.Footer,null,r.a.createElement(g.a,{onClick:function(){return t(!1)}},"Close")))},O=a(108),k=function(e){var t=e.setScreen,a=e.setRoomCode,l=e.roomCode,c=e.joiningState,o=e.joinGame,m=e.getPublicGames,u=e.publicGames,b=Object(n.useState)(!1),h=Object(i.a)(b,2),v=h[0],w=h[1];return r.a.createElement(s.a,null,r.a.createElement(G,{setModalVisibility:w,visibility:v,getPublicGames:m,publicGames:u,joinGame:o}),r.a.createElement(E.a,null,r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(f,{title:"Enter Room Code or Find Game"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Enter room code"),r.a.createElement(d.a.Control,{disabled:c,size:"lg",placeholder:"Provide room code",onChange:function(e){return a(e.target.value)}})))),r.a.createElement(s.a,null,r.a.createElement(E.a,{xs:{span:12,order:2},sm:{span:"auto",order:1}},r.a.createElement(g.a,{onClick:function(){return t("JoinOrCreate")},type:"button"},r.a.createElement(p.b,{size:20})," Return")),r.a.createElement(E.a,{xs:{span:12,order:1},sm:{order:2},md:!0,lg:!0},r.a.createElement(O.a,{style:{width:"100%"}},r.a.createElement(g.a,{variant:"secondary",onClick:function(){return w(!0)},type:"button"},r.a.createElement(p.f,{size:20})," Find Game"),r.a.createElement(g.a,{disabled:!l.length,onClick:function(){return o()},type:"button"},r.a.createElement(p.e,{size:20})," Join Room"))))))},S=function(e){var t=e.setScreen,a=e.setRoomCode,l=e.creatingState,c=e.createGame,o=Object(n.useState)({question:{categories:[],count:""},counters:{answer:"",roundEnd:""},visibility:!1,losePoints:!1}),u=Object(i.a)(o,2),b=u[0],h=u[1];return r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(s.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(f,{title:"Setup your personal game"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Enter room code"),r.a.createElement(d.a.Control,{disabled:l,size:"lg",placeholder:"Enter room code",onChange:function(e){return a(e.target.value)}}),r.a.createElement(d.a.Text,{className:"text-muted"},"You can specify a room code or leave it empty to let us generate it for you")))),r.a.createElement(s.a,null,r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Question categories"),r.a.createElement(d.a.Group,{controlId:"createGameForm.categorySelect",onChange:function(e){return function(e){for(var t=e.target.options,a=[],n=0;n<t.length;n++)t[n].selected&&a.push(t[n].value);h((function(e){return Object(m.a)({},e,{question:Object(m.a)({},e.question,{categories:a})})}))}(e)}},r.a.createElement(d.a.Control,{disabled:l,as:"select",multiple:!0},r.a.createElement("option",{value:"capital"},"Capital"),r.a.createElement("option",{value:"officialLanguage"},"Country Language"))),r.a.createElement(d.a.Text,{className:"text-muted"},"Select question categories for your game. Hold Ctrl if you want to select multiple categories!")),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Question count"),r.a.createElement(d.a.Control,{disabled:l,size:"lg",placeholder:"Default: 5 questions",onChange:function(e){return h(Object(m.a)({},b,{question:Object(m.a)({},b.question,{count:e.target.value})}))}}),r.a.createElement(d.a.Text,{className:"text-muted"},"How many questions do you want answer?"))),r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Answer time"),r.a.createElement(d.a.Control,{disabled:l,size:"lg",placeholder:"Default: 10 seconds",onChange:function(e){return h(Object(m.a)({},b,{counters:Object(m.a)({},b.counters,{answer:e.target.value})}))}}),r.a.createElement(d.a.Text,{className:"text-muted"},"This is the answering time for each question")),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Round end timer"),r.a.createElement(d.a.Control,{disabled:l,size:"lg",placeholder:"Default: 10 seconds",onChange:function(e){return h(Object(m.a)({},b,{counters:Object(m.a)({},b.counters,{roundEnd:e.target.value})}))}}),r.a.createElement(d.a.Text,{className:"text-muted"},"This is the timer for downtime between each question showing correct answers")),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Lose Points On Incorrect Answer"),r.a.createElement(d.a.Check,{type:"switch",id:"losePoints-switch",label:"Player will "+(b.losePoints?"":"not")+" lose points",checked:b.losePoints,onChange:function(e){return h(Object(m.a)({},b,{losePoints:!b.losePoints}))}})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Visibility"),r.a.createElement(d.a.Check,{type:"switch",id:"visibility-switch",label:"Game will be "+(b.visibility?"public":"private"),checked:b.visibility,onChange:function(e){return h(Object(m.a)({},b,{visibility:!b.visibility}))}})))),r.a.createElement(s.a,null,r.a.createElement(E.a,{xs:"auto"},r.a.createElement(g.a,{onClick:function(){return t("JoinOrCreate")},type:"button"},r.a.createElement(p.b,{size:20})," Return")),r.a.createElement(E.a,{className:"text-right"},r.a.createElement(g.a,{variant:l?"secondary":"success",onClick:function(){return c(b)},type:"button"},l?r.a.createElement(p.a,{size:20,className:"spin"}):r.a.createElement(p.c,{size:20}),l?" Creating game...":" Create & Join"))))))},N=function(e){var t=e.setGamertag,a=e.gamertag,l=e.setRoomCode,c=e.roomCode,o=e.joiningState,m=e.joinGame,d=e.createGame,g=e.creatingState,f=e.getPublicGames,p=e.publicGames,v=Object(n.useState)(""),w=Object(i.a)(v,2),C=w[0],y=w[1];return r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"justify-content-md-center"},r.a.createElement(E.a,{lg:"8"},function(){switch(C){case"JoinOrCreate":return r.a.createElement(h,{setScreen:y});case"JoinGame":return r.a.createElement(k,{setScreen:y,setRoomCode:l,roomCode:c,joiningState:o,joinGame:m,getPublicGames:f,publicGames:p});case"CreateGame":return r.a.createElement(S,{setScreen:y,setRoomCode:l,creatingState:g,createGame:d});default:return r.a.createElement(b,{setScreen:y,setGamertag:t,gamertag:a})}}())))},x=(a(17),function(e){return 0===e?r.a.createElement("div",{className:"timer"},"Too late..."):r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"text"},"Remaining"),r.a.createElement("div",{className:"value"},e),r.a.createElement("div",{className:"text"},"seconds"))}),P=a(19),z=function(e){var t=e.gamertag,a=e.thisPlayersTag;return r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"gamerTag"},a?r.a.createElement("b",null,t):t)))},q=function(e){var t=e.gamertag,a=e.players,n=e.timer,l=e.roomCode,c=e.startGame,o=e.started,m=e.isCreator,i="";return document.title=o?"Game Is Starting!":"Game Lobby",a.length&&(i=a.map((function(e){return r.a.createElement(z,{key:e.id,gamertag:e.gamertag,thisPlayersTag:t===e.gamertag})}))),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(f,{title:"Room ".concat(l)}))),m&&!o?r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"success",onClick:function(){c()}},"Start game"))):null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement("h4",null,"Players in the game room"))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,i))),o?r.a.createElement(E.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(P.CountdownCircleTimer,{isPlaying:!0,durationSeconds:parseInt(n),colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],renderTime:x})))):null))},R=a(115),T=function(e){var t=e.question;return r.a.createElement("h1",{className:"text-center"},t)},A=function(e){var t=e.setAnswer,a=e.choice,n=e.value,l="choice-".concat(n);return r.a.createElement(E.a,{className:"radioButton"},r.a.createElement("input",{onChange:function(){return t({value:n,name:a})},id:l,type:"radio",name:"choices",value:n}),r.a.createElement("label",{htmlFor:l},a))},L=function(e){var t=e.setAnswer,a=e.choices,n=e.disabled;return r.a.createElement(s.a,{className:n?"rowDisabled":""},a.map((function(e,a){return r.a.createElement(A,{disabled:n,setAnswer:t,choice:e,key:a,value:a})})))},J=function(e){var t=e.setAnswer,a=e.timer,l=e.question,c=e.players,o=e.setReady,m=Object(n.useState)(0),d=Object(i.a)(m,2),f=d[0],b=d[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),v=h[0],w=h[1];return document.title=l.title.toString(),Object(n.useEffect)((function(){var e=c.filter((function(e){return!0===e.ready})).length;b(e)}),[c]),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(P.CountdownCircleTimer,{isPlaying:!0,durationSeconds:parseInt(a),colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],renderTime:x}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(T,{question:l.title}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(L,{disabled:v,setAnswer:t,choices:l.choices}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"success",size:"lg",onClick:function(){return o(),void w(!0)},block:!0},"Ready"))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement("h4",{className:"text-center"},"".concat(f," / ").concat(c.length," have answered")))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(R.a,{animated:!0,now:parseInt(f),max:parseInt(c.length),min:0}))))))},I=a(110),B=(a(38),function(e){var t=e.gamertag,a=e.answers,n=e.correctAnswer,l="";return a&&(l=Object.keys(a).map((function(e,l){return r.a.createElement("tr",{key:l,className:a[e].value===n.value?"correct":"wrong"},r.a.createElement("td",null,l+1),r.a.createElement("td",null,t===e?r.a.createElement("b",null,e):e),r.a.createElement("td",null,a[e].name))}))),r.a.createElement(I.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Gamertag"),r.a.createElement("th",null,"Answered"))),r.a.createElement("tbody",null,l))}),F=function(e){var t=e.correctAnswer,a=e.gamertag,n=e.answers,l=e.timer;return document.title="Correct Answers",r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(f,{title:"Round Statistics"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,{className:"text-center"},t.value===n[a].value?r.a.createElement("p",null,"Your answer was ",r.a.createElement("span",{className:"green"},"correct")):r.a.createElement("p",null,"Your answer ",r.a.createElement("span",{className:"bold"},n[a].name)," was ",r.a.createElement("span",{className:"red"},"incorrect")))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",{className:"text-center"},t.answerTitle," ",r.a.createElement(w.a,{variant:"success"},t.name)))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(B,{correctAnswer:t,gamertag:a,answers:n}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(s.a,null,r.a.createElement(P.CountdownCircleTimer,{isPlaying:!0,durationSeconds:parseInt(l),colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],renderTime:x})))))},W=function(e){var t=e.players,a=e.gamertag,n="";return t&&(n=t.sort((function(e,t){return t.points-e.points})).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,a===e.gamertag?r.a.createElement("b",null,e.gamertag):e.gamertag),r.a.createElement("td",null,e.points," ",0===t?r.a.createElement(p.h,{color:"#00cc66",size:30}):"you suck"))}))),r.a.createElement(I.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Points"))),r.a.createElement("tbody",null,n))},H=function(e){var t=e.gamertag,a=e.players,n=a.reduce((function(e,t){return e.points>t.points?e:t}));return document.title=t===n.gamertag?"Congratulations!":"Better Luck Next Time!",r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(f,{title:"End Stats"}))),r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(W,{gamertag:t,players:a}))),r.a.createElement(s.a,null,r.a.createElement(E.a,{className:"text-center"},r.a.createElement(O.a,{className:"buttons",size:"lg"},r.a.createElement(g.a,{href:"/",variant:"outline-dark"},"Return to FrontPage"),r.a.createElement(g.a,{variant:"success"},"Play Again")))))},M=function(e){var t=e.title;return r.a.createElement("header",{className:"text-center"},r.a.createElement("small",null,t))},D=a(60),_=a.n(D),V=(a(103),_()("https://wikivisa.herokuapp.com"));var Y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=(t[1],Object(n.useState)({})),c=Object(i.a)(l,2),s=c[0],E=c[1],d=Object(n.useState)([]),g=Object(i.a)(d,2),f=g[0],b=g[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),v=h[0],w=h[1],C=Object(n.useState)(""),y=Object(i.a)(C,2),j=y[0],G=y[1],O=Object(n.useState)(""),k=Object(i.a)(O,2),S=k[0],x=k[1],P=Object(n.useState)({}),z=Object(i.a)(P,2),R=z[0],T=z[1],A=Object(n.useState)(!1),L=Object(i.a)(A,2),I=L[0],B=L[1],W=Object(n.useState)(!1),D=Object(i.a)(W,2),_=D[0],Y=D[1];function Q(){var e=document.getElementById("wrapper"),t=document.getElementById("root"),a=e.offsetWidth,n=e.offsetHeight,r=Math.max(document.documentElement.clientWidth,window.innerWidth||0),l=Math.max(document.documentElement.clientHeight,window.innerHeight||0);a>r||n>l?t.classList.remove("centerizedWrapper"):t.classList.add("centerizedWrapper")}function U(){V.emit("get public games")}function $(){var e={};return s.players.forEach((function(t){var a=!1;t.answers.forEach((function(n){n.question_id===s.question.id&&(e[t.gamertag]=n.answer,a=!0)})),a||(e[t.gamertag]={name:"No answer for this round"})})),e}function K(e){B(!0),V.emit("join game",{gamertag:v,roomCode:e})}function X(e){Y(!0),V.emit("create game",{gamertag:v,roomCode:j,gameProperties:e})}function Z(){V.emit("set ready",{game_id:s.id,gamertag:v,answer:S,question_id:s.question.id})}function ee(){V.emit("start game",{game_id:s.id})}return window.onresize=function(){return Q()},window.onload=function(){return Q()},Object(n.useEffect)((function(){V.on("send players",(function(e){E((function(t){return Object(m.a)({},t,{players:e})}))})),V.on("send game",(function(e){E(e)})),V.on("send timer",(function(e){var t=Object.keys(e)[0];E((function(a){return Object(m.a)({},a,Object(o.a)({},t,e[t]))}))})),V.on("update game view",(function(e){E((function(t){return Object(m.a)({},t,{view:e})}))})),V.on("send gamertag",(function(e){w(e)})),V.on("reset timers",(function(e){E((function(t){return Object(m.a)({},t,{questionCounter:e.questionCounter,roundEndCounter:e.roundEndCounter})}))})),V.on("get correct answer",(function(e){T(e)})),V.on("gamertag taken",(function(e){w(e),B(!1),window.alert("Gamertag '".concat(e," is already taken!'"))})),V.on("error while joining",(function(e){B(!1),window.alert(e)})),V.on("send question",(function(e){E((function(t){return Object(m.a)({},t,{question:e})}))})),V.on("game started",(function(){E((function(e){return Object(m.a)({},e,{started:!0})}))})),V.on("send public games",(function(e){b(e)}))}),[]),r.a.createElement(u.a,{id:"wrapper",fluid:!0},r.a.createElement(M,{title:a}),function(){switch(s.view){case 1:return r.a.createElement(q,{players:s.players,gamertag:v,timer:s.startGameCounter,roomCode:s.roomCode,startGame:ee,started:s.started,isCreator:s.creator});case 2:return r.a.createElement(J,{players:s.players,gamertag:v,timer:s.questionCounter,question:s.question,setAnswer:x,setReady:Z});case 3:return r.a.createElement(F,{answers:$(),gamertag:v,timer:s.roundEndCounter,correctAnswer:R});case 4:return r.a.createElement(H,{players:s.players,gamertag:v});default:return r.a.createElement(N,{setRoomCode:G,setGamertag:w,gamertag:v,roomCode:j,joiningState:I,joinGame:K,createGame:X,creatingState:_,getPublicGames:U,publicGames:f})}}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},17:function(e,t,a){},62:function(e,t,a){e.exports=a(104)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.03998881.chunk.js.map