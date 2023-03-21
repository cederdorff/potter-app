"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    // Harry Potter
    const harry = {
        name: "Harry Potter",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "31-07-1980",
        yearOfBirth: 1980,
        ancestry: "half-blood",
        eyeColour: "green",
        hairColour: "black",
        wand: "holly,phoenix feather,11",
        patronus: "stag",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/harry.jpg"
    };

    // Hermione Granger
    const hermione = {
        name: "Hermione Granger",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "19-09-1979",
        yearOfBirth: 1979,
        ancestry: "muggleborn",
        eyeColour: "brown",
        hairColour: "brown",
        wand: "vine,dragon heartstring",
        patronus: "otter",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Emma Watson",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
    };

    // Ron Weasley
    const ron = {
        name: "Ron Weasley",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "01-03-1980",
        yearOfBirth: 1980,
        ancestry: "pure-blood",
        eyeColour: "blue",
        hairColour: "red",
        wand: "willow,unicorn tail-hair,14",
        patronus: "Jack Russell terrier",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Rupert Grint",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/ron.jpg"
    };

    showCharacter(harry);
    showCharacter(hermione);
    showCharacter(ron);
}

function showCharacter(character) {
    console.log(character);

    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <p>Date of Birth: ${character.dateOfBirth}</p>
                <p>Played by ${character.actor}</p>
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
    //image, name and house
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
