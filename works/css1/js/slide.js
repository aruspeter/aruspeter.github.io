const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

let size = images[0].clientWidth;
let counter = 0;

console.log(size);

let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');


nextBtn.addEventListener('click', () => {
    let size = images[0].clientWidth;
    if (counter >= images.length - 1) return;
    counter++;
    slide.style.transition = 'transform 0.3s ease-in-out';
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    if (images[counter].id === "firstClone"){
        slide.style.transition = '0.7s';
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === "lastClone"){
        slide.style.transition = '0.7s';
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

})

prevBtn.addEventListener('click', () => {
    let size = images[0].clientWidth;
    if (counter <= 0) return;
    counter--;
    slide.style.transition = 'transform 0.3s ease-in-out';
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    if (images[counter].id === "firstClone"){
        slide.style.transition = '0.7s';
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === "lastClone"){
        slide.style.transition = '0.7s';
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

})

