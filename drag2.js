const draggables = document.querySelectorAll(".swim-lane");
const droppables = document.querySelectorAll(".lanes");

draggables.forEach((card) => {
    card.addEventListener("dragstart", () =>{
        card.classList.add("is-dragging");
    });

    card.addEventListener("dragend", () =>{
        card.classList.remove("is-dragging");
    });
});

droppables.forEach((zone) => {

    zone.addEventListener("dragover", (e) =>{
        e.preventDefault();
        
        const bottomcard = insertAboveCard(zone, e.clientlY);
        const curcard = document.querySelector(".is-dragging");

        console.log(bottomcard, curcard);

        if(!bottomcard){
            zone.appendChild(curcard);
        } else {
            zone.insertBefore(curcard, bottomcard);
        }
    });
});



const insertAboveCard = (zone, mouseY) => {
    const els = zone.querySelectorAll(".swim-lane:not(.is-dragging)");

    let closestCard = null;
    let closestOffset = Number.NEGATIVE_INFINITY;
        
    els.forEach((card) => {
        const { top } = card.getBoundingClientRect();
        
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset){
            closestOffset = offset;
            closestCard = card;
        }
    });

    return closestCard;

};