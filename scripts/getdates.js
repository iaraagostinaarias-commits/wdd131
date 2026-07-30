const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span>©${today.getFullYear()}</span> &#9827 Iara Agostina Arias &#9827 Argentina`;
lastMod.innerHTML = `Last Modification: ${document.lastModified}`;


// AN ALTERNATIVE CODE
// let d = new Date();
// document.getElementById("currentyear").innerHTML = `&copy${d.getFullYear()}`;
// document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`