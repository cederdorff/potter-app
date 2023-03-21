"use strict";

// ============ LOAD & INIT APP ============ //

window.addEventListener("load", initApp);

async function initApp() {
    const characters = await getCharacters();
    showCharacters(characters);
}

// ============ READ ============ //
// Read (GET) characters from json file located on GitHub
async function getCharacters() {
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/potter.json");
    const data = await response.json();
    console.log(data);
    return data;
}

// Create HTML and display all users from given list
function showCharacters(characterList) {
    //loop through all users and create an article with content for each
    for (const character of characterList) {
        showCharacter(character);
    }
}

function showCharacter(character) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
            </article>
        `
    );

    document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

    function characterClicked() {
        showCharacterModal(character);
    }
}

function showCharacterModal(character) {
    console.log(character);
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector("#dialog-title").textContent = character.name;
    document.querySelector("#dialog-house").textContent = character.house;

    // description
    let description = generateDescription(character);
    document.querySelector("#dialog-character-description").textContent = description;

    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-birth-date").textContent = character.dateOfBirth;
    document.querySelector("#dialog-eye-color").textContent = character.eyeColour;
    document.querySelector("#dialog-hair-color").textContent = character.hairColour;
    document.querySelector("#dialog-ancestry").textContent = character.ancestry;
    document.querySelector("#dialog-species").textContent = character.species;

    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-actor-name").textContent = character.actor;

    // show dialog
    document.querySelector("#dialog-character").showModal();
}

function generateDescription(character) {
    let description = "";
    if (character.hogwartsStaff && character.alive) {
        description = `${character.name} is employed at Hogwarts.`;
    } else if (character.hogwartsStaff && !character.alive) {
        description = `${character.name} was employed at Hogwarts but is no longer alive.`;
    } else if (character.hogwartsStudent && character.alive) {
        description = `${character.name} is a student at Hogwarts.`;
    } else if (character.hogwartsStudent && !character.alive) {
        description = `${character.name} was a student at Hogwarts but is no longer alive.`;
    }
    return description;
}
