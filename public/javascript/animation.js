document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.animated-header');
    const footer = document.querySelector('.animated-footer');

    setTimeout(() => {
        header.classList.add('animated-element');
        footer.classList.add('animated-element');
    }, 500);
});
