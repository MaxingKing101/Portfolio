import{r as e,j as t,C as a,g as i,q as s,v as n,P as r,w as o,L as l,A as c,F as d,x as m,M as u,U as p,y as x,S as h,z as g,I as b,B as y,J as v}from"./vendor-BDwFrlc3.js";import{c as f}from"./index-BL5pKQmj.js";import{S as j}from"./radix-ui-CxhpDnBu.js";const w=[{id:"work",label:"Work"},{id:"services",label:"Services"},{id:"clients",label:"Clients"},{id:"contact",label:"Contact"}],N=()=>{window.scrollTo({top:0,behavior:"smooth"})},k=()=>{const[i,s]=e.useState(!1),[n,r]=e.useState(!1),[o,l]=e.useState(""),c=e.useRef(null);return e.useEffect((()=>{const e=()=>{var e;const t=window.scrollY,a=null==(e=c.current)?void 0:e.dataset.lastScroll;s(t>50),r(t>200);const i=w.map((e=>document.getElementById(e.id))),n=.33*window.innerHeight;for(let s=i.length-1;s>=0;s--){const e=i[s];if(e&&e.offsetTop<=t+n){l(w[s].id);break}}a&&Math.abs(t-parseInt(a))<10||c.current&&(c.current.dataset.lastScroll=t.toString())};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),t.jsxs("nav",{ref:c,className:f("fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",i?"bg-brand-deepest-blue/90 backdrop-blur-sm py-1 sm:py-2 shadow-lg":"bg-transparent py-2 sm:py-4"),role:"navigation","aria-label":"Main navigation",children:[t.jsxs("div",{className:"container mx-auto px-3 md:px-8 flex justify-between items-center",children:[t.jsx("a",{href:"#",onClick:e=>{e.preventDefault(),N()},className:"text-brand-light-purple text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-md px-1 sm:px-2","aria-label":"Back to top",children:t.jsxs("span",{className:"group",children:[t.jsx("span",{className:"block",children:"MaxingKing"}),t.jsx("span",{className:"block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"})]})}),t.jsx("div",{className:"flex items-center gap-2 sm:gap-4 md:gap-8",role:"menubar","aria-label":"Navigation menu",children:w.map((e=>t.jsx("button",{onClick:()=>(e=>{const t=document.getElementById(e);if(t){const e=70,a=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:a,behavior:"smooth"})}})(e.id),className:f("text-white hover:text-brand-light-purple transition-colors duration-300 ease-in-out text-sm sm:text-base px-1 sm:px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",o===e.id&&"text-brand-light-purple"),role:"menuitem","aria-current":o===e.id?"page":void 0,children:t.jsxs("span",{className:"group",children:[t.jsx("span",{className:"block",children:e.label}),t.jsx("span",{className:"block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"})]})},e.id)))})]}),n&&t.jsx("button",{onClick:N,className:"fixed bottom-13 sm:bottom-13 right-4 sm:right-10 h-8 w-8 sm:h-10 sm:w-14 flex items-center justify-center bg-brand-purple text-white rounded-md shadow-lg hover:bg-brand-light-purple transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2","aria-label":"Scroll back to top",children:t.jsx(a,{className:"h-5 w-5 sm:h-8 sm:w-8 transition-all duration-300 ease-in-out group-hover:rotate-180","aria-hidden":"true"})})]})},C=i("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),T=e.forwardRef((({className:e,variant:a,size:i,asChild:s=!1,...n},r)=>{const o=s?j:"button";return t.jsx(o,{className:f(C({variant:a,size:i,className:e})),ref:r,...n})}));T.displayName="Button";const E=({id:a})=>{const i=e.useRef(null);return t.jsxs(s.section,{ref:i,id:a,className:"h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden","aria-labelledby":"hero-title",initial:{opacity:0,y:20,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",scale:{duration:.8}},children:[t.jsxs(s.div,{className:"absolute inset-0","aria-hidden":"true",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.2,ease:"easeOut"},children:[t.jsx(s.img,{src:"/portfolio/Background-image/timeline-editing.png",alt:"Enhance Your Content",className:"absolute inset-0 w-full h-full object-cover",style:{transform:"scale(1.4) translateX(2.9%)",opacity:"0.9"},loading:"eager",fetchPriority:"high",width:1920,height:1080,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.3,ease:"easeOut"}}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0c0c1d]/80 via-[#1a1a2e]/90 to-[#1a1a2e]"})]}),t.jsxs(s.div,{className:"container text-center max-w-4xl relative z-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6,ease:"easeOut"},children:[t.jsxs(s.h1,{id:"hero-title",className:"text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight",initial:{opacity:0,y:20,skew:"-5deg"},animate:{opacity:1,y:0,skew:"0deg"},transition:{delay:.5,duration:.6,ease:"easeOut"},children:["It's Time To ",t.jsx("span",{className:"enhance-text",children:"ENHANCE"})," Your Content"]}),t.jsx(s.p,{className:"text-lg md:text-xl text-gray-300 mb-12",initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:.6,duration:.6,ease:"easeOut"},children:"Taking your content to the next level with professional editing"}),t.jsxs(s.div,{className:"flex flex-col sm:flex-row gap-4 justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,duration:.6,ease:"easeOut"},children:[t.jsxs("a",{href:"https://twitter.com/maxingking101",target:"_blank",rel:"noopener noreferrer",className:"group rounded-full px-8 py-6 text-white font-medium flex items-center gap-2 justify-center bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple relative overflow-hidden transition-all duration-300 text-xl hover:shadow-lg hover:shadow-purple-500/20","aria-label":"Connect on Twitter",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"}),t.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[t.jsx(n,{className:"h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12","aria-hidden":"true"}),t.jsx("span",{className:"transition-transform duration-300 group-hover:-translate-y-1",children:"Let's Talk"})]})]}),t.jsxs(T,{onClick:()=>{const e=document.getElementById("work");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},variant:"outline",className:"group rounded-full px-8 py-6 border-gray-700 hover:bg-transparent text-white font-medium flex items-center gap-2 relative overflow-hidden transition-all duration-300","aria-label":"View portfolio work",children:[t.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-blue/10 via-brand-light-purple/10 to-brand-purple/10"}),t.jsx(r,{className:"h-5 w-5 transition-transform duration-300 group-hover:translate-x-1","aria-hidden":"true"}),t.jsx("span",{className:"transition-transform duration-300 group-hover:translate-x-1",children:"Watch My Work"})]})]})]})]})},I="rgba(255, 255, 255, 0.05)",S="1.02",L="#1a1a1a",P="#0a0a0a",O="0.3s",U=(e,t=!1)=>{if("vimeo"===e.videoType&&e.videoId){const a=t?"&autoplay=1":"",i=e.videoHash?`h=${e.videoHash}`:"";return`https://player.vimeo.com/video/${e.videoId}?${i}&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&responsive=1&quality=auto${a}`}if("youtube"===e.videoType&&e.videoId){const a=t?"&autoplay=1":"";return`https://www.youtube.com/embed/${e.videoId}?rel=0&showinfo=0${a}`}return""},$=[{id:1,title:"Code Portfolio",category:"Programming",imageUrl:"/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",videoType:"vimeo",videoId:"1074265085",videoHash:"495fb1c813",thumbnailUrl:"https://i.ibb.co/My2NsbBr/thumb.jpg"},{id:2,title:"Web Development",category:"Coding",imageUrl:"/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",videoType:"vimeo",videoId:"1074270789",videoHash:"8538c1e45e",thumbnailUrl:"https://i.ibb.co/0jjgJ7T0/thumb-1.jpg"},{id:3,title:"DevOps Project",category:"Technology",imageUrl:"/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",videoType:"none"},{id:4,title:"Hardware Integration",category:"Engineering",imageUrl:"/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",videoType:"none"},{id:5,title:"Matrix Code",category:"Programming",imageUrl:"/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",videoType:"none"},{id:6,title:"Advanced Coding",category:"Development",imageUrl:"/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",videoType:"none"}],z=e.memo((({project:e,onProjectClick:a,isLoading:i,onImageLoad:n})=>{const[r,c]=o({threshold:.1,triggerOnce:!0});return t.jsxs(s.div,{ref:r,initial:{opacity:0,y:20},animate:c?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"rounded-lg overflow-hidden group relative cursor-pointer",onClick:()=>a(e),onKeyDown:t=>"Enter"===t.key&&a(e),tabIndex:0,role:"button","aria-label":`View ${e.title} project`,style:{"--card-hover-bg":I,"--card-hover-scale":S,"--gradient-start":L,"--gradient-end":P,"--transition-duration":O},children:[i&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-900",children:t.jsx(l,{className:"w-8 h-8 animate-spin text-brand-purple"})}),t.jsx("img",{src:e.imageUrl,alt:e.title,className:"w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-[1.02]",loading:"lazy",onLoad:()=>n(e.id),width:400,height:256}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-[var(--gradient-start)] via-[var(--gradient-end)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",children:t.jsxs("div",{className:"p-4 w-full",children:[t.jsx("h3",{className:"text-xl font-semibold text-white glow-heading transition-colors duration-300 group-hover:text-brand-purple",children:e.title}),t.jsx("p",{className:"text-sm text-gray-300 transition-colors duration-300 group-hover:text-white",children:e.category})]})})]},e.id)})),B=e.memo((({project:e,isLoading:a,onLoad:i})=>t.jsxs("div",{className:"relative w-full h-full",children:[a&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50",children:t.jsx(l,{className:"w-8 h-8 animate-spin text-brand-purple"})}),t.jsx("iframe",{src:U(e,!0),className:"w-full h-full rounded-lg",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media",allowFullScreen:!0,title:e.title,onLoad:i})]}))),D=e.memo((({id:a})=>{const[i,n]=e.useState(null),[o,l]=e.useState(new Set),[d,m]=e.useState(!1),[u,p]=e.useState(!1),x=e.useRef(null),h=e.useRef(null),g=e.useCallback((e=>{n(e)}),[]),b=e.useCallback((e=>{l((t=>{const a=new Set(t);return a.delete(e),a}))}),[]),y=e.useCallback((()=>{n(null),m(!1)}),[]),v=e.useCallback((()=>{m(!0)}),[]),f=e.useCallback((e=>{"Escape"===e.key&&y()}),[y]),j=e.useCallback((e=>{x.current&&!x.current.contains(e.target)&&y()}),[y]);return e.useEffect((()=>{const e=e=>{"Escape"===e.key&&y()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[y]),e.useEffect((()=>{const e=e=>j(e);return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[j]),t.jsxs("section",{id:a,className:"py-20 sm:py-24 relative overflow-hidden",children:[t.jsxs("div",{className:"container mx-auto px-4",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-4 glow-heading",children:"My Work"}),t.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Explore my portfolio of projects showcasing my skills and expertise."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:$.map((e=>t.jsx(z,{project:e,onProjectClick:g,isLoading:o.has(e.id),onImageLoad:b},e.id)))})]}),t.jsx(c,{children:i&&t.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4",ref:x,role:"dialog","aria-labelledby":`modal-${i.id}`,"aria-modal":"true",onClick:y,onKeyDown:f,tabIndex:0,"aria-label":`View ${i.title} project`,children:t.jsx(s.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},transition:{duration:.3},className:"bg-brand-deepest-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto",ref:h,onClick:e=>e.stopPropagation(),children:t.jsxs("div",{className:"p-3 sm:p-6",children:[t.jsxs("div",{className:"flex justify-between items-center mb-4",children:[t.jsx("h3",{id:`modal-${i.id}`,className:"text-xl sm:text-2xl font-bold glow-heading",children:i.title}),t.jsx("button",{onClick:y,className:"text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800","aria-label":"Close modal",children:"✕"})]}),t.jsx("div",{className:"aspect-video bg-black rounded-lg mb-4 overflow-hidden relative",children:i.videoType&&"none"!==i.videoType?d?t.jsx(B,{project:i,isLoading:u,onLoad:()=>p(!1)}):t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},className:"w-full h-full relative cursor-pointer group",onClick:v,onKeyDown:e=>"Enter"===e.key&&v(),tabIndex:0,role:"button","aria-label":`Play ${i.title} video`,children:[t.jsx("img",{src:(w=i,w.thumbnailUrl||w.imageUrl),alt:`${i.title} thumbnail`,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"}),t.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},className:"absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity",children:t.jsx("div",{className:"bg-brand-purple/80 rounded-full p-4 transform group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-12 h-12 text-white"})})})]}):t.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]",width:1280,height:720})}),t.jsxs("div",{className:"text-gray-300",children:[t.jsxs("p",{className:"mb-2",children:[t.jsx("strong",{children:"Category:"})," ",i.category]}),t.jsx("p",{children:"This is a showcase of my professional video editing work. Each project represents unique challenges and creative solutions implemented to deliver stunning visual content."})]})]})})})})]});var w})),M=[{id:1,icon:t.jsx(d,{className:"h-7 w-7 text-brand-blue"}),title:"Video Editing",description:"Transform your raw footage into compelling, polished content.",details:"Professional video editing services including transitions, effects, color correction, and timing adjustments."},{id:2,icon:t.jsx(m,{className:"h-7 w-7 text-brand-purple"}),title:"Color Grading",description:"Color correction and grading to give your content the perfect visual tone and mood.",details:"Expert color grading to enhance visual appeal, maintain consistency, and create distinctive looks."},{id:3,icon:t.jsx(u,{className:"h-7 w-7 text-brand-light-purple"}),title:"Sound Design",description:"Audio mixing and sound effects to create the perfect auditory experience.",details:"Professional audio enhancement, background music selection, and sound effect integration."}],R=e.memo((({service:e,index:a})=>t.jsxs(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.15*a},viewport:{once:!0},className:"service-card h-auto sm:h-100 p-4 sm:p-6 flex flex-col justify-center items-start rounded-lg bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg hover:from-black/70 hover:to-black/50 transition-all duration-300",children:[t.jsx("div",{className:"mb-4",children:e.icon}),t.jsx(s.h3,{className:"text-lg sm:text-xl font-semibold mb-2 text-white glow-heading",whileHover:{scale:1.05},transition:{duration:.3},children:e.title}),t.jsx("p",{className:"text-gray-400 leading-relaxed transition-colors duration-300 hover:text-white/90",children:e.description})]},e.id))),V=e.memo((({id:e})=>t.jsx("section",{id:e,className:"py-12 sm:py-20 bg-black","aria-labelledby":"services-title",children:t.jsxs("div",{className:"container mx-auto px-3 sm:px-4 md:px-8",children:[t.jsx(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:t.jsxs("h2",{id:"services-title",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 uppercase text-white",children:["SERVICES",t.jsx("div",{className:"w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"})]})}),t.jsx(c,{children:t.jsx(s.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0},children:M.map(((e,a)=>t.jsx(R,{service:e,index:a},e.id)))})})]})}))),H=[{id:1,icon:t.jsx(p,{className:"h-8 w-8 text-brand-light-purple"}),name:"John Roberts",role:"YouTuber",comment:"MaxingKing's edits took my content to another level. The quality speaks for itself."},{id:2,icon:t.jsx(x,{className:"h-8 w-8 text-brand-blue"}),name:"Stellar Studios",role:"Production Company",comment:"Professional, timely, and creative. Our go-to editor for all projects."},{id:3,icon:t.jsx(h,{className:"h-8 w-8 text-brand-purple"}),name:"Lisa Chen",role:"Content Creator",comment:"The color grading work is simply outstanding. Transformed my videos completely."},{id:4,icon:t.jsx(g,{className:"h-8 w-8 text-brand-light-purple"}),name:"PixelPerfect",role:"Gaming Channel",comment:"Fast turnarounds without compromising quality. Highly recommended!"}],_=({id:a})=>{const[i,n]=e.useState(null),[r,o]=e.useState(null),[l,c]=e.useState(!1);return e.useEffect((()=>{const e=new IntersectionObserver((([e])=>{e.isIntersecting&&c(!0)}),{threshold:.1}),t=document.getElementById("clients");return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[]),t.jsx("section",{id:a,className:"py-12 sm:py-20 bg-black","aria-labelledby":"clients-title",children:t.jsxs(s.div,{initial:{opacity:0},animate:l?{opacity:1}:{opacity:0},transition:{duration:.6,ease:"easeOut"},className:"container mx-auto px-3 sm:px-4 md:px-8",children:[t.jsxs("h2",{id:"clients-title",className:"text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 uppercase text-white",children:["CLIENTS",t.jsx("div",{className:"w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"})]}),t.jsx(s.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12",initial:{opacity:0},animate:l?{opacity:1}:{opacity:0},children:H.map(((e,a)=>t.jsxs(s.div,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,ease:"easeOut",delay:.1*a},className:f("client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-4 sm:p-6 rounded-lg transition-all duration-300","transform-gpu hover:scale-105 focus-within:scale-105","hover:border-brand-purple focus-within:border-brand-purple",(i===e.id||r===e.id)&&"border-brand-purple"),style:{animationDelay:.15*a+"s",willChange:"transform, opacity"},onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),tabIndex:0,role:"article","aria-labelledby":`client-${e.id}-name`,onFocus:()=>n(e.id),onBlur:()=>n(null),children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("div",{className:f("mr-3 transform-gpu transition-all duration-300",i===e.id||r===e.id?"scale-110":"animate-pulse-slow"),children:e.icon}),t.jsxs("div",{children:[t.jsx("h3",{id:`client-${e.id}-name`,className:"text-lg sm:text-xl font-semibold text-white glow-heading",children:e.name}),t.jsx("p",{className:"text-brand-light-purple text-xs sm:text-sm",children:e.role})]})]}),t.jsx("div",{className:"relative",children:t.jsxs("p",{className:f("text-gray-400 italic transition-all duration-300",(i===e.id||r===e.id)&&"transform-gpu translate-y-0.5"),children:['"',e.comment,'"']})})]},e.id)))})]})})},F=({id:a})=>{const[i,r]=e.useState(!1);return t.jsx("section",{id:a,className:"py-20 bg-brand-deepest-blue","aria-labelledby":"contact-title",children:t.jsxs("div",{className:"container mx-auto px-4 md:px-8 text-center",children:[t.jsx(s.h2,{id:"contact-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-6xl md:text-7xl font-bold mb-8 glow-heading",children:"LET'S GET SERIOUS"}),t.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-gray-300 max-w-2xl mx-auto mb-12",children:"Ready to enhance your visual content? Reach out through any of these channels and let's create something amazing together."}),t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:"flex flex-wrap justify-center items-center mb-12",children:[t.jsx("div",{className:"flex items-center justify-center mx-2 md:mx-3",children:t.jsx("a",{href:"https://instagram.com/maxingking101",target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2","aria-label":"Follow on Instagram",children:t.jsx(b,{className:"w-8 h-8 md:w-9 md:h-9","aria-hidden":"true"})})}),t.jsx("div",{className:"flex items-center justify-center ml-4 md:ml-6",children:t.jsx("a",{href:"https://twitter.com/maxingking101",target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2","aria-label":"Follow on Twitter",children:t.jsx(n,{className:"w-8 h-8 md:w-9 md:h-9","aria-hidden":"true"})})}),t.jsx("div",{className:"flex items-center justify-center mx-2 md:mx-3",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("img",{src:"/portfolio-test/Contact-icons/discord-logo.png",alt:"Discord",className:"w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-contain",loading:"lazy","aria-hidden":"true"}),t.jsx("span",{className:"text-gray-300 text-sm md:text-base -ml-2 md:-ml-3",children:"maxingking_"})]})}),t.jsx("div",{className:"flex items-center justify-center ml-4 md:ml-8",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(y,{className:"w-8 h-8 md:w-9 md:h-9 text-gray-400","aria-hidden":"true"}),t.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"maxingkingvfx@proton.me"})]})})]}),t.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"max-w-md mx-auto",children:t.jsx(s.button,{onClick:async()=>{r(!0),v.success("Connecting to Twitter..."),await new Promise((e=>setTimeout(e,1e3))),r(!1),window.open("https://twitter.com/maxingking101","_blank")},disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-full rounded-full py-3 text-white font-medium flex items-center justify-center gap-2 text-lg bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300","aria-label":"Connect on Twitter",children:t.jsx(c,{mode:"wait",children:i?t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-2",children:[t.jsx(l,{className:"h-5 w-5 animate-spin","aria-hidden":"true"}),t.jsx("span",{children:"Connecting..."})]},"loading"):t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-2",children:[t.jsx(n,{className:"h-5 w-5","aria-hidden":"true"}),t.jsx("span",{children:"Let's Connect"})]},"default")})})})]})})},Y=()=>((new Date).getFullYear(),t.jsx("footer",{className:"py-8 bg-black text-gray-400 text-center text-sm",children:t.jsx("div",{className:"container mx-auto px-4",children:t.jsx("p",{className:"mt-2"})})})),q=()=>t.jsxs("div",{className:"min-h-screen bg-brand-deepest-blue text-white",children:[t.jsx(k,{}),t.jsxs("main",{className:"flex flex-col",children:[t.jsx(E,{id:"hero"}),t.jsx(D,{id:"work"}),t.jsx(V,{id:"services"}),t.jsx(_,{id:"clients"}),t.jsx(F,{id:"contact"})]}),t.jsx(Y,{})]});export{q as default};
