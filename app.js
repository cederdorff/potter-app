"use strict";

// ============ Global Variables ============ //

const potterName = "Harry Potter";
const potterGender = "male";
const potterHouse = "Gryffindor";
const potterDateOfBirth = "31-07-1980";
const potterAncestry = "half-blood";
const potterEyeColour = "green";
const potterHairColour = "black";
const potterPatronus = "stag";
const potterHogwartsStudent = true;
const potterHogwartsStaff = false;
const potterActor = "Daniel Radcliffe";
const potterAlive = true;
const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

// ============ LOAD & INIT APP ============ //

window.addEventListener("load", initApp);

async function initApp() {
    showCharacter(potterImage, potterName, potterHouse);
}

function showCharacter(image, name, house) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article>
                <img src="${image}">
                <h2>${name}</h2>
                <p>${house}</p>
            </article>
        `
    );

    document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

    function characterClicked() {
        showCharacterModal(character);
    }
}
