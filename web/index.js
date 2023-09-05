const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("Filler")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
    
}
updateCounter();
