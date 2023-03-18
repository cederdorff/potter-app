"use strict";

// ============ Global Variables ============ //
const potterName = "Harry Potter";
const potterGender = "male";
const potterHouse = "Gryffindor";
const potterDateOfBirth = "31-07-1980";
const potterAncestry = "half-blood";
const potterEyeColour = "green";
const potterHairColour = "black";
const potterHogwartsStudent = true;
const potterHogwartsStaff = false;
const potterActor = "Daniel Radcliffe";
const potterAlive = true;
const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

async function initApp() {
    showCharacter(
        potterImage,
        potterName,
        potterHouse,
        potterGender,
        potterDateOfBirth,
        potterEyeColour,
        potterHairColour,
        potterAncestry,
        potterActor
    );
}

function showCharacter(image, name, house, gender, dateOfBirth, eyeColour, hairColour, ancestry, actor) {
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
        showCharacterModal(image, name, house, gender, dateOfBirth, eyeColour, hairColour, ancestry, actor);
    }
}

function showCharacterModal(image, name, house, gender, dateOfBirth, eyeColour, hairColour, ancestry, actor) {
    document.querySelector("#dialog-image").src = image;
    document.querySelector("#dialog-title").textContent = name;
    document.querySelector("#dialog-house").textContent = house;

    document.querySelector("#dialog-gender").textContent = gender;
    document.querySelector("#dialog-birth-date").textContent = dateOfBirth;
    document.querySelector("#dialog-eye-color").textContent = eyeColour;
    document.querySelector("#dialog-hair-color").textContent = hairColour;
    document.querySelector("#dialog-ancestry").textContent = ancestry;

    document.querySelector("#dialog-name").textContent = name;
    document.querySelector("#dialog-actor-name").textContent = actor;

    // show dialog
    document.querySelector("#dialog-character").showModal();
}
