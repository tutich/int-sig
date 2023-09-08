const button = document.querySelector(".btn");
const form = document.getElementById("form");
const inputDiv = document.querySelectorAll("det");

const checkVisibility = function() {
    const firstName = document.getElementById("first_name")

    const firstNameValue = firstName.value.trim();

    if(firstNameValue === "") {
    inputDiv[0].classList.add("error");
    }
}




button.addEventListener("click", function(e) {
e.preventDefault();
checkVisibility();
})