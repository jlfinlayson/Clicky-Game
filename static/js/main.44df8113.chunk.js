(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Mario","image":"https://www.mariowiki.com/images/thumb/3/3e/Mario_SSBUltimate.png/1114px-Mario_SSBUltimate.png","clicked":false},{"id":2,"name":"Donkey Kong","image":"https://www.mariowiki.com/images/thumb/7/7e/DonkeyKong_SSBU.png/1200px-DonkeyKong_SSBU.png","clicked":false},{"id":3,"name":"Yoshi","image":"https://www.mariowiki.com/images/thumb/c/ce/YoshiSSBU.png/1200px-YoshiSSBU.png","clicked":false},{"id":4,"name":"Pikachu","image":"https://www.mariowiki.com/images/thumb/9/93/Pikachu_SSBU.png/1200px-Pikachu_SSBU.png","clicked":false},{"id":5,"name":"Jigglypuff","image":"https://www.mariowiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/1200px-Jigglypuff_SSBU.png","clicked":false},{"id":6,"name":"Bowser","image":"https://www.mariowiki.com/images/thumb/4/49/Bowser_SSBU.png/1202px-Bowser_SSBU.png","clicked":false},{"id":7,"name":"Piranha Plant","image":"https://www.mariowiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/1200px-Piranha_Plant_SSBU.png","clicked":false},{"id":8,"name":"King Dedede","image":"https://www.mariowiki.com/images/thumb/d/da/KingDededeSSBU.png/1200px-KingDededeSSBU.png","clicked":false},{"id":9,"name":"K Rool","image":"https://www.mariowiki.com/images/thumb/8/87/King_K_Rool_SSBU.png/1200px-King_K_Rool_SSBU.png","clicked":false},{"id":10,"name":"Lucario","image":"https://www.mariowiki.com/images/thumb/0/08/Lucario_SSBU.png/1200px-Lucario_SSBU.png","clicked":false}]')},,,function(e,a,i){e.exports=i(18)},,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),c=i(2),r=i.n(c),o=(i(14),i(3)),m=i(4),s=i(7),l=i(5),g=i(8);i(15);var p=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))};i(16);var w=function(e){return n.a.createElement("div",{className:"wrapper container mt-5"},e.children)};i(17);var u=function(e){return n.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark text"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h1",null,"Score: ",e.score," | Top Score: ",e.topScore)))},d=i(6),S=function(e){function a(){var e,i;Object(o.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(i=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={characters:d,clickedCharacters:[],score:0,topScore:0},i.win=function(){i.setState({score:i.state.score+1})},i.lose=function(){i.setState({score:0})},i}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement("h2",{className:"mt-4"},"Click any image to start!"),n.a.createElement(w,null,this.state.characters.map(function(e){return n.a.createElement(p,{id:e.id,key:e.id,image:e.image,clicked:e.clicked})})))}}]),a}(t.Component);r.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.44df8113.chunk.js.map