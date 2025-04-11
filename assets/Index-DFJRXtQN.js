import{r as e,j as t,C as a,g as i,q as s,v as n,P as r,w as l,L as o,A as d,F as c,x as m,M as u,U as p,y as x,S as g,z as h,I as b,B as y,J as f}from"./vendor-BDwFrlc3.js";import{c as v}from"./index-BPuWuAdn.js";import{S as j}from"./radix-ui-CxhpDnBu.js";const w=[{id:"work",label:"Work"},{id:"services",label:"Services"},{id:"clients",label:"Clients"},{id:"contact",label:"Contact"}],N=()=>{window.scrollTo({top:0,behavior:"smooth"})},k=()=>{const[i,s]=e.useState(!1),[n,r]=e.useState(!1),[l,o]=e.useState(""),d=e.useRef(null);return e.useEffect((()=>{const e=()=>{var e;const t=window.scrollY,a=null==(e=d.current)?void 0:e.dataset.lastScroll;s(t>50),r(t>200);const i=w.map((e=>document.getElementById(e.id))),n=.33*window.innerHeight;for(let s=i.length-1;s>=0;s--){const e=i[s];if(e&&e.offsetTop<=t+n){o(w[s].id);break}}a&&Math.abs(t-parseInt(a))<10||d.current&&(d.current.dataset.lastScroll=t.toString())};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),t.jsxs("nav",{ref:d,className:v("fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",i?"bg-brand-deepest-blue/90 backdrop-blur-sm py-1 sm:py-2 shadow-lg":"bg-transparent py-2 sm:py-4"),role:"navigation","aria-label":"Main navigation",children:[t.jsxs("div",{className:"container mx-auto px-3 md:px-8 flex justify-between items-center",children:[t.jsx("a",{href:"#",onClick:e=>{e.preventDefault(),N()},className:"text-brand-light-purple text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-md px-1 sm:px-2","aria-label":"Back to top",children:t.jsxs("span",{className:"group",children:[t.jsx("span",{className:"block",children:"MaxingKing"}),t.jsx("span",{className:"block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"})]})}),t.jsx("div",{className:"flex items-center gap-2 sm:gap-4 md:gap-8",role:"menubar","aria-label":"Navigation menu",children:w.map((e=>t.jsx("button",{onClick:()=>(e=>{const t=document.getElementById(e);if(t){const e=70,a=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:a,behavior:"smooth"})}})(e.id),className:v("text-white hover:text-brand-light-purple transition-colors duration-300 ease-in-out text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",l===e.id&&"text-brand-light-purple"),role:"menuitem","aria-current":l===e.id?"page":void 0,children:t.jsxs("span",{className:"group",children:[t.jsx("span",{className:"block",children:e.label}),t.jsx("span",{className:"block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"})]})},e.id)))})]}),n&&t.jsx("button",{onClick:N,className:"fixed bottom-13 sm:bottom-13 right-4 sm:right-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-brand-purple text-white rounded-md shadow-lg hover:bg-brand-light-purple transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2","aria-label":"Scroll back to top",children:t.jsx(a,{className:"h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ease-in-out group-hover:rotate-180","aria-hidden":"true"})})]})},C=i("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),R=e.forwardRef((({className:e,variant:a,size:i,asChild:s=!1,...n},r)=>{const l=s?j:"button";return t.jsx(l,{className:v(C({variant:a,size:i,className:e})),ref:r,...n})}));R.displayName="Button";const T=({id:a})=>{const i=e.useRef(null);return t.jsxs(s.section,{ref:i,id:a,className:"h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden","aria-labelledby":"hero-title",initial:{opacity:0,y:20,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut",scale:{duration:.8}},children:[t.jsxs(s.div,{className:"absolute inset-0","aria-hidden":"true",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.2,ease:"easeOut"},children:[t.jsx(s.img,{src:"/portfolio/Background-image/timeline-editing.png",alt:"Enhance Your Content",className:"absolute inset-0 w-full h-full object-cover",style:{transform:"scale(1.4) translateX(2.9%)",opacity:"0.9"},loading:"eager",fetchPriority:"high",width:1920,height:1080,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.3,ease:"easeOut"}}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0c0c1d]/80 via-[#1a1a2e]/90 to-[#1a1a2e]"})]}),t.jsxs(s.div,{className:"container text-center max-w-4xl relative z-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6,ease:"easeOut"},children:[t.jsxs(s.h1,{id:"hero-title",className:"text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight",initial:{opacity:0,y:20,skew:"-5deg"},animate:{opacity:1,y:0,skew:"0deg"},transition:{delay:.5,duration:.6,ease:"easeOut"},children:["It's Time To ",t.jsx("span",{className:"enhance-text",children:"ENHANCE"})," Your Content"]}),t.jsx(s.p,{className:"text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12",initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:.6,duration:.6,ease:"easeOut"},children:"Taking your content to the next level with professional editing"}),t.jsxs(s.div,{className:"flex flex-col sm:flex-row gap-4 justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,duration:.6,ease:"easeOut"},children:[t.jsxs("a",{href:"https://x.com/MaxingKingVFX",target:"_blank",rel:"noopener noreferrer",className:"group rounded-full px-6 py-4 md:px-8 md:py-6 text-white font-medium flex items-center gap-2 justify-center bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple relative overflow-hidden transition-all duration-300 text-lg md:text-xl hover:shadow-lg hover:shadow-purple-500/20","aria-label":"Connect on Twitter",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"}),t.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[t.jsx(n,{className:"h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12","aria-hidden":"true"}),t.jsx("span",{className:"transition-transform duration-300 group-hover:-translate-y-1",children:"Let's Talk"})]})]}),t.jsxs(R,{onClick:()=>{const e=document.getElementById("work");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},variant:"outline",className:"group rounded-full px-6 py-4 md:px-8 md:py-6 border-gray-700 hover:bg-transparent text-white font-medium flex items-center gap-2 relative overflow-hidden transition-all duration-300","aria-label":"View portfolio work",children:[t.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-blue/10 via-brand-light-purple/10 to-brand-purple/10"}),t.jsx(r,{className:"h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1","aria-hidden":"true"}),t.jsx("span",{className:"transition-transform duration-300 group-hover:translate-x-1",children:"Watch My Work"})]})]})]})]})};var E=(e=>(e.Gaming="Gaming",e.LongForm="Long-form",e.ShortForm="Short-form",e))(E||{});const S="rgba(255, 255, 255, 0.1)",I="1.03",L="#2a2a2a",O="#1a1a1a",F="0.4s",G=(e,t=!1)=>{if("vimeo"===e.videoType&&e.videoId){const a=t?"&autoplay=1&autopause=0":"",i=e.videoHash?`h=${e.videoHash}`:"";return`https://player.vimeo.com/video/${e.videoId}?${i}&title=0&byline=0&portrait=0&badge=0&dnt=1&responsive=1&quality=auto${a}`}if("youtube"===e.videoType&&e.videoId){const a=t?"&autoplay=1&mute=1":"";return`https://www.youtube.com/embed/${e.videoId}?rel=0&showinfo=0${a}`}return""},B={1:{title:"ZBRA",videoTitle:"Fine, I'll Do It Myself.",category:"Gaming",subCategory:"Re-edits",imageUrl:"https://i.ibb.co/0jjgJ7T0/thumb-1.jpg",videoType:"vimeo",videoId:"1074270789",videoHash:"8538c1e45e",thumbnailUrl:"https://i.ibb.co/GfKvBsKb/a98525a4-563d-4e02-b78a-143e815ee444.jpg",duration:"0:55",description:"If I edited ZBRA's video",editingTechniques:["Color Grading","SFX","Voice lines","Equalization"],id:1},2:{title:"Bellaboo OW",videoTitle:"This Wrecking Ball Perk is Actually BROKEN!",category:"Gaming",subCategory:"Re-edits",imageUrl:"https://i.ibb.co/My2NsbBr/thumb.jpg",videoType:"vimeo",videoId:"1074265085",videoHash:"495fb1c813",thumbnailUrl:"https://i.ibb.co/HDZL4ZH7/pgq5w-Wy-KFl-E-HD.jpg",duration:"0:27",description:"If I was Bellaboo's Editor",editingTechniques:["Color Grading","SFX","Visual Effects","Equalization"],id:2},3:{title:"UnsaltedSalt",videoTitle:"This is WHY R.E.P.O. is The BEST Extraction Game",category:"Gaming",subCategory:"Recent works",imageUrl:"https://i.ibb.co/Y4NY0wpT/thumb.jpg",videoType:"vimeo",videoId:"1074652341",videoHash:"fb04a95288",thumbnailUrl:"https://i.ibb.co/7N6c6yFR/REPO.png",duration:"0:58",description:"Content Highlights for UnsaltedSalt R.E.P.O's gameplay",editingTechniques:["Color Grading","SFX","Transitions","Equalization","POV"],id:3}},P=(e=>{const t={1:1,2:2,3:3,4:4,5:5,6:6};return[...e].sort(((e,a)=>(t[e.id]??e.id)-(t[a.id]??a.id))).slice(0,6)})([...Object.values(B).filter((e=>"Gaming"===e.category)),...Object.values(B).filter((e=>"Short-form"===e.category)),...Object.values(B).filter((e=>"Long-form"===e.category))]),V=e.memo((({project:e,onProjectClick:a,isLoading:i,onImageLoad:n})=>{const[r,d]=l({threshold:.1,triggerOnce:!0});return t.jsxs(s.div,{ref:r,initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"rounded-lg overflow-hidden group relative cursor-pointer",onClick:()=>a(e),onKeyDown:t=>"Enter"===t.key&&a(e),tabIndex:0,role:"button","aria-label":`View ${e.title} project`,style:{"--card-hover-bg":S,"--card-hover-scale":I,"--gradient-start":L,"--gradient-end":O,"--transition-duration":F},whileHover:{scale:1.02,transition:{duration:.3,ease:"easeInOut"}},whileTap:{scale:.98},children:[i&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-900",children:t.jsx(o,{className:"w-8 h-8 animate-spin text-brand-purple"})}),t.jsx("img",{src:e.imageUrl,alt:`${e.title} project`,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]",onLoad:n}),t.jsxs("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex flex-col justify-end p-4",children:[t.jsx(s.p,{className:"text-sm text-gray-300 transition-colors duration-300 group-hover:text-white",initial:{y:0,opacity:1},children:e.category}),t.jsx(s.h3,{className:"text-lg font-semibold text-white mt-2 glow-heading",initial:{y:0,opacity:1},children:e.title})]})]},e.id)})),H=e.memo((({project:a,isLoading:i,onLoad:s})=>{const n=e.useCallback((()=>{s()}),[s]),r=e.useCallback((e=>{console.error("Video player error:",e)}),[]);return t.jsxs("div",{className:"relative w-full h-full",children:[i&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:t.jsx(o,{className:"w-8 h-8 animate-spin text-brand-purple"})}),t.jsx("iframe",{src:G(a,!0),className:"w-full h-full",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media",allowFullScreen:!0,title:a.title,onLoad:n,onError:r,"aria-label":`${a.title} video player`})]})})),z=({id:a})=>{const[i,n]=e.useState(null),[l,o]=e.useState(!1),[c,m]=e.useState(!1),[u,p]=e.useState("all"),[x,g]=e.useState(""),h=e.useRef(null),b=e.useMemo((()=>{if("all"===u)return P;let e=P.filter((e=>e.category===u));return x&&(e=e.filter((e=>"Gaming"===e.category||"Short-form"===e.category?e.subCategory===x:"Long-form"!==e.category||e.subCategory===x))),e}),[u,x,P]),y=e.useCallback((e=>{n(e)}),[]),f=e.useCallback((()=>{n(null),o(!1)}),[]),v=e.useCallback((e=>{"Escape"===e.key&&f()}),[f]),j=e.useCallback((e=>{"Escape"===e.key&&f()}),[f]);e.useEffect((()=>(document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)})),[v]);const w=e.useCallback((e=>{h.current&&!h.current.contains(e.target)&&f()}),[f,h]);e.useEffect((()=>(i&&document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)})),[i,f]);const N=e.useCallback((()=>{m(!1)}),[]);return t.jsx("section",{id:a,className:"py-16 px-4 sm:px-6 lg:px-8 min-h-screen","aria-label":"Work portfolio",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("h2",{className:"text-5xl sm:text-6xl font-bold text-center mb-12 text-white glow-heading",children:"My Work"}),t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"hidden md:flex flex-wrap gap-2 justify-center",children:[t.jsx("button",{onClick:()=>{p("all"),g("")},className:"px-6 py-3 rounded-full text-base font-medium "+("all"===u?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),"aria-current":"all"===u?"page":void 0,children:"All"}),Object.values(E).map((e=>t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx("button",{onClick:()=>{p(e),"Gaming"===e&&"Gaming"===u&&g(""),"Gaming"!==e&&g("")},className:"px-6 py-3 rounded-full text-base font-medium "+(u===e?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),"aria-current":u===e?"page":void 0,children:e}),"Gaming"===e&&"Gaming"===u&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>{g("Recent works"===x?"":"Recent works")},className:"px-6 py-3 rounded-full text-base font-medium "+("Recent works"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Recent works"}),t.jsx("button",{onClick:()=>{g("Re-edits"===x?"":"Re-edits")},className:"px-6 py-3 rounded-full text-base font-medium "+("Re-edits"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Re-edits"})]}),"Long-form"===e&&"Long-form"===u&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>{g("Recent works"===x?"":"Recent works")},className:"px-6 py-3 rounded-full text-base font-medium "+("Recent works"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Recent works"}),t.jsx("button",{onClick:()=>{g("Re-edits"===x?"":"Re-edits")},className:"px-6 py-3 rounded-full text-base font-medium "+("Re-edits"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Re-edits"})]}),"Short-form"===e&&"Short-form"===u&&t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>{g("Recent works"===x?"":"Recent works")},className:"px-6 py-3 rounded-full text-base font-medium "+("Recent works"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Recent works"}),t.jsx("button",{onClick:()=>{g("Re-edits"===x?"":"Re-edits")},className:"px-6 py-3 rounded-full text-base font-medium "+("Re-edits"===x?"bg-brand-purple text-white":"bg-gray-800 hover:bg-gray-700"),children:"Re-edits"})]})]},e)))]}),t.jsxs("div",{className:"md:hidden",children:[t.jsxs("select",{value:u,onChange:e=>{const t=e.target.value;p(t),"all"!==t&&g("")},className:"w-full px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple",children:[t.jsx("option",{value:"all",children:"All Categories"}),Object.values(E).map((e=>t.jsx("option",{value:e,children:e},e)))]}),"all"!==u&&t.jsxs("select",{value:x,onChange:e=>g(e.target.value),className:"w-full px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium mt-2 focus:outline-none focus:ring-2 focus:ring-brand-purple",children:[t.jsx("option",{value:"",children:"All Subcategories"}),"Gaming"===u&&t.jsxs(t.Fragment,{children:[t.jsx("option",{value:"Recent works",children:"Recent works"}),t.jsx("option",{value:"Re-edits",children:"Re-edits"})]}),"Long-form"===u&&t.jsxs(t.Fragment,{children:[t.jsx("option",{value:"Recent works",children:"Recent works"}),t.jsx("option",{value:"Re-edits",children:"Re-edits"})]}),"Short-form"===u&&t.jsxs(t.Fragment,{children:[t.jsx("option",{value:"Recent works",children:"Recent works"}),t.jsx("option",{value:"Re-edits",children:"Re-edits"})]})]})]})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map((e=>t.jsx(V,{project:e,onProjectClick:y,isLoading:c,onImageLoad:N},e.id)))}),t.jsx(d,{children:i&&t.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center",onClick:f,onKeyDown:j,role:"dialog","aria-labelledby":`modal-${i.id}`,"aria-modal":"true",tabIndex:-1,children:t.jsx(s.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},transition:{duration:.3},className:"bg-brand-deepest-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto m-auto",ref:h,onClick:e=>e.stopPropagation(),children:t.jsxs("div",{className:"p-3 sm:p-6",children:[t.jsxs("div",{className:"flex justify-between items-center mb-4",children:[t.jsx("h3",{id:`modal-${i.id}`,className:"text-xl sm:text-2xl font-bold glow-heading",children:i.videoTitle||i.title}),t.jsx("button",{onClick:f,className:"text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800","aria-label":"Close modal",children:"✕"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-sm text-gray-400",children:"Duration:"}),t.jsx("span",{className:"text-sm font-medium",children:i.duration})]}),t.jsx("span",{className:"text-sm text-gray-400",children:i.category})]}),t.jsx("div",{className:"aspect-video bg-black rounded-lg mb-4 overflow-hidden relative",children:i.videoType&&"none"!==i.videoType?l?t.jsx(H,{project:i,isLoading:c,onLoad:()=>m(!1)}):t.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full h-full relative cursor-pointer group overflow-hidden",onClick:()=>{o(!0)},onKeyDown:e=>"Enter"===e.key&&o(!0),tabIndex:0,role:"button","aria-label":`Play ${i.title} video`,children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all duration-300"}),t.jsx("img",{src:(k=i,k.thumbnailUrl||k.imageUrl),alt:`${i.title} thumbnail`,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"}),t.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:t.jsx("div",{className:"bg-brand-purple/90 rounded-full p-4 transform group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-12 h-12 text-white"})})})]}):t.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]",width:1280,height:720,loading:"eager"})}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"text-gray-300",children:[t.jsx("h4",{className:"font-semibold mb-3 text-lg",children:"Description"}),t.jsx("p",{className:"text-gray-400 leading-relaxed",children:i.description})]}),t.jsxs("div",{className:"text-gray-300",children:[t.jsx("h4",{className:"font-semibold mb-3 text-lg",children:"Editing Techniques Used"}),t.jsx("div",{className:"flex flex-wrap gap-3",children:i.editingTechniques.map((e=>t.jsx("span",{className:"px-3 py-1.5 bg-gradient-to-r from-brand-purple/30 to-brand-purple/20 rounded-full text-sm font-medium",children:e},e)))})]}),i.clientTestimonial&&t.jsxs("div",{className:"text-gray-300",children:[t.jsx("h4",{className:"font-semibold mb-3 text-lg",children:"Client Feedback"}),t.jsxs("blockquote",{className:"text-gray-400 italic text-lg leading-relaxed",children:['"',i.clientTestimonial,'"']}),t.jsxs("p",{className:"text-gray-400 mt-4 font-medium",children:["-",i.clientName]})]})]})]})]})})})})]})});var k},M=[{id:1,icon:t.jsx(c,{className:"h-7 w-7 text-brand-blue"}),title:"Video Editing",description:"Transform your raw footage into compelling, polished content.",details:"Professional video editing services including transitions, effects, color correction, and timing adjustments."},{id:2,icon:t.jsx(m,{className:"h-7 w-7 text-brand-purple"}),title:"Color Grading",description:"Color correction and grading to give your content the perfect visual tone and mood.",details:"Expert color grading to enhance visual appeal, maintain consistency, and create distinctive looks."},{id:3,icon:t.jsx(u,{className:"h-7 w-7 text-brand-light-purple"}),title:"Sound Design",description:"Audio mixing and sound effects to create the perfect auditory experience.",details:"Professional audio enhancement, background music selection, and sound effect integration."}],U=e.memo((({service:e,index:a})=>t.jsxs(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.15*a},viewport:{once:!0},className:"service-card h-auto sm:h-100 p-4 sm:p-6 flex flex-col justify-center items-start rounded-lg bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg hover:from-black/70 hover:to-black/50 transition-all duration-300",children:[t.jsx("div",{className:"mb-4",children:e.icon}),t.jsx(s.h3,{className:"text-lg sm:text-xl font-semibold mb-2 text-white glow-heading",whileHover:{scale:1.05},transition:{duration:.3},children:e.title}),t.jsx("p",{className:"text-gray-400 leading-relaxed transition-colors duration-300 hover:text-white/90",children:e.description})]},e.id))),$=e.memo((({id:e})=>t.jsx("section",{id:e,className:"py-12 sm:py-20 bg-black","aria-labelledby":"services-title",children:t.jsxs("div",{className:"container mx-auto px-3 sm:px-4 md:px-8",children:[t.jsx(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:t.jsxs("h2",{id:"services-title",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 uppercase text-white",children:["SERVICES",t.jsx("div",{className:"w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"})]})}),t.jsx(d,{children:t.jsx(s.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0},children:M.map(((e,a)=>t.jsx(U,{service:e,index:a},e.id)))})})]})}))),q=[{id:1,icon:t.jsx(p,{className:"h-8 w-8 text-brand-light-purple"}),name:"John Roberts",role:"YouTuber",comment:"MaxingKing's edits took my content to another level. The quality speaks for itself."},{id:2,icon:t.jsx(x,{className:"h-8 w-8 text-brand-blue"}),name:"Stellar Studios",role:"Production Company",comment:"Professional, timely, and creative. Our go-to editor for all projects."},{id:3,icon:t.jsx(g,{className:"h-8 w-8 text-brand-purple"}),name:"Lisa Chen",role:"Content Creator",comment:"The color grading work is simply outstanding. Transformed my videos completely."},{id:4,icon:t.jsx(h,{className:"h-8 w-8 text-brand-light-purple"}),name:"PixelPerfect",role:"Gaming Channel",comment:"Fast turnarounds without compromising quality. Highly recommended!"}],D=({id:a})=>{const[i,n]=e.useState(null),[r,l]=e.useState(null),[o,d]=e.useState(!1);return e.useEffect((()=>{const e=new IntersectionObserver((([e])=>{e.isIntersecting&&d(!0)}),{threshold:.1}),t=document.getElementById("clients");return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[]),t.jsx("section",{id:a,className:"py-12 sm:py-20 bg-black","aria-labelledby":"clients-title",children:t.jsxs(s.div,{initial:{opacity:0},animate:o?{opacity:1}:{opacity:0},transition:{duration:.6,ease:"easeOut"},className:"container mx-auto px-3 sm:px-4 md:px-8",children:[t.jsxs("h2",{id:"clients-title",className:"text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 uppercase text-white",children:["CLIENTS",t.jsx("div",{className:"w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"})]}),t.jsx(s.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12",initial:{opacity:0},animate:o?{opacity:1}:{opacity:0},children:q.map(((e,a)=>t.jsxs(s.div,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,ease:"easeOut",delay:.1*a},className:v("client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-4 sm:p-6 rounded-lg transition-all duration-300","transform-gpu hover:scale-105 focus-within:scale-105","hover:border-brand-purple focus-within:border-brand-purple",(i===e.id||r===e.id)&&"border-brand-purple"),style:{animationDelay:.15*a+"s",willChange:"transform, opacity"},onMouseEnter:()=>l(e.id),onMouseLeave:()=>l(null),tabIndex:0,role:"article","aria-labelledby":`client-${e.id}-name`,onFocus:()=>n(e.id),onBlur:()=>n(null),children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("div",{className:v("mr-3 transform-gpu transition-all duration-300",i===e.id||r===e.id?"scale-110":"animate-pulse-slow"),children:e.icon}),t.jsxs("div",{children:[t.jsx("h3",{id:`client-${e.id}-name`,className:"text-lg sm:text-xl font-semibold text-white glow-heading",children:e.name}),t.jsx("p",{className:"text-brand-light-purple text-xs sm:text-sm",children:e.role})]})]}),t.jsx("div",{className:"relative",children:t.jsxs("p",{className:v("text-gray-400 italic transition-all duration-300",(i===e.id||r===e.id)&&"transform-gpu translate-y-0.5"),children:['"',e.comment,'"']})})]},e.id)))})]})})},K=({id:a})=>{const[i,r]=e.useState(!1);return t.jsx("section",{id:a,className:"py-20 bg-brand-deepest-blue","aria-labelledby":"contact-title",children:t.jsxs("div",{className:"container mx-auto px-4 md:px-8 text-center",children:[t.jsx(s.h2,{id:"contact-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-6xl md:text-7xl font-bold mb-8 glow-heading",children:"LET'S GET SERIOUS"}),t.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-gray-300 max-w-2xl mx-auto mb-12",children:"Ready to enhance your visual content? Reach out through any of these channels and let's create something amazing together."}),t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:"flex flex-wrap justify-center items-center mb-12",children:[t.jsx("div",{className:"flex items-center justify-center mx-2 md:mx-3",children:t.jsx("a",{href:"https://instagram.com/maxingking101",target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2","aria-label":"Follow on Instagram",children:t.jsx(b,{className:"w-8 h-8 md:w-9 md:h-9","aria-hidden":"true"})})}),t.jsx("div",{className:"flex items-center justify-center ml-4 md:ml-6",children:t.jsx("a",{href:"https://x.com/MaxingKingVFX",target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2","aria-label":"Follow on Twitter",children:t.jsx(n,{className:"w-8 h-8 md:w-9 md:h-9","aria-hidden":"true"})})}),t.jsx("div",{className:"flex items-center justify-center mx-2 md:mx-3",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("img",{src:"/portfolio/Contact-icons/discord-logo.png",alt:"Discord",className:"w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-contain",loading:"lazy","aria-hidden":"true"}),t.jsx("span",{className:"text-gray-300 text-sm md:text-base -ml-2 md:-ml-3",children:"maxingking_"})]})}),t.jsx("div",{className:"flex items-center justify-center ml-4 md:ml-8",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(y,{className:"w-8 h-8 md:w-9 md:h-9 text-gray-400","aria-hidden":"true"}),t.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"maxingkingvfx@proton.me"})]})})]}),t.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"max-w-md mx-auto",children:t.jsx(s.button,{onClick:async()=>{r(!0),f.success("Connecting to Twitter..."),await new Promise((e=>setTimeout(e,1e3))),r(!1),window.open("https://x.com/MaxingKingVFX","_blank")},disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-full rounded-full py-3 text-white font-medium flex items-center justify-center gap-2 text-lg bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300","aria-label":"Connect on Twitter",children:t.jsx(d,{mode:"wait",children:i?t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-2",children:[t.jsx(o,{className:"h-5 w-5 animate-spin","aria-hidden":"true"}),t.jsx("span",{children:"Connecting..."})]},"loading"):t.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-2",children:[t.jsx(n,{className:"h-5 w-5","aria-hidden":"true"}),t.jsx("span",{children:"Let's Connect"})]},"default")})})})]})})},A=()=>((new Date).getFullYear(),t.jsx("footer",{className:"py-8 bg-black text-gray-400 text-center text-sm",children:t.jsx("div",{className:"container mx-auto px-4",children:t.jsx("p",{className:"mt-2"})})})),W=()=>t.jsxs("div",{className:"min-h-screen bg-brand-deepest-blue text-white",children:[t.jsx(k,{}),t.jsxs("main",{className:"flex flex-col",children:[t.jsx(T,{id:"hero"}),t.jsx(z,{id:"work"}),t.jsx($,{id:"services"}),t.jsx(D,{id:"clients"}),t.jsx(K,{id:"contact"})]}),t.jsx(A,{})]});export{W as default};
