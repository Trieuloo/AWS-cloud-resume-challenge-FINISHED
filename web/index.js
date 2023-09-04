const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://3exoarfhfyfy5ooxvx45rpxcom0truhf.lambda-url.us-west-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
    
}
updateCounter();