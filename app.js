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
            <article>
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <p>Date of Birth: ${character.dateOfBirth}</p>
                <p>Played by ${character.actor}</p>
            </article>
        `
    );
}

// function showCharacter(character) {
//     //define elements
//     const articleElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     const nameElement = document.createElement("h2");
//     const houseElement = document.createElement("p");
//     const dateOfBirthElement = document.createElement("p");
//     const actorElement = document.createElement("p");

//     // set content
//     imageElement.src = character.image;
//     nameElement.textContent = character.name;
//     houseElement.textContent = character.house;
//     dateOfBirthElement.textContent = `Date of Birth: ${character.dateOfBirth}`;
//     actorElement.textContent = `Played by ${character.actor}`;

//     // append child elements to articleElement
//     articleElement.appendChild(imageElement);
//     articleElement.appendChild(nameElement);
//     articleElement.appendChild(houseElement);
//     articleElement.appendChild(dateOfBirthElement);
//     articleElement.appendChild(actorElement);

//     // append article to grid
//     document.querySelector("#characters").appendChild(articleElement);
// }
