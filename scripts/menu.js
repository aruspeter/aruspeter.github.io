var aboutButton = document.querySelector('#aboutButton');
aboutButton.addEventListener("mouseover", () => {
    aboutButton.innerText = ("readMore");
    })
aboutButton.addEventListener("mouseout", () => {
aboutButton.innerHTML = ("aboutPeter");
})

var skillsButton = document.querySelector('#skillsButton');
skillsButton.addEventListener("mouseover", () => {
    skillsButton.innerText = ("for\(now\)");
    })
    skillsButton.addEventListener("mouseout", () => {
    skillsButton.innerHTML = ("mySkills");
})

var worksButton = document.querySelector('#worksButton');
worksButton.addEventListener("mouseover", () => {
    worksButton.innerText = ("checkEmOut");
    })
    worksButton.addEventListener("mouseout", () => {
        worksButton.innerHTML = ("myWorks");
})

var infoButton = document.querySelector('#infoButton');
infoButton.addEventListener("mouseover", () => {
    infoButton.innerText = ("can\'t wait\!");
    })
    infoButton.addEventListener("mouseout", () => {
        infoButton.innerHTML = ("contact.me");
})
