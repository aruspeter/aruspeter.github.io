(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{194:function(t,n,e){t.exports=e.p+"img/1.d76f2b6.png"},195:function(t,n,e){var r=e(2),o=e(146);r({target:"Array",stat:!0,forced:!e(145)((function(t){Array.from(t)}))},{from:o})},196:function(t,n,e){t.exports=e.p+"img/facebukw.b15b501.png"},197:function(t,n,e){t.exports=e.p+"img/instagramw.819504d.png"},198:function(t,n,e){t.exports=e.p+"img/GitHubw.472739d.png"},199:function(t,n,e){t.exports=e.p+"img/linkedinw.4b3344b.png"},200:function(t,n,e){"use strict";e.r(n);e(48),e(34),e(100),e(49);var r={data:function(){return{navIsOpen:!1}},methods:{openNav:function(){this.navIsOpen=!this.navIsOpen;var t=document.getElementsByClassName("line");console.log(t),t.forEach((function(line){line.classList.toggle("animate")}))},notHome:function(){return""!=window.location.href.split("/")[3]},notAbout:function(){return"about"!=window.location.href.split("/")[3]},notWorks:function(){return"works"!=window.location.href.split("/")[3]},notSkills:function(){return"skills"!=window.location.href.split("/")[3]},notContact:function(){return"contact"!=window.location.href.split("/")[3]}}},o=e(27),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"header"},[r("Cursorguy"),t._v(" "),r("img",{staticClass:"header-bg",attrs:{src:e(194)}}),t._v(" "),r("div",{staticClass:"hamburger",attrs:{id:"hamburger"},on:{click:function(n){return t.openNav()}}},[r("div",{staticClass:"line line-one"}),t._v(" "),r("div",{staticClass:"line line-two"}),t._v(" "),r("div",{staticClass:"line line-go"})]),t._v(" "),r("div",{staticClass:"nav-mobile",class:{"nav-shown":t.navIsOpen}},[r("nav",[r("ul",[t.notHome()?r("li",[r("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[t._v("back to home")])],1):t._e(),t._v(" "),t.notAbout()?r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("about me")])],1):t._e(),t._v(" "),t.notSkills()?r("li",[r("nuxt-link",{attrs:{to:"/skills"}},[t._v("skills")])],1):t._e(),t._v(" "),t.notWorks()?r("li",[r("nuxt-link",{attrs:{to:"/work"}},[t._v("works")])],1):t._e(),t._v(" "),t.notContact()?r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("contact")])],1):t._e()])])]),t._v(" "),r("div",{staticClass:"main-nav"},[r("nav",[r("ul",[t.notHome()?r("li",[r("nuxt-link",{staticClass:"active",attrs:{to:"/"}},[t._v("back to home")])],1):t._e(),t._v(" "),t.notAbout()?r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("about me")])],1):t._e(),t._v(" "),t.notSkills()?r("li",[r("nuxt-link",{attrs:{to:"/skills"}},[t._v("skills")])],1):t._e(),t._v(" "),t.notWorks()?r("li",[r("nuxt-link",{attrs:{to:"/work"}},[t._v("works")])],1):t._e(),t._v(" "),t.notContact()?r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("contact")])],1):t._e()])])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Cursorguy:e(201).default})},201:function(t,n,e){"use strict";e.r(n);e(62),e(48),e(195),e(35),e(49);var r={mounted:function(){var menu=Array.from(document.getElementsByTagName("a")),t=document.getElementById("mews"),n=Array.from(document.querySelectorAll(".cursor-center"));function e(t,n){return Math.random()*(n-t)+t}document.addEventListener("mousemove",(function(r){t.setAttribute("style","top: ".concat(r.pageY-10,"px; left: ").concat(r.pageX-10,"px;"));for(var i=0;i<n.length;i++)n[i].setAttribute("style","top: ".concat(r.pageY/(i+1)-e(0-50*(i+1),50*(i+1)),"px; left: ").concat(r.pageX/(i+1)-e(0-50*(i+1),50*(i+1)),"px;"))})),menu.forEach((function(e){e.addEventListener("mouseover",(function(){t.classList.add("blue"),n.forEach((function(t){t.classList.add("steady")}))})),e.addEventListener("mouseout",(function(){t.classList.remove("blue"),n.forEach((function(t){t.classList.remove("steady")}))}))}))}},o=e(27),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cursor",attrs:{id:"mews"}},[e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"})])}],!1,null,null,null);n.default=component.exports},202:function(t,n,e){"use strict";e.r(n);var r=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-icons"},[n("a",{attrs:{href:"https://www.facebook.com/arus.peter/",target:"_blank"}},[n("img",{attrs:{src:e(196),alt:"Facebook"}})]),this._v(" "),n("a",{attrs:{href:"https://www.instagram.com/aruspeter/",target:"_blank"}},[n("img",{attrs:{src:e(197),alt:"Instagram"}})]),this._v(" "),n("a",{attrs:{href:"https://github.com/aruspeter",target:"_blank"}},[n("img",{attrs:{src:e(198),alt:"GitHub"}})]),this._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/peterarus/",target:"_blank"}},[n("img",{attrs:{src:e(199),alt:"LinkedIn"}})])])])}],o=e(27),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,null,null);n.default=component.exports},205:function(t,n,e){"use strict";e.r(n);var r=e(27),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"contact"},[n("h2",[this._v("Click the icons in the footer :) or  "),n("a",{attrs:{href:"mailto:petiws@gmail.com"}},[this._v("this e-mail")])])])])}],!1,null,null,null);n.default=component.exports},209:function(t,n,e){"use strict";e.r(n);var r={head:function(){return{title:"Contact"}}},o=e(27),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"whole"},[n("Header"),this._v(" "),n("Contact"),this._v(" "),n("Footer")],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(200).default,Contact:e(205).default,Footer:e(202).default})}}]);