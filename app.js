"use strict";

let characters;

// ============ LOAD & INIT APP ============ //

window.addEventListener("load", initApp);

async function initApp() {
    characters = await getCharacters();
    showCharacters(characters);

    document
        .querySelector("#sort-by-name")
        .addEventListener("click", sortByName);
    document
        .querySelector("#sort-by-house")
        .addEventListener("click", sortByHouse);
    document
        .querySelector("#sort-by-gender")
        .addEventListener("click", sortByGender);
    document
        .querySelector("#sort-by-year-of-birth")
        .addEventListener("click", sortByYearOfBirth);
    document
        .querySelector("#input-search")
        .addEventListener("keyup", searchByName);
    document
        .querySelector("#input-search")
        .addEventListener("search", searchByName);
    document
        .querySelector("#select-filter-house")
        .addEventListener("change", filterByHouse);
}

// ============ READ ============ //
// Read (GET) characters from json file located on GitHub
async function getCharacters() {
    const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/potter.json"
    );
    const data = await response.json();
    console.log(data);
    return data;
}

function sortByName() {
    characters.sort(compareNames);
    showCharacters(characters);
}

function sortByHouse() {
    characters.sort(compareHouses);
    showCharacters(characters);
}

function sortByGender() {
    characters.sort(compareGender);
    showCharacters(characters);
}

function sortByYearOfBirth() {
    characters.sort(compareYearOfBirth);
    showCharacters(characters);
}

function compareNames(character1, character2) {
    return character1.name.localeCompare(character2.name);
}

function compareHouses(character1, character2) {
    return character1.house.localeCompare(character2.house);
}

function compareGender(character1, character2) {
    return character1.gender.localeCompare(character2.gender);
}

function compareYearOfBirth(character1, character2) {
    return character1.yearOfBirth - character2.yearOfBirth;
}

function searchByName() {
    const searchString = this.value.toLowerCase();

    const filteredCharacters = characters.filter(matchName);

    function matchName(character) {
        return character.name.toLowerCase().includes(searchString);
    }

    showCharacters(filteredCharacters);
}

function filterByHouse() {
    const selectedHouse = this.value;
    console.log(selectedHouse);

    if (selectedHouse === "all") {
        showCharacters(characters);
    } else {
        const filteredCharacters = characters.filter(checkHouse);

        function checkHouse(character) {
            return character.house === selectedHouse;
        }
        showCharacters(filteredCharacters);
    }
}

// Create HTML and display all users from given list
function showCharacters(characterList) {
    // reset tbody
    document.querySelector("tbody").innerHTML = "";
    //loop through all users and create an article with content for each
    for (const character of characterList) {
        showCharacter(character);
    }
}

function showCharacter(character) {
    document.querySelector("tbody").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <tr>
                <td><img src="${character.image}"></td>
                <td>${character.name}</td>
                <td>${character.house}</td>
                <td>${character.gender}</td>
                <td>${character.yearOfBirth}</td>
            </tr>
        `
    );

    document
        .querySelector("tbody tr:last-child")
        .addEventListener("click", characterClicked);

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
    document.querySelector("#dialog-character-description").textContent =
        description;

    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-birth-date").textContent =
        character.dateOfBirth;
    document.querySelector("#dialog-eye-color").textContent =
        character.eyeColour;
    document.querySelector("#dialog-hair-color").textContent =
        character.hairColour;
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
