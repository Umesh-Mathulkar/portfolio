function namess() {
    let names = document.getElementById("input").value;
    document.getElementById("name").innerHTML = `<h2 style="display:inline-block">${names}</h2>`;
    document.getElementById("input").classList.add("hide");
}

function display() {
    let welcome = document.getElementById("welcome");
    let mainShow = document.getElementById("mainShow")
    welcome.classList.add("hide")
    mainShow.classList.remove("hide");
}
const timeout = setTimeout(display, 2400)

function display2() {
    let skillIntro = document.getElementById("skillIntro");
    let skiImg = document.getElementById("skiImg")
    skillIntro.classList.add("hide")
    skiImg.classList.remove("hide");
}
const timeout2 = setTimeout(display2, 10000)

// function darkMode(element) {
//     let sun = document.getElementById("sun");
//     let moon = document.getElementById("moon");
//     let text = [document.getElementById("info"), document.getElementById("skills"), document.getElementById("projects"), document.getElementById("contact"),document.getElementById("footer"),document.getElementById("hobby")]
//     if (element == "moon") {
//         moon.classList.add("moon");
//         sun.classList.remove("sun");
//         document.body.classList.add("darkMode");
//         text.map((item) => {
//             item.classList.add("darkModeFont")
//         })
//     }
//     else {
//         sun.classList.add("sun");
//         moon.classList.remove("moon");
//         document.body.classList.remove("darkMode");
//         text.map((item) => {
//             item.classList.remove("darkModeFont")
//         }
//         )
//     }
// }

toggle=()=>{
    let text = [document.getElementById("info"), document.getElementById("skills"), document.getElementById("projects"), document.getElementById("contact"),document.getElementById("footer"),document.getElementById("hobby")]
    document.body.classList.toggle("dark");
    document.getElementById("circle").classList.toggle("circleAnim")
    document.getElementById("off").classList.toggle("hide")
    document.getElementById("on").classList.toggle("hide")
    text.map((item) => {
        item.classList.toggle("darkModeFont")
               })
}