const button = document.querySelector(".btn");
const form = document.getElementById("form");
const inputDiv = document.querySelectorAll(".input-div");

const checkVisibility = function() {
    const inputFirstName = document.getElementById("first_name");
    const inputLastName = document.getElementById("last_name");
    const inputEmail = document.getElementById("email");
    const inputPass = document.getElementById("pass");

    const firstNameValue = inputFirstName.value.trim();
    const lastNameValue = inputLastName.value.trim();
    const emailValue = inputEmail.value.trim();
    const passValue = inputPass.value.trim();

    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstNameValue === "") {
    inputDiv[0].classList.add("error");
    } else {
        inputDiv[0].classList.remove("error");
    }
    if(lastNameValue === "") {
        inputDiv[1].classList.add("error");
        } else {
            inputDiv[1].classList.remove("error");
        }
        if(emailValue.match(regEx)) {
            inputDiv[2].classList.remove("error");
            } else {
                inputDiv[2].classList.add("error");
            }
            if(passValue === "") {
                inputDiv[3].classList.add("error");
                } else {
                    inputDiv[3].classList.remove("error");
                }
};




button.addEventListener("click", function(e) {
e.preventDefault();
checkVisibility();
})