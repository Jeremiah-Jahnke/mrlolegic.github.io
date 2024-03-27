
/**
 * Executes the provided callback function when the DOM content is loaded.
 * @callback domContentLoadedCallback
 */

/**
 * Adds animation classes to the header and footer elements after a delay.
 * @param {domContentLoadedCallback} callback - The callback function to execute when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function (callback) {
    const header = document.querySelector('.animated-header');
    const footer = document.querySelector('.animated-footer');

    setTimeout(() => {
        header.classList.add('animated-element');
        footer.classList.add('animated-element');
    }, 500);
});

/**
 * Moves the carousel to the next item every 3 seconds.
 */
setInterval(() => {
    const carousel = document.querySelector(".carousel");
    const firstItem = carousel.firstElementChild;

    carousel.style.transform = "translateX(-100%)";

    setTimeout(() => {
        carousel.appendChild(firstItem);
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        setTimeout(() => {
            carousel.style.transition = "";
        }, 500);
    }, 1000);
}, 3000);

/**
 * Opens the provided URL in a new browser tab.
 * @param {string} url - The URL to open.
 */
function openUrl(url) {
    window.open(url, "_blank");
}