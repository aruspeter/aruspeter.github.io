const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();

    if (nameValue === ''){
        setErrorFor(username, "Dis shouldn\'t be blank");
    } else {
        setSuccessFor(username)
    };
    if (emailValue === ''){
        setErrorFor(email, "Dis shouldn\'t be blank");
    } else if (!isEmail(emailValue)){
        setErrorFor(email, "E-mail ain\t valid here.");
    } else {
        setSuccessFor(email)
    };
    if (subjectValue === ''){
        setErrorFor(subject, "Dis shouldn\'t be blank");
    } else {
        setSuccessFor(subject)
    };
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'formdivs error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'formdivs success';

    small.innerText = ' ';
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }