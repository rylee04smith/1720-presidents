// Import president data
import { presidents } from "../data/presidents.mjs";

// Select the container where president cards will be displayed
const displayPresidents = document.querySelector("#showPresidents");

//path to photos
const pathStart = "https://resources.dgmuvu.com/presidents";


// Listen for clicks on the "All" button
document.querySelector("#btn-all").addEventListener("click", (el) => {
    showFilteredPresidents(presidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "democratic" button
document.querySelector("#btn-democratic").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Democratic"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "republican" button
document.querySelector("#btn-republican").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Republican"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "democratic-republican" button
document.querySelector("#btn-demorepub").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Democratic-Republican"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "whig" button
document.querySelector("#btn-whig").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Whig"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "federalist" button
document.querySelector("#btn-federalist").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Federalist"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

// Listen for clicks on the "independent" button
document.querySelector("#btn-independent").addEventListener("click", (el) => {
    const filteredPresidents = presidents.filter(
        president => president.party === "Independent"
    );

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id)
});

//wayfinding buttons
function updateSubNav(buttonID) {
    const allButtons = document.querySelectorAll('.partyNav button')
    allButtons.forEach((btn) => (btn.className = ""));
    //add the active class to current button
    document.querySelector(`#${buttonID}`).className = "current"
}


// Displays any array of presidents passed to it
function showFilteredPresidents(filteredPresidents) {

    // Clear existing content before redisplaying
    displayPresidents.innerHTML = "";

    // Loop through each president object
    filteredPresidents.forEach((president) => {

        // Create and populate name
        let presidentName = document.createElement("h2");
        presidentName.textContent = president.name;

        // Create and populate years served
        let presidentServed = document.createElement("p");
        presidentServed.textContent = `Served: ${president.served}`;

        // Create and populate party affiliation
        let presidentParty = document.createElement("p");
        presidentParty.textContent = `Party: ${president.party}`;

        //Create image for president
        let presidentImage = document.createElement("img");
       presidentImage.src = `${pathStart}/${president.image}`;
        presidentImage.alt = president.name;
        presidentImage.loading = "lazy";
        presidentImage.width = 250;
        presidentImage.height = 300;

        // Create a card for the president
        let presidentCard = document.createElement("section");
        presidentCard.className = president.party

        // Add elements to card
        presidentCard.appendChild(presidentName);
        presidentCard.appendChild(presidentServed);
        presidentCard.appendChild(presidentParty);
        presidentCard.appendChild(presidentImage);

        // Add card to page
        displayPresidents.appendChild(presidentCard);
    });
}

// Display all presidents when page first loads
showFilteredPresidents(presidents);