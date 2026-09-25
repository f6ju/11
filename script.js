function lik(knapp) {
    if (knapp.innerText === "♡ Lik") {
        knapp.innerText = "♥ Lik";
    } else {
        knapp.innerText = "♡ Lik";
    }
}

function leggTilKommentar(event) {
    event.preventDefault();

    let navn = document.getElementById("navn").value;
    let tekst = document.getElementById("tekst").value;

    let kommentar = document.createElement("div");

    kommentar.className = "kommentar";

    kommentar.innerHTML = `
        <b>${navn}</b>
        <p>${tekst}</p>
        <button onclick="lik(this)">♡ Lik</button>
    `;

    document.getElementById("kommentarer").appendChild(kommentar);

    document.getElementById("navn").value = "";
    document.getElementById("tekst").value = "";
}