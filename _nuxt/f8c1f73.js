(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,o){"use strict";var n={transition:{name:"layout",mode:"out-in"},mounted:function(){document.getElementById("loader").classList.add("loaded")}},r=o(11),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"loader",attrs:{id:"loader"}}),this._v(" "),e("Header"),this._v(" "),e("Nuxt"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:o(200).default,Footer:o(202).default})},147:function(t,e,o){o(148),t.exports=o(149)},192:function(t,e,o){var content=o(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(97).default)("12ba2d00",content,!0,{sourceMap:!1})},193:function(t,e,o){(e=o(96)(!1)).push([t.i,'*{box-sizing:border-box}body,html{scroll-behavior:smooth;cursor:none;background-color:#111018}.whole{overflow:hidden;top:0;left:0}.container,.whole{position:relative;width:100%}.container{min-height:calc(100vh - 200px);background-color:#111018;padding:30px 20px}@media(min-width:768px){.container{padding:0 40px}}.loader{z-index:1000;height:100vh;width:100vw;position:fixed;top:0;left:0;background-color:#111018;opacity:1}.loaded{-webkit-animation:loaded .5s forwards;animation:loaded .5s forwards}@-webkit-keyframes loaded{0%{opacity:1;z-index:1000}to{opacity:0;z-index:0}}@keyframes loaded{0%{opacity:1;z-index:1000}to{opacity:0;z-index:0}}a,h1,h2,h3,h4,h5,h6,p{color:#fff;opacity:.9;letter-spacing:1px;font-weight:400}@media(min-width:1200px){a,h1,h2,h3,h4,h5,h6,p{letter-spacing:1.5px}}h1,h2{z-index:10}h1{font-size:38px;line-height:72px}@media(min-width:768px){h1{font-size:55px;margin-bottom:25px}}h2{font-size:26px;line-height:38px}@media(min-width:768px){h2{font-size:42px;line-height:56px;margin-bottom:10px}}h3{font-size:22px;line-height:34px}@media(min-width:768px){h3{font-size:38px;line-height:52px;margin-bottom:10px}}p{text-align:justify;margin:20px 0;font-size:18px;max-width:500px}a{cursor:none;text-decoration:none;font-size:22px;transition:color .3s}a:hover{color:#ff5959;transition:color .5s}@media(min-width:768px){a{font-size:32px;letter-spacing:2px}}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.container{margin:0 auto;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.header{padding:0;position:relative;width:100%;display:flex;justify-content:center;z-index:100;min-height:120px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:#111018;margin-bottom:-1px}.header .header-bg{position:absolute;width:100%;opacity:.3;height:120px}@media(min-width:768px){.header .header-bg{height:100px}}.header .main-nav{z-index:10;display:none}@media(min-width:768px){.header .main-nav{display:block}}.header .hamburger{position:absolute;top:30px;left:30px;height:50px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:100}@media(min-width:768px){.header .hamburger{display:none}}.header .hamburger .line{position:relative;background-color:#fff;height:4px;width:50px;margin:11px 0;transition:.2s}.header .hamburger .animate{position:absolute;top:14px}.header .hamburger .animate:first-child{transform:rotate(45deg);transition:.2s}.header .hamburger .animate:nth-child(2){display:none}.header .hamburger .animate:nth-child(3){transform:rotate(-45deg);transition:.2s}.header .nav-mobile{z-index:10;position:relative;top:0;left:0;width:100%;display:none;justify-content:center;background-color:#111018;height:250px}@media(min-width:768px){.header .nav-mobile{display:none}}.header .nav-mobile nav ul{display:block;padding:16px}.header .nav-mobile nav ul li{margin:14px 0;text-align:center}.header .nav-shown{display:block;-webkit-animation:down .5s;animation:down .5s}@media(min-width:768px){.header .nav-shown{display:none}}@-webkit-keyframes down{0%{top:-200px}to{top:0}}@keyframes down{0%{top:-200px}to{top:0}}.header nav ul{list-style:none;display:flex;justify-content:space-between;padding:15px 25px;transition:transform .5s}.header nav ul:hover{transform:rotate(-.6deg);transition:.5s}.header nav ul li{margin:0 20px}.header .active{color:#ffd000;transition:color .3s}.header .active:hover,.header .nuxt-link-exact-active{color:#ff5959;transition:color .5s}.hamburger-animate{-webkit-animation:hamburger .2s linear;animation:hamburger .2s linear;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes hamburger{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes hamburger{0%{transform:scale(1)}to{transform:scale(0)}}.hero{z-index:1;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.hero-enter-active,.hero-leave-active{transition:opacity .3s}.hero-enter,.hero-leave-active{opacity:0}.cursor{width:50px;height:50px;background:#fa3d3d;border-radius:50%;transform:translate3d(-15px,-80px,0);transition-timing-function:ease-out;transition:background .5s;opacity:.5;z-index:1;position:absolute;-webkit-animation:cursorappear .5s ease-in;animation:cursorappear .5s ease-in}@media(min-width:1200px){.cursor{opacity:1}}.cursor .cursor-center{position:absolute;width:5px;height:5px;background-color:#8a2be2;border-radius:50%;transition:2s;-webkit-animation:glow 5s ease-in-out infinite;animation:glow 5s ease-in-out infinite}.blue{background:#013769}.blue,.steady{transition:background .5s}.steady{-webkit-animation:none!important;animation:none!important;background:#8a2be2!important}@-webkit-keyframes glow{0%{background-color:#8a2be2}40%{background-color:#fa3d3d}70%{background-color:#222}to{background-color:#8a2be2}}@keyframes glow{0%{background-color:#8a2be2}40%{background-color:#fa3d3d}70%{background-color:#222}to{background-color:#8a2be2}}@-webkit-keyframes cursorappear{0%{opacity:0}to{opacity:1}}@keyframes cursorappear{0%{opacity:0}to{opacity:1}}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background-color:#fa3d3d}::-webkit-scrollbar-thumb{background-color:#881f1f}.footer{position:relative;width:100%;padding:15px 0;display:flex;justify-content:center;z-index:100}.footer .footer-icons{max-width:320px;display:flex;justify-content:space-between}.footer .footer-icons a{margin:0 10px;cursor:none}.footer .footer-icons a img{height:40px;width:40px}@media(min-width:768px){.footer{position:relative;bottom:0;left:0}}.about{z-index:1}.about-enter-active,.about-leave-active{transition:opacity .3s}.about-enter,.about-leave-active{opacity:0}.contact{position:relative;width:320px;min-height:calc(100vh - 260px);display:flex;justify-content:center;align-items:center;z-index:100}.contact h2 a{color:#fa3d3d;text-shadow:2px 1px 1px #111018,-2px -2px 1px #111018,-1px 1px 1px #111018,1px -2px 1px #111018;font-size:26px;line-height:38px}@media(min-width:768px){.contact h2 a{font-size:42px;line-height:56px;margin-bottom:10px}}@media(min-width:768px){.contact{width:90%;height:80%;padding:50px}}.contact .contact-bg{display:none;position:absolute;bottom:-120px;width:inherit;height:100%;-o-object-fit:cover;object-fit:cover}@media(min-width:768px){.contact .contact-bg{-o-object-fit:fill;object-fit:fill}}@media(min-width:1200px){.contact .contact-bg{display:block}}.contact-enter-active,.contact-leave-active{transition:transform .3s}.contact-enter,.contact-leave-active{transform:translateX(-100vw)}.works{z-index:100;padding:65px 0;display:flex;flex-direction:column;justify-content:space-evenly;position:relative}.works .work{position:relative;padding:40px 0;text-align:left;border-bottom:2px solid rgba(255,75,75,.3)}.works .work .work-title{color:#fa3d3d;font-weight:bolder;text-shadow:2px 1px 1px #111018,-2px -2px 1px #111018,-1px 1px 1px #111018,1px -1px 1px #111018}.works .work .short-description{transition:opacity .5s}.works .work .transparent{opacity:.3;transition:opacity .5s}.works .work .long-description{height:0;transition:height .5s;opacity:0;transition:.3s}.works .work .long-description a,.works .work .long-description p{-webkit-animation:workdisappears .3s forwards;animation:workdisappears .3s forwards}.works .work .is-open{height:290px;transition:height .5s;display:block}@media(min-width:375px){.works .work .is-open{height:220px}}@media(min-width:768px){.works .work .is-open{height:170px}}.works .work .is-open a,.works .work .is-open p{-webkit-animation:workappears .3s forwards;animation:workappears .3s forwards}@-webkit-keyframes workappears{0%{opacity:0}to{opacity:1}}@keyframes workappears{0%{opacity:0}to{opacity:1}}@-webkit-keyframes workdisappears{0%{opacity:1}to{opacity:0}}@keyframes workdisappears{0%{opacity:1}to{opacity:0}}.works .work .work-link{opacity:.8;color:#f88a8a}@-webkit-keyframes glow2{0%{color:#fff}50%{color:#f88a8a}to{color:#fff}}@keyframes glow2{0%{color:#fff}50%{color:#f88a8a}to{color:#fff}}.works .hover-glower{height:40px;width:80px;background-color:#ffd000;position:absolute;top:100px;right:0;border-radius:50px;display:flex;justify-content:center;align-items:center;font-weight:700;letter-spacing:2px;transform:rotate(30deg);color:#111018;opacity:.5;-webkit-animation:glow3 5s ease-in-out infinite;animation:glow3 5s ease-in-out infinite}.works .hover-glower:after{font-size:14px;content:"TAP"}@media(min-width:1200px){.works .hover-glower:after{content:"HOVER"}}@-webkit-keyframes glow3{0%{opacity:.5}50%{opacity:.9}to{opacity:.5}}@keyframes glow3{0%{opacity:.5}50%{opacity:.9}to{opacity:.5}}.works-enter-active,.works-leave-active{transition:opacity .3s}.works-enter,.works-leave-active{opacity:0}.skills h3,.skills h4,.skills h5,.skills h6{margin:10px 0}.skills .skills-section{margin:40px 0}.skills .skills-section__glow h3,.skills .skills-section__glow h4,.skills .skills-section__glow h5,.skills .skills-section__glow h6{-webkit-animation:glow4 15s ease-in-out infinite;animation:glow4 15s ease-in-out infinite}@-webkit-keyframes glow4{0%{color:#8a2be2}40%{color:#fa3d3d}70%{color:#222}to{color:#8a2be2}}@keyframes glow4{0%{color:#8a2be2}40%{color:#fa3d3d}70%{color:#222}to{color:#8a2be2}}.skills-enter-active,.skills-leave-active{transition:opacity .3s}.skills-enter,.skills-leave-active{opacity:0}',""]),t.exports=e},194:function(t,e,o){t.exports=o.p+"img/1.d76f2b6.png"},196:function(t,e,o){t.exports=o.p+"img/facebukw.b15b501.png"},197:function(t,e,o){t.exports=o.p+"img/instagramw.819504d.png"},198:function(t,e,o){t.exports=o.p+"img/GitHubw.472739d.png"},199:function(t,e,o){t.exports=o.p+"img/linkedinw.4b3344b.png"},200:function(t,e,o){"use strict";o.r(e);o(30),o(34);var n={data:function(){return{navIsOpen:!1,navItems:[{text:"home",href:"/"},{text:"about",href:"/about"},{text:"work",href:"/work"},{text:"skills",href:"/skills"},{text:"contact",href:"/contact"}]}},methods:{openNav:function(){this.navIsOpen=!this.navIsOpen;var t=document.getElementsByClassName("line");console.log(t),t.forEach((function(line){line.classList.toggle("animate")}))}}},r=o(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("Cursorguy"),t._v(" "),n("img",{staticClass:"header-bg",attrs:{src:o(194)}}),t._v(" "),n("div",{staticClass:"hamburger",attrs:{id:"hamburger"},on:{click:function(e){return t.openNav()}}},[n("div",{staticClass:"line line-one"}),t._v(" "),n("div",{staticClass:"line line-two"}),t._v(" "),n("div",{staticClass:"line line-go"})]),t._v(" "),n("div",{staticClass:"nav-mobile",class:{"nav-shown":t.navIsOpen}},[n("nav",[n("ul",t._l(t.navItems,(function(e,o){return n("li",{key:o,attrs:{"v-if":t.navItems},on:{click:t.openNav}},[n("nuxt-link",{attrs:{to:e.href}},[t._v(t._s(e.text))])],1)})),0)])]),t._v(" "),n("div",{staticClass:"main-nav"},[n("nav",[n("ul",t._l(t.navItems,(function(e,o){return n("li",{key:o,staticClass:"main-nav-item",attrs:{"v-if":t.navItems}},[n("nuxt-link",{attrs:{to:e.href}},[t._v(t._s(e.text))])],1)})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cursorguy:o(201).default})},201:function(t,e,o){"use strict";o.r(e);o(50),o(30),o(195),o(33),o(34);var n={mounted:function(){var menu=Array.from(document.getElementsByTagName("a")),t=document.getElementById("mews"),e=Array.from(document.querySelectorAll(".cursor-center"));function o(t,e){return Math.random()*(e-t)+t}document.addEventListener("mousemove",(function(n){document.body.clientWidth>=1200&&t.setAttribute("style","position: fixed; top: ".concat(n.screenY-10,"px; left: ").concat(n.pageX-10,"px;"));for(var i=0;i<e.length;i++)e[i].setAttribute("style"," top: ".concat(n.screenY/(i+1)-o(0-50*(i+1),50*(i+1)),"px; left: ").concat(n.pageX/(i+1)-o(0-50*(i+1),50*(i+1)),"px;"))})),menu.forEach((function(o){o.addEventListener("mouseover",(function(){t.classList.add("blue"),e.forEach((function(t){t.classList.add("steady")}))})),o.addEventListener("mouseout",(function(){t.classList.remove("blue"),e.forEach((function(t){t.classList.remove("steady")}))}))}))}},r=o(11),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cursor",attrs:{id:"mews"}},[o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"}),t._v(" "),o("div",{staticClass:"cursor-center"})])}],!1,null,null,null);e.default=component.exports},202:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-icons"},[e("a",{attrs:{href:"https://www.facebook.com/arus.peter/",target:"_blank"}},[e("img",{attrs:{src:o(196),alt:"Facebook"}})]),this._v(" "),e("a",{attrs:{href:"https://www.instagram.com/aruspeter/",target:"_blank"}},[e("img",{attrs:{src:o(197),alt:"Instagram"}})]),this._v(" "),e("a",{attrs:{href:"https://github.com/aruspeter",target:"_blank"}},[e("img",{attrs:{src:o(198),alt:"GitHub"}})]),this._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/peterarus/",target:"_blank"}},[e("img",{attrs:{src:o(199),alt:"LinkedIn"}})])])])}],r=o(11),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports}},[[147,7,1,8]]]);