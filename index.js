const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://blnpzcq6qp3rdnlwuiqn7ktsce0rzcyy.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    console.log(data);
    counter.innerHTML = `Views: ${data}`;

}
updateCounter();