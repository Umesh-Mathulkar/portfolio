function namess() {
    let names = document.getElementById("input").value;
    document.getElementById("name").innerHTML = `<h2 style="display:inline-block">${names}</h2>`;
    document.getElementById("input").classList.add("hide");
}