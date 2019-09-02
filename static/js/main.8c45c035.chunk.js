(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(76)},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(11),l=a(12),o=a(18),u=a(17),m=a(19),h=a(34),d=a(15),p=a(8);a(41);function f(){return r.a.createElement("img",{src:"matchstick-2.png",className:"match",alt:"One of the matches in this row"})}var b=a(21),v=a(23);a(47);function E(e){var t=e.incrementMatches,a=e.decrementMatches,n=e.currentMatch,i=e.minMatches,c=e.maxMatches,s=e.isRowLocked;return r.a.createElement("span",{className:"match-modifier-btns"},r.a.createElement("button",{className:"btn btn-primary btn-sm",disabled:c||s,onClick:function(){return t(n)}},r.a.createElement(b.a,{icon:v.b})),r.a.createElement("button",{className:"btn btn-primary btn-sm",disabled:i||s,onClick:function(){return a(n)}},r.a.createElement(b.a,{icon:v.a})))}a(48);var y=a(6),M=a.n(y);function g(e){var t=e.provisionalMatches,a=e.initialMatchesOnTurn,n=e.incrementMatches,i=e.decrementMatches,c=e.hasChangeOccurred;return r.a.createElement("div",{id:"match-original-game-container"},t.map(function(e,t){var s=c&&e===a[t];return r.a.createElement("div",{className:"match-row",key:t},r.a.createElement("span",{className:"matches-fixed-width-container"},M.a.times(e,function(e){return r.a.createElement(f,{key:e})})),r.a.createElement(E,{currentMatch:t,maxMatches:e===a[t],minMatches:0===e,incrementMatches:n,decrementMatches:i,isRowLocked:s}))}))}function O(e){function t(t){var a,n=e.numberOfRows,r=t.toString(2),i=function(e){return Math.floor(Math.log2(2*e-1))+1}(n)-r.length;return a=t.toString(2),"0".repeat(i)+a}var a=e.provisionalMatches,n=e.initialMatchesOnTurn,i=e.incrementMatches,c=e.decrementMatches,s=e.hasChangeOccurred;return r.a.createElement("div",{id:"match-original-game-container"},a.map(function(e,a){var l=s&&e===n[a];return r.a.createElement("div",{className:"match-row",key:a},r.a.createElement("span",{className:"matches-fixed-width-container"},r.a.createElement("h1",null,t(e))),r.a.createElement(E,{currentMatch:a,maxMatches:e===n[a],minMatches:0===e,incrementMatches:i,decrementMatches:c,isRowLocked:l}))}))}var N=function(){function e(){Object(s.a)(this,e),this.matchVizOptions=[{id:"original",display:"Matches Original",displaySmall:"Classic",visualizer:g},{id:"binary",display:"Binary Numbers",displaySmall:"Binary",visualizer:O}]}return Object(l.a)(e,[{key:"allVizualizerOptions",value:function(){return this.matchVizOptions}},{key:"initialVisualizer",value:function(){return this.matchVizOptions[0].visualizer}},{key:"getVisualizer",value:function(e){var t=this.matchVizOptions.find(function(t){return t.id===e});return M.a.isUndefined(t)?null:t.visualizer}}]),e}();a(50);function T(e){var t=e.restartGame,a=e.resetTurn,n=e.finalizeTurn,i=e.hasChangeOccurred,c=e.isFirstTurn,s=e.handleForceAIMoveButton;function l(e){e.preventDefault(),t()}function o(e){e.preventDefault(),n()}function u(e){e.preventDefault(),a()}function m(e){e.preventDefault(),s()}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"turn-action-bar",className:"d-none d-sm-flex"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:m,disabled:!c},"AI Moves First"),r.a.createElement("button",{className:"btn btn-outline-primary",onClick:l},"Restart Game"),r.a.createElement("button",{className:"btn btn-outline-primary",disabled:!i,onClick:u},"Reset Turn"),r.a.createElement("button",{className:"btn btn-outline-primary",disabled:!i,onClick:o},"Turn Finished")),r.a.createElement("div",{id:"turn-action-bar",className:"d-flex d-sm-none"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:m,disabled:!c},"AI First"),r.a.createElement("button",{className:"btn btn-sm btn-outline-primary",onClick:l},"Restart"),r.a.createElement("button",{className:"btn btn-sm btn-outline-primary",disabled:!i,onClick:u},"Reset"),r.a.createElement("button",{className:"btn btn-sm btn-outline-primary",disabled:!i,onClick:o},"Finished")))}function w(e){var t=e.possibleModes,a=e.handleModeSelection;return r.a.createElement("div",{className:"d-flex justify-content-center",id:"mode-btns-container"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mode Selection Menu"},t.map(function(e){return r.a.createElement("button",{type:"button",key:e.id,className:"btn btn-primary",onClick:function(){return a(e.id)}},e.displaySmall)})))}var A=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).incrementMatches=function(e){var t=a.state.initialMatchesOnTurn[e];if(!(a.state.provisionalMatches[e]+1>t)){var n=Object(d.a)(a.state.provisionalMatches);n[e]+=1,a.setState({provisionalMatches:n})}},a.decrementMatches=function(e){if(!(a.state.provisionalMatches[e]-1<0)){var t=Object(d.a)(a.state.provisionalMatches);t[e]-=1,a.setState({provisionalMatches:t})}},a.resetTurn=function(){a.setState({provisionalMatches:a.state.initialMatchesOnTurn})},a._AITurn=function(){var e=a.state.initialMatchesOnTurn,t=M.a.reduce(e,function(e,t){return t>1?e+1:e},0)<=1;if(console.log("isEndGame: ",t),t){var n=M.a.reduce(e,function(e,t){return t>0?e+1:e},0);console.log("remainingTurns: ",n);var r=M.a.max(e),i=e.indexOf(r),c=Object(d.a)(e),s=r-n%2;c[i]-=0===s?r:s,a.finalizeTurn(c)}else{var l=M.a.reduce(e,function(e,t){return t^e},0),o=a._getOptimalMoveBasedOnSum(l),u=Object(h.a)(o,2),m=u[0],p=u[1];if(-1===m){var f=M.a.reduce(e,function(e,t,a){return 0===t?e:(e.push(a),e)},[]),b=e[m=f[Math.floor(Math.random()*f.length)]];p=Math.floor(Math.random()*b)+1}var v=Object(d.a)(e);v[m]-=p,a.finalizeTurn(v)}},a.finalizeTurn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||a.state.provisionalMatches,n=a._nextPlayer();a.setState({initialMatchesOnTurn:t,provisionalMatches:t,isFirstTurn:!1,currentPlayer:n})},a.restartGame=function(){var e=a._initializeMatchesArray();a.setState({provisionalMatches:e,initialMatchesOnTurn:e,isFirstTurn:!0,currentPlayer:a.userGoesFirst?a.PLAYER_USER:a.PLAYER_AI})},a.handleForceAIMoveButton=function(){a.setState({currentPlayer:a.PLAYER_AI})},a.handleModeSelection=function(e){a.setState({currentMatchVisualizer:a.MatchVisualizerFactory.getVisualizer(e)})},a.PLAYER_USER=0,a.PLAYER_AI=1,a.numberOfRows=4,a.userGoesFirst=!0,a.MatchVisualizerFactory=new N;var n=a._initializeMatchesArray();return a.state={provisionalMatches:n,initialMatchesOnTurn:n,currentPlayer:a.PLAYER_USER,currentMatchVisualizer:a.MatchVisualizerFactory.initialVisualizer(),isFirstTurn:!0,winner:void 0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){if(0!==M.a.max(this.state.initialMatchesOnTurn)||this.state.winner)this.state.currentPlayer===this.PLAYER_AI&&this._AITurn();else{var n=this.state.currentPlayer===this.PLAYER_AI?"AI":"User";console.log("Congratulations on winning "+n+"!"),this.setState({winner:n})}}},{key:"_initializeMatchesArray",value:function(){for(var e=[],t=0;t<this.numberOfRows;t++)e.push(1+2*t);return e}},{key:"_nextPlayer",value:function(){switch(this.state.currentPlayer){case this.PLAYER_AI:return this.PLAYER_USER;case this.PLAYER_USER:return this.PLAYER_AI;default:return console.error("Switching current player but the turn-switch mechanic is undefined for this player ".concat(this.state.currentPlayer)),null}}},{key:"_getOptimalMoveBasedOnSum",value:function(e){var t=-1,a=0;return this.state.provisionalMatches.forEach(function(n,r){-1===t&&(n^e)<n&&(t=r,a=n-(n^e))}),[t,a]}},{key:"render",value:function(){var e=!M.a.isEqual(this.state.provisionalMatches,this.state.initialMatchesOnTurn),t=this.state.currentMatchVisualizer;return this.state.winner?r.a.createElement(p.a,{push:!0,to:{pathname:"/gameover",search:"?winner="+this.state.winner}}):r.a.createElement("div",{id:"match-game-container"},r.a.createElement(w,{possibleModes:this.MatchVisualizerFactory.allVizualizerOptions(),handleModeSelection:this.handleModeSelection}),t&&r.a.createElement(t,{provisionalMatches:this.state.provisionalMatches,initialMatchesOnTurn:this.state.initialMatchesOnTurn,incrementMatches:this.incrementMatches,decrementMatches:this.decrementMatches,hasChangeOccurred:e,numberOfRows:this.numberOfRows}),r.a.createElement(T,{isFirstTurn:this.state.isFirstTurn,restartGame:this.restartGame,resetTurn:this.resetTurn,finalizeTurn:this.finalizeTurn,handleForceAIMoveButton:this.handleForceAIMoveButton,hasChangeOccurred:e}))}}]),t}(n.Component),k=a(31),x=a.n(k),z=a(13);function R(e){var t=e.pathname,a=e.displayText;return r.a.createElement(z.b,{to:t},r.a.createElement("button",{className:"btn btn-lg btn-outline-primary"},a))}function P(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-3 "},"Congrats"),r.a.createElement("h1",{className:"display-4 mb-5"},"You beat the AI!")),r.a.createElement("div",{className:"d-flex justify-content-around m-5",id:"nav-btns"},r.a.createElement(R,{pathname:"/",displayText:"Back Home"}),r.a.createElement(R,{pathname:"/play",displayText:"Play Again"})))}function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-3 "},"Whoops"),r.a.createElement("h1",{className:"display-4 mb-5"},"Better luck next time")),r.a.createElement("div",{className:"d-flex justify-content-around m-5",id:"nav-btns"},r.a.createElement(R,{pathname:"/",displayText:"Back Home"}),r.a.createElement(R,{pathname:"/play",displayText:"Play Again"})))}function j(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-3 "},"Sorry"),r.a.createElement("h1",{className:"display-4 mb-5"},"That's not a valid page...")),r.a.createElement("div",{className:"d-flex justify-content-around m-5",id:"nav-btns"},r.a.createElement(R,{pathname:"/",displayText:"Home"}),r.a.createElement(R,{pathname:"/play",displayText:"Play Nim"})))}function F(e){var t,a=x.a.parse(e.location.search);return t="AI"===a.winner?S:"User"===a.winner?P:j,r.a.createElement(t,null)}var C=a(79),_=a(78);a(68);function I(){return r.a.createElement("section",{id:"title-page"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-3 text-center"},"Digital Nim"),r.a.createElement("h2",{className:"display-4 text-center"},"Playing Parlor Games Against AI")),r.a.createElement("div",{id:"title-buttons"},r.a.createElement(R,{pathname:"/learn",displayText:"Learn More"}),r.a.createElement(R,{pathname:"/play",displayText:"Start Playing"})))}a(69);function V(e){return function(t){return r.a.createElement("div",{className:"route"},r.a.createElement(e,{location:t.location},t.children))}}a(70);function L(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar mb-2"},r.a.createElement(z.b,{className:"navbar-brand",to:"/"},"Digital Nim")))}a(71);var B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).routerRender=function(e){var t=e.location,a=V(I),n=V(F),i=V(A),c=V(A),s=V(j);return r.a.createElement(C.a,null,r.a.createElement(_.a,{key:t.key,timeout:1e3},r.a.createElement(p.d,{location:t},r.a.createElement(p.b,{exact:!0,path:"/",component:a}),r.a.createElement(p.b,{path:"/learn",component:i}),r.a.createElement(p.b,{path:"/play",component:c}),r.a.createElement(p.b,{path:"/gameover",component:n}),r.a.createElement(p.b,{component:s}))))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{basename:"/nim-viz"},r.a.createElement(L,null),r.a.createElement(p.b,{render:this.routerRender}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74),a(75);c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.8c45c035.chunk.js.map