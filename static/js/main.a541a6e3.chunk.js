(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/meInLisbon.dd42bbb4.jpeg"},function(e,t,a){e.exports=a(15)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),i=a.n(c),s=(a(13),a(14),a(3)),r=a.n(s);var o=()=>l.a.createElement("section",{id:"about",className:"about-section"},l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"slide-in"},l.a.createElement("h2",{className:"about-header"},"About Me"),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-intro"},l.a.createElement("img",{src:r.a,alt:"Image of me",className:"about-image"}),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"I am a junior at Gonzaga University graduating May 2026. I've had the incredible opportunity to study Computer Science, Applied Mathematics, and Entrepreneurial Leadership focusing on Software Development, Data Analytics, and Adaptive Leadership."),l.a.createElement("p",null,"I'm always looking for opportunities to gain new skills and put what I've learned into practice, so I am currently seeking internships to apply my skills in real world scenarios.")))),l.a.createElement("div",{className:"about-skills slide-in"},l.a.createElement("h3",{className:"about-header"},"What I Do"),l.a.createElement("div",{className:"about-grid"},[{icon:"\ud83d\udcbb",title:"WEB DEVELOPMENT",description:""},{icon:"\ud83c\udfa8",title:"RESPONSIVE UI DESIGN",description:""},{icon:"\ud83c\udfaf",title:"EXPERIENCE DESIGN",description:""},{icon:"\ud83c\udf0d",title:"DIVERSITY IN TECH",description:""}].map((e,t)=>l.a.createElement("div",{key:t,className:"about-card"},l.a.createElement("div",{className:"card-icon"},e.icon),l.a.createElement("h3",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-description"},e.description))))))));var m=()=>l.a.createElement("section",{className:"slide-in",id:"skills"},l.a.createElement("h2",null,"My Skills"),l.a.createElement("p",null,"This is the skills section."));var d=()=>l.a.createElement("section",{className:"slide-in",id:"projects"},l.a.createElement("h2",null,"My Projects"),l.a.createElement("p",null,"This is the projects section."));var u=()=>l.a.createElement("section",{className:"slide-in",id:"experience"},l.a.createElement("h2",null,"My Experience"),l.a.createElement("p",null,"This is the experience section."));var E=()=>l.a.createElement("section",{className:"slide-in",id:"contact"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"This is the contact section."));var p=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(0),i=[{id:"welcome",title:"Welcome"},{id:"about",title:"About"},{id:"skills",title:"Skills"},{id:"projects",title:"Projects"},{id:"experience",title:"Experience"},{id:"contact",title:"Contact"}];return Object(n.useEffect)(()=>{const e=()=>{const e=window.innerHeight,a=e/2,n=document.documentElement.scrollHeight-e,l=window.scrollY||document.documentElement.scrollTop,s=document.getElementById(i[0].id).getBoundingClientRect().top+window.scrollY,r=Math.max(0,l-s)/(n-s)*100;c(Math.min(100,Math.max(0,r)));const o=i.map(e=>({id:e.id,element:document.getElementById(e.id)}));for(const c of o)if(c.element){const n=c.element.getBoundingClientRect(),l=n.top+n.height/2;if(Math.abs(l-a)<.25*e){t(c.id);break}}};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[i]),Object(n.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1}),t=document.querySelectorAll(".slide-in");return t.forEach(t=>e.observe(t)),()=>t.forEach(t=>e.unobserve(t))},[]),l.a.createElement("div",null,l.a.createElement("main",null,l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress-line",style:{"--progress-height":"".concat(a,"%")}}),l.a.createElement("div",{className:"section-markers"},i.map((t,n)=>{const c=n/(i.length-1)*100,s=c<=a,r=t.id===e;return l.a.createElement("div",{key:t.id,className:"section-marker ".concat(s?"active":""," ").concat(r?"current":""),style:{top:"".concat(c,"%"),transform:"translateY(-50%)"},onClick:()=>(e=>{const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect(),a=e.top+window.scrollY-window.innerHeight/2+e.height/2;window.scrollTo({top:a,behavior:"smooth"})}})(t.id)},l.a.createElement("span",{className:"section-title"},t.title))}))),l.a.createElement("div",{id:"welcome",className:"welcome-section"},l.a.createElement("h1",null,"Welcome, I'm"," ",l.a.createElement("span",{className:"name"},l.a.createElement("span",null,"M"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"\xa0"),l.a.createElement("span",null,"S"),l.a.createElement("span",null,"w"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"n"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"y")))),l.a.createElement(o,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(u,null),l.a.createElement(E,null)))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:i}=t;a(e),n(e),l(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.a541a6e3.chunk.js.map