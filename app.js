"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    // Harry Potter
    const potterName = "Harry Potter";
    const potterHouse = "Gryffindor";
    const potterDateOfBirth = "31-07-1980";
    const potterActor = "Daniel Radcliffe";
    const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

    showCharacter(potterImage, potterName, potterHouse, potterDateOfBirth, potterActor);
    showCharacter("http://hp-api.herokuapp.com/images/hermione.jpeg", "Hermione Granger", "Gryffindor", "19-09-1979", "Emma Watson");
    showCharacter("http://hp-api.herokuapp.com/images/ron.jpg", "Ron Weasley", "Gryffindor", "01-03-1980", "Rupert Grint");
}

function showCharacter(image, name, house, dateOfBirth, actor) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article class="grid-item">
                <img src="${image}">
                <h2>${name}</h2>
                <p>${house}</p>
                <p>Date of Birth: ${dateOfBirth}</p>
                <p>Played by ${actor}</p>
            </article>
        `
    );
}

// function showCharacter(image, name, house, dateOfBirth, actor) {
//     //define elements
//     const articleElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     const nameElement = document.createElement("h2");
//     const houseElement = document.createElement("p");
//     const dateOfBirthElement = document.createElement("p");
//     const actorElement = document.createElement("p");

//     // set content
//     imageElement.src = image;
//     nameElement.textContent = name;
//     houseElement.textContent = house;
//     dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
//     actorElement.textContent = `Played by ${actor}`;

//     // append child elements to articleElement
//     articleElement.appendChild(imageElement);
//     articleElement.appendChild(nameElement);
//     articleElement.appendChild(houseElement);
//     articleElement.appendChild(dateOfBirthElement);
//     articleElement.appendChild(actorElement);

//     // append article to grid
//     document.querySelector("#characters").appendChild(articleElement);
// }
