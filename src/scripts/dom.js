// Selectors
const ageTitle = document.getElementById("age");

console.log(ageTitle);

const sections = document.getElementsByClassName("section");

console.log(sections);

const headings = document.getElementsByTagName("h4");

console.log(headings);

const h4Heading = document.querySelector("h4");

console.log(h4Heading);

const h1Headings = document.querySelectorAll("h1");

console.log(h1Headings);

const navigationList = document.querySelector(".navigation__list");

// Nodes
console.log(navigation.childNodes);

console.log(navigationList.children);

const newHeading = "Новый заголовок!!!";

// Mutations
h4Heading.innerText = newHeading;

navigationList.children[0].innerText = "<a href=\"#age\">Навыки</a>";

navigationList.children[0].innerHTML = "<a href=\"https://ya.ru\">Навыки</a>";

// ageTitle.style.color = "red";
// ageTitle.style.textAlign = "center";

let isClciked = false;

function titleHovered() {
    if (isClciked) {
        ageTitle.style.color = null;
        ageTitle.style.textAlign = null;

        isClciked = false;
    } else {
        ageTitle.style.color = "red";
        ageTitle.style.textAlign = "center";

        isClciked = true;
    }
}

function titleUnhovered() {
    ageTitle.style.color = null;
    ageTitle.style.textAlign = null;
}

ageTitle.addEventListener("click", titleHovered);

ageTitle.addEventListener("mouseout", titleUnhovered);