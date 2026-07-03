const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
year.innerHTML = `<span>©${today.getFullYear()}</span> &#9827 Iara Agostina Arias &#9827 Argentina`;

lastMod.innerHTML = `Last Modification: <p>${new Intl.DateTimeFormat("en-US")}</p>`;
