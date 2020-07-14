const fourInRow = document.getElementById("fourinrow");
const twoInRow = document.getElementById("twoinrow");
const oneInRow = document.getElementById("oneinrow");

let articles = Array.prototype.slice.call(document.getElementsByClassName("artcontain1"));

fourInRow.addEventListener('click', () => {
    articles.forEach(element => {
        element.classList.remove(...element.classList);
        element.classList.add("artcontain1");
        fourInRow.style.backgroundColor = "red";
        twoInRow.style.backgroundColor = "orange";
        oneInRow.style.backgroundColor = "orange";
    });
})

twoInRow.addEventListener('click', () => {
    articles.forEach(element => {
        element.classList.remove(...element.classList);
        element.classList.add("artcontain2");
        fourInRow.style.backgroundColor = "orange";
        twoInRow.style.backgroundColor = "red";
        oneInRow.style.backgroundColor = "orange";
    });
})

oneInRow.addEventListener('click', () => {
    articles.forEach(element => {
        element.classList.remove(...element.classList);
        element.classList.add("artcontain3");
        fourInRow.style.backgroundColor = "orange";
        twoInRow.style.backgroundColor = "orange";
        oneInRow.style.backgroundColor = "red";
    });
})