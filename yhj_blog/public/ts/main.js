(()=>{var h=class{galleryUID;items=[];constructor(t,r=1){if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=r,h.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let r=t.querySelectorAll("figure.gallery-image");for(let i of r){let n=i.querySelector("figcaption"),o=i.querySelector("img"),l={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:i};n&&(l.title=n.innerHTML),this.items.push(l)}}static createGallery(t){let r=t.querySelectorAll("img.gallery-image");for(let o of Array.from(r)){let l=o.closest("p");if(!l||!t.contains(l)||(l.textContent.trim()==""&&l.classList.add("no-text"),!l.classList.contains("no-text")))continue;let m=o.parentElement.tagName=="A",d=o,c=document.createElement("figure");if(c.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),c.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),m&&(d=o.parentElement),d.parentElement.insertBefore(c,d),c.appendChild(d),o.hasAttribute("alt")){let a=document.createElement("figcaption");a.innerText=o.getAttribute("alt"),c.appendChild(a)}if(!m){c.className="gallery-image";let a=document.createElement("a");a.href=o.src,a.setAttribute("target","_blank"),o.parentNode.insertBefore(a,o),a.appendChild(o)}}let i=t.querySelectorAll("figure.gallery-image"),n=[];for(let o of i)n.length?o.previousElementSibling===n[n.length-1]?n.push(o):n.length&&(h.wrap(n),n=[o]):n=[o];n.length>0&&h.wrap(n)}static wrap(t){let r=document.createElement("div");r.className="gallery";let i=t[0].parentNode,n=t[0];i.insertBefore(r,n);for(let o of t)r.appendChild(o)}open(t){let r=document.querySelector(".pswp");new window.PhotoSwipe(r,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:n=>{let o=this.items[n].el.getElementsByTagName("img")[0],l=window.pageYOffset||document.documentElement.scrollTop,s=o.getBoundingClientRect();return{x:s.left,y:s.top+l,w:s.width}}}).init()}bindClick(){for(let[t,r]of this.items.entries())r.el.querySelector("a").addEventListener("click",n=>{n.preventDefault(),this.open(t)})}},b=h;var u={};if(localStorage.hasOwnProperty("StackColorsCache"))try{u=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{u={}}async function v(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!u.hasOwnProperty(e)||u[e].hash!==t){let i=await Vibrant.from(r).getPalette();u[e]={hash:t,Vibrant:{hex:i.Vibrant.hex,rgb:i.Vibrant.rgb,bodyTextColor:i.Vibrant.bodyTextColor},DarkMuted:{hex:i.DarkMuted.hex,rgb:i.DarkMuted.rgb,bodyTextColor:i.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(u))}return u[e]}var B=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},N=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>window.getComputedStyle(e).display==="none"?N(e,t):B(e,t);function S(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),q(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function O(e,t,r){var i=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let o=t[n];n=="dangerouslySetInnerHTML"?i.innerHTML=o.__html:o===!0?i.setAttribute(n,n):o!==!1&&o!=null&&i.setAttribute(n,o.toString())}for(let n=2;n<arguments.length;n++){let o=arguments[n];o&&i.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return i}var w=O;var y=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",r=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let r=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(r)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},E=y;function g(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var V=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",T="#TableOfContents",L="#TableOfContents li",C="active-class";function R(e,t){let r=e.querySelector("a").offsetHeight,i=e.offsetTop-t.offsetHeight/2+r/2-t.offsetTop;i<0&&(i=0),t.scrollTo({top:i,behavior:"smooth"})}function U(e){let t={};return e.forEach(r=>{let n=r.querySelector("a").getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=r)}),t}function k(e){let t=[];return e.forEach(r=>{t.push({id:r.id,offset:r.offsetTop})}),t.sort((r,i)=>r.offset-i.offset),t}function M(){let e=document.querySelectorAll(V);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(T);if(!t){console.warn("No toc matched query",T);return}let r=document.querySelectorAll(L);if(!r){console.warn("No navigation matched query",L);return}let i=k(e),n=!1;t.addEventListener("mouseenter",g(()=>n=!0)),t.addEventListener("mouseleave",g(()=>n=!1));let o,l=U(r);function s(){let d=document.documentElement.scrollTop||document.body.scrollTop,c;i.forEach(f=>{d>=f.offset-20&&(c=document.getElementById(f.id))});let a;c&&(a=l[c.id]),c&&!a?console.debug("No link found for section",c):a!==o&&(o&&o.classList.remove(C),a&&(a.classList.add(C),n||R(a,t)),o=a)}window.addEventListener("scroll",g(s));function m(){i=k(e),s()}window.addEventListener("resize",g(m))}var $="a[href]";function P(){document.querySelectorAll($).forEach(e=>{e.getAttribute("href").startsWith("#")&&e.addEventListener("click",r=>{r.preventDefault();let i=decodeURI(e.getAttribute("href").substring(1)),n=document.getElementById(i),o=n.getBoundingClientRect().top-document.documentElement.getBoundingClientRect().top;window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:o,behavior:"smooth"})})})}var x={init:()=>{S();let e=document.querySelector(".article-content");e&&(new b(e),P(),M());let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(s,m)=>{s.forEach(d=>{if(!d.isIntersecting)return;m.unobserve(d.target),d.target.querySelectorAll("article.has-image").forEach(async a=>{let f=a.querySelector("img"),I=f.src,H=f.getAttribute("data-key"),A=f.getAttribute("data-hash"),D=a.querySelector(".article-details"),p=await v(H,A,I);D.style.background=`
                        linear-gradient(0deg, 
                            rgba(${p.DarkMuted.rgb[0]}, ${p.DarkMuted.rgb[1]}, ${p.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${p.Vibrant.rgb[0]}, ${p.Vibrant.rgb[1]}, ${p.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(t);var r=document.getElementsByClassName("highlight");r!=null&&(console.info(r),Array.prototype.forEach.call(r,o));function i(l){var s=window.getSelection(),m=document.createRange();return m.selectNodeContents(l),s.removeAllRanges(),s.addRange(m),s}function n(l,s){l.textContent=s,setTimeout(function(){l.textContent="Copy"},1e3)}function o(l){var s=document.createElement("button");s.className="highlight-copy-btn",s.textContent="Copy";var m=l.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1];s.addEventListener("click",function(){try{var d=i(m);document.execCommand("copy"),d.removeAllRanges(),n(s,"Copied!")}catch(c){console&&console.log(c),n(s,"Failed :'(")}}),l.appendChild(s)}new E(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){x.init()},0)});window.Stack=x;window.createElement=w;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
