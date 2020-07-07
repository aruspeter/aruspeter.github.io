var aboutButton = document.querySelector('#aboutButton');
aboutButton.addEventListener("mouseover", () => {
    aboutButton.innerText = ("readMore");
    })
aboutButton.addEventListener("mouseout", () => {
aboutButton.innerHTML = ("about.me");
})

var skillsButton = document.querySelector('#skillsButton');
skillsButton.addEventListener("mouseover", () => {
    skillsButton.innerText = ("for\(now\)");
    })
    skillsButton.addEventListener("mouseout", () => {
    skillsButton.innerHTML = ("my.skills");
})

var worksButton = document.querySelector('#worksButton');
worksButton.addEventListener("mouseover", () => {
    worksButton.innerText = ("checkEmOut");
    })
    worksButton.addEventListener("mouseout", () => {
        worksButton.innerHTML = ("my.works");
})

var infoButton = document.querySelector('#infoButton');
infoButton.addEventListener("mouseover", () => {
    infoButton.innerText = ("can\'t wait\!");
    })
    infoButton.addEventListener("mouseout", () => {
        infoButton.innerHTML = ("contact");
})