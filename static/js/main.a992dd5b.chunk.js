(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/meInLisbon.dd42bbb4.jpeg"},function(e,t,n){e.exports=n(15)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(2),s=n.n(c),i=(n(13),n(14),n(3)),r=n.n(i);var o=()=>a.a.createElement("section",{className:"slide-in",id:"about"},a.a.createElement("h2",null,"About Me"),a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"20px"}},a.a.createElement("img",{src:r.a,alt:"Image of me",style:{width:"200px"}}),a.a.createElement("div",{style:{width:"40%"}},a.a.createElement("p",null,"I'm always looking for opportunities to gain new skills and put what I've learned into practice, so I am currently seeking internships to apply my skills in real world scenarios."))));var m=()=>a.a.createElement("section",{className:"slide-in",id:"skills"},a.a.createElement("h2",null,"My Skills"),a.a.createElement("p",null,"This is the skills section."));var u=()=>a.a.createElement("section",{className:"slide-in",id:"projects"},a.a.createElement("h2",null,"My Projects"),a.a.createElement("p",null,"This is the projects section."));var d=()=>a.a.createElement("section",{className:"slide-in",id:"experience"},a.a.createElement("h2",null,"My Experience"),a.a.createElement("p",null,"This is the experience section."));var E=()=>a.a.createElement("section",{className:"slide-in",id:"contact"},a.a.createElement("h2",null,"Contact Me"),a.a.createElement("p",null,"This is the contact section."));var p=function(){const[e,t]=Object(l.useState)(""),[n,c]=Object(l.useState)(0),s=[{id:"welcome",title:"Welcome"},{id:"about",title:"About"},{id:"skills",title:"Skills"},{id:"projects",title:"Projects"},{id:"experience",title:"Experience"},{id:"contact",title:"Contact"}];return Object(l.useEffect)(()=>{const e=()=>{const e=window.innerHeight,n=e/2,l=document.documentElement.scrollHeight-e,a=window.scrollY||document.documentElement.scrollTop;c(a/l*100);const i=s.map(e=>({id:e.id,element:document.getElementById(e.id)}));for(const c of i)if(c.element){const l=c.element.getBoundingClientRect(),a=l.top+l.height/2;if(Math.abs(a-n)<.25*e){t(c.id);break}}};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[s]),Object(l.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1}),t=document.querySelectorAll(".slide-in");return t.forEach(t=>e.observe(t)),()=>t.forEach(t=>e.unobserve(t))},[]),a.a.createElement("div",null,a.a.createElement("main",null,a.a.createElement("div",{className:"progress-container"},a.a.createElement("div",{className:"progress-line"}),a.a.createElement("div",{className:"section-markers"},s.map((t,l)=>{const c=l/(s.length-1)*100,i=c<=n,r=t.id===e;return a.a.createElement("div",{key:t.id,className:"section-marker ".concat(i?"active":""," ").concat(r?"current":""),style:{top:"".concat(c,"%")},onClick:()=>(e=>{const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect(),n=e.top+window.scrollY-window.innerHeight/2+e.height/2;window.scrollTo({top:n,behavior:"smooth"})}})(t.id)},a.a.createElement("span",{className:"section-title"},t.title))}))),a.a.createElement("div",{id:"welcome",className:"welcome-section"},a.a.createElement("h1",null,"Welcome, I'm"," ",a.a.createElement("span",{className:"name"},a.a.createElement("span",null,"M"),a.a.createElement("span",null,"a"),a.a.createElement("span",null,"u"),a.a.createElement("span",null,"r"),a.a.createElement("span",null,"a"),a.a.createElement("span",null,"\xa0"),a.a.createElement("span",null,"S"),a.a.createElement("span",null,"w"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"n"),a.a.createElement("span",null,"e"),a.a.createElement("span",null,"y")))),a.a.createElement(o,null),a.a.createElement(m,null),a.a.createElement(u,null),a.a.createElement(d,null),a.a.createElement(E,null)))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then(t=>{let{getCLS:n,getFID:l,getFCP:a,getLCP:c,getTTFB:s}=t;n(e),l(e),a(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.a992dd5b.chunk.js.map