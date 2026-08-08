const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectProduct = document.getElementById('productOptions');

function displayProductOptions(array) {
    products.forEach(product => {
        const productOption = document.createElement('option');
        productOption.value = product.id;
        productOption.textContent = product.name;

        selectProduct.append(productOption);
    });
}

displayProductOptions(products);

const reviewForm = document.querySelector(".wf1");

reviewForm.addEventListener("submit", () => {
    let reviewsCount = Number(localStorage.getItem("reviewsCount-ls")) || 0;
    reviewsCount++;
    localStorage.setItem("reviewsCount-ls", reviewsCount);
});