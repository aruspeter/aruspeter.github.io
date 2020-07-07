let dark = true;
let myButton = document.getElementById("myButton");
myButton.addEventListener('click', 
() => {
    let myStyle = document.getElementById("pagestyle");
    if (dark) {
        myStyle.innerHTML = "<link id=\"pagestyle\" href=\"style2.css\" rel=\"stylesheet\" type=\"text/css\">";
        myButton.innerText = "dark";
    }
    else{
        myStyle.innerHTML= "<link id=\"pagestyle\" href=\"style.css\" rel=\"stylesheet\" type=\"text/css\">"      
        myButton.innerText = "light";
    };    
    dark = !dark;
return false;
});
