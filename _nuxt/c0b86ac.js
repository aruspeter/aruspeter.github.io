(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{194:function(t,n,e){t.exports=e.p+"img/1.d76f2b6.png"},195:function(t,n,e){var o=e(2),r=e(146);o({target:"Array",stat:!0,forced:!e(145)((function(t){Array.from(t)}))},{from:r})},196:function(t,n,e){"use strict";e.r(n);e(48),e(34),e(100),e(49);var o={data:function(){return{navIsOpen:!1}},methods:{openNav:function(){this.navIsOpen=!this.navIsOpen;var t=document.getElementsByClassName("line");console.log(t),t.forEach((function(line){line.classList.toggle("animate")}))},notHome:function(){return""!=window.location.href.split("/")[3]},notAbout:function(){return"about"!=window.location.href.split("/")[3]},notWorks:function(){return"works"!=window.location.href.split("/")[3]},notSkills:function(){return"skills"!=window.location.href.split("/")[3]},notContact:function(){return"contact"!=window.location.href.split("/")[3]}}},r=e(27),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"header"},[o("Cursorguy"),t._v(" "),o("img",{staticClass:"header-bg",attrs:{src:e(194)}}),t._v(" "),o("div",{staticClass:"nav-mobile"},[o("div",{staticClass:"hamburger",attrs:{id:"hamburger"},on:{click:function(n){return t.openNav()}}},[o("div",{staticClass:"line line-one"}),t._v(" "),o("div",{staticClass:"line line-two"}),t._v(" "),o("div",{staticClass:"line line-go"})]),t._v(" "),o("nav",{class:{"nav-shown":t.navIsOpen}},[o("ul",[t.notHome()?o("li",[o("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[t._v("back to home")])],1):t._e(),t._v(" "),t.notAbout()?o("li",[o("nuxt-link",{attrs:{to:"/about"}},[t._v("about me")])],1):t._e(),t._v(" "),t.notWorks()?o("li",[o("nuxt-link",{attrs:{to:"/works"}},[t._v("works")])],1):t._e(),t._v(" "),t.notSkills()?o("li",[o("nuxt-link",{attrs:{to:"/skills"}},[t._v("skills")])],1):t._e(),t._v(" "),t.notContact()?o("li",[o("nuxt-link",{attrs:{to:"/contact"}},[t._v("contact")])],1):t._e()])])]),t._v(" "),o("div",{staticClass:"main-nav"},[o("nav",[o("ul",[t.notHome()?o("li",[o("nuxt-link",{staticClass:"active",attrs:{to:"/"}},[t._v("back to home")])],1):t._e(),t._v(" "),t.notAbout()?o("li",[o("nuxt-link",{attrs:{to:"/about"}},[t._v("about me")])],1):t._e(),t._v(" "),t.notWorks()?o("li",[o("nuxt-link",{attrs:{to:"/works"}},[t._v("works")])],1):t._e(),t._v(" "),t.notSkills()?o("li",[o("nuxt-link",{attrs:{to:"/skills"}},[t._v("skills")])],1):t._e(),t._v(" "),t.notContact()?o("li",[o("nuxt-link",{attrs:{to:"/contact"}},[t._v("contact")])],1):t._e()])])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Cursorguy:e(197).default})},197:function(t,n,e){"use strict";e.r(n);e(62),e(48),e(195),e(35),e(49);var o={mounted:function(){var menu=Array.from(document.getElementsByTagName("a")),t=document.getElementById("mews"),n=Array.from(document.querySelectorAll(".cursor-center"));function e(t,n){return Math.random()*(n-t)+t}document.addEventListener("mousemove",(function(o){t.setAttribute("style","top: ".concat(o.pageY-10,"px; left: ").concat(o.pageX-10,"px;"));for(var i=0;i<n.length;i++)n[i].setAttribute("style","top: ".concat(o.pageY/(i+1)-e(0-50*(i+1),50*(i+1)),"px; left: ").concat(o.pageX/(i+1)-e(0-50*(i+1),50*(i+1)),"px;"))})),menu.forEach((function(e){e.addEventListener("mouseover",(function(){t.classList.add("blue"),n.forEach((function(t){t.classList.add("steady")}))})),e.addEventListener("mouseout",(function(){t.classList.remove("blue"),n.forEach((function(t){t.classList.remove("steady")}))}))}))}},r=e(27),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cursor",attrs:{id:"mews"}},[e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"}),t._v(" "),e("div",{staticClass:"cursor-center"})])}],!1,null,null,null);n.default=component.exports},203:function(t,n,e){t.exports=e.p+"img/contact.5f838a0.png"},205:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"contact"},[n("img",{staticClass:"contact-bg",attrs:{src:e(203),alt:"Contact"}})])])}],r=e(27),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,null,null);n.default=component.exports},208:function(t,n,e){"use strict";e.r(n);var o={head:function(){return{title:"Contact"}}},r=e(27),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"whole"},[n("Header"),this._v(" "),n("Contact")],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(196).default,Contact:e(205).default})}}]);