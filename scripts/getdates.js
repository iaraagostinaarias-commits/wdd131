// &copy;

const year = document.querySelector("#currentYear");
const lastModification = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span> &#9827 Iara Agostina Arias &#9827 Argentina`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;