let listArray = Array.prototype.slice.call(document.getElementsByClassName("lista"));                

for (let x=0; x < listArray.length; x++){
    let index = x;
    listArray[index].addEventListener('mouseover', () =>{
        let newArray= [...listArray];
        newArray.splice(x,1);
        newArray.forEach(element => {
            element.classList.add("meglog");
        })
        ;
    });
    listArray[index].addEventListener('mouseout', () =>{
        let newArray=[...listArray];
        newArray.forEach(element => {
            element.classList.remove("meglog");
        });
    });


}
