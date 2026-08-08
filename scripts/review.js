let reviewsDisplay = document.querySelector('.reviews');
let reviewsCount = Number(localStorage.getItem("reviewsCount-ls")) || 0;

if (reviewsCount !== 0) {
    reviewsDisplay.textContent = reviewsCount;
} else {
    reviewsDisplay.textContent = `You completed your first review of a product! 💪🏻`;
}

