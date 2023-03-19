"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    // Harry Potter
    const potterName = "Harry Potter";
    const potterGender = "male";
    const potterHouse = "Gryffindor";
    const potterDateOfBirth = "31-07-1980";
    const potterAncestry = "half-blood";
    const potterEyeColour = "green";
    const potterHairColour = "black";
    const potterActor = "Daniel Radcliffe";
    const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

    showCharacter(potterImage, potterName, potterHouse, potterDateOfBirth, potterActor);
}

// function showCharacter(image, name, house, dateOfBirth, actor) {
//     document.querySelector("#characters").insertAdjacentHTML(
//         "beforeend",
//         /*html*/ `
//             <article>
//                 <img src="${image}">
//                 <h2>${name}</h2>
//                 <p>${house}</p>
//                 <p>Date of Birth: ${dateOfBirth}</p>
//                 <p>Played by ${actor}</p>
//             </article>
//         `
//     );
// }

function showCharacter(image, name, house, dateOfBirth, actor) {
    const characterElement = document.createElement("article");
    const imageElement = document.createElement("img");
    const nameElement = document.createElement("h2");
    const houseElement = document.createElement("p");
    const dateOfBirthElement = document.createElement("p");
    const actorElement = document.createElement("p");

    imageElement.src = image;
    nameElement.textContent = name;
    houseElement.textContent = house;
    dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
    actorElement.textContent = `Played by ${actor}`;

    characterElement.appendChild(imageElement);
    characterElement.appendChild(nameElement);
    characterElement.appendChild(houseElement);
    characterElement.appendChild(dateOfBirthElement);
    characterElement.appendChild(actorElement);

    document.querySelector("#characters").appendChild(characterElement);
}
