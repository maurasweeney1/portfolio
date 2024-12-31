(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/meInLisbon.dd42bbb4.jpeg"},function(e,t,n){e.exports=n(15)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(2),c=n.n(i),s=(n(13),n(14),n(3)),r=n.n(s);var o=()=>l.a.createElement("section",{id:"about",className:"about-section"},l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"slide-in"},l.a.createElement("h2",{className:"about-header"},"About Me"),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-intro"},l.a.createElement("img",{src:r.a,alt:"Image of me",className:"about-image"}),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,"I am a junior at Gonzaga University graduating May 2026. I've had the incredible opportunity to study Computer Science, Applied Mathematics, and Entrepreneurial Leadership focusing on Software Development, Data Analytics, and Adaptive Leadership."),l.a.createElement("p",null,"I'm always looking for opportunities to gain new skills and put what I've learned into practice, so I am currently seeking internships to apply my skills in real world scenarios.")))),l.a.createElement("div",{className:"about-skills slide-in"},l.a.createElement("h3",{className:"about-header"},"What I Do"),l.a.createElement("div",{className:"about-grid"},[{icon:"\ud83d\udee9\ufe0f",title:"TRAVEL",description:"I've always enjoyed exploring new places, fueling my curiosity and experiencing to different cultures, inspiring creativity and adaptability in my work and personal growth."},{icon:"\ud83c\udf0d",title:"DIVERSE PERSPECTIVES",description:"Engaging with people from different backgrounds and cultures enriches my understanding of global challenges and enhances my problem-solving by encouraging innovative approaches."},{icon:"\ud83e\udd7e",title:"HIKING",description:"Hiking helps me recharge, develop resilience, and stay focused. I love the challenges in overcoming obstacles while appreciating the journey and the views along the way."},{icon:"\ud83d\udcbb",title:"UI/UX DESIGN",description:"I use creativity with technical skills to design intuitive and visually engaging user interfaces, creating meaningful digital experiences for diverse audiences."}].map((e,t)=>l.a.createElement("div",{key:t,className:"about-card"},l.a.createElement("div",{className:"card-icon"},e.icon),l.a.createElement("h3",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-description"},e.description))))))));var m=()=>l.a.createElement("section",{className:"slide-in",id:"skills"},l.a.createElement("h2",null,"My Skills"),l.a.createElement("p",null,"This is the skills section."));var d=()=>l.a.createElement("section",{className:"slide-in",id:"projects"},l.a.createElement("h2",null,"My Projects"),l.a.createElement("p",null,"This is the projects section."));var u=()=>l.a.createElement("section",{className:"slide-in",id:"experience"},l.a.createElement("h2",null,"My Experience"),l.a.createElement("p",null,"This is the experience section."));var p=()=>l.a.createElement("section",{className:"slide-in",id:"contact"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"This is the contact section."));var E=function(){const[e,t]=Object(a.useState)(""),[n,i]=Object(a.useState)(0),[c,s]=Object(a.useState)([]),r=Object(a.useRef)(null),E=[{id:"welcome",title:"Welcome"},{id:"about",title:"About"},{id:"skills",title:"Skills"},{id:"projects",title:"Projects"},{id:"experience",title:"Experience"},{id:"contact",title:"Contact"}];return Object(a.useEffect)(()=>{const e=()=>{const e=window.innerHeight,n=window.scrollY,a=document.documentElement.scrollHeight-e,l=n/a*100;i(Math.min(100,Math.max(0,l)));const c=E.map(e=>({id:e.id,element:document.getElementById(e.id)})),o=n+e/2;for(const i of c)if(i.element){const e=i.element.getBoundingClientRect(),a=n+e.top,l=a+e.height;if(o>=a&&o<=l){t(i.id);break}}if(r.current){const e=c.map(e=>{if(e.element){const t=e.element.getBoundingClientRect(),l=(n+t.top)/a*100;return Math.min(100,Math.max(0,l))}return 0});s(e)}};return window.addEventListener("scroll",e),window.addEventListener("resize",e),e(),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[E]),Object(a.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1}),t=document.querySelectorAll(".slide-in");return t.forEach(t=>e.observe(t)),()=>t.forEach(t=>e.unobserve(t))},[]),l.a.createElement("div",null,l.a.createElement("main",null,l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress-line",style:{"--progress-height":"".concat(n,"%")}}),l.a.createElement("div",{className:"section-markers"},E.map((t,a)=>{const i=a/(E.length-1)*100,c=i<=n,s=t.id===e;return l.a.createElement("div",{key:t.id,className:"section-marker ".concat(c?"active":""," ").concat(s?"current":""),style:{top:"".concat(i,"%"),transform:"translateY(-50%)"},onClick:()=>(e=>{const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect(),n=e.top+window.scrollY-window.innerHeight/2+e.height/2;window.scrollTo({top:n,behavior:"smooth"})}})(t.id)},l.a.createElement("span",{className:"section-title"},t.title))}))),l.a.createElement("div",{id:"welcome",className:"welcome-section"},l.a.createElement("h1",null,"Welcome, I'm"," ",l.a.createElement("span",{className:"name"},l.a.createElement("span",null,"M"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"\xa0"),l.a.createElement("span",null,"S"),l.a.createElement("span",null,"w"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"n"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"y")))),l.a.createElement(o,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(u,null),l.a.createElement(p,null)))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:i,getTTFB:c}=t;n(e),a(e),l(e),i(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.80ab635a.chunk.js.map