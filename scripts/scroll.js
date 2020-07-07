var navbar = document.getElementById("navbarleft");
var aboutInfo = document.getElementById("aboutInfo");
var background = document.getElementById("bgrimg");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){    
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.replace("navbar", "navbar-left");
    background.style.filter = "blur(3px) grayscale(60%)";
  } else {
    navbar.classList.replace("navbar-left", "navbar");
    background.style.filter = "none"
  };
  
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    aboutInfo.classList.add('is-visible');
  } else {
    aboutInfo.classList.remove('is-visible')
  };  

  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
  aboutInfo.classList.remove('is-visible')
}  

};


//
