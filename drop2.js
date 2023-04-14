//quadros

const cardLane = document.getElementsByClassName("lanes");
const card = document.getElementById("card-form");
const input = document.getElementById("card-input");


card.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newCard = document.createElement("div");
    newCard.classList.add("swim-lane");
    newCard.setAttribute("draggable", "true");
    newCard.innerText = value;

    newCard.addEventListener("dragstart", () => {
        newCard.classList.add("is-dragging");
    });


    newCard.addEventListener("dragend", () => {
        newCard.classList.remove("is-dragging");
    });

    cardLane.appendChild(newCard);

   input.value = "";
});

