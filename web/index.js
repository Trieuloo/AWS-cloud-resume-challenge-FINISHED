const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let repsonse = await fetch("https://d1lrdw2mln1cta.cloudfront.net/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
    
}
updateCounter();