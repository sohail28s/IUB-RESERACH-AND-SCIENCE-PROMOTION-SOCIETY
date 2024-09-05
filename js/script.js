// const navToggle = document.querySelector('.nav-toggle');
// const navList = document.querySelector('.nav-list');

// navToggle.addEventListener('click', () => {
//     navList.classList.toggle('nav-list-visible');
// });





document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const body = document.body;

    navToggle.addEventListener('click', function () {
        const isVisible = navList.classList.toggle('nav-list-visible');
        if (isVisible) {
            body.classList.add('nav-open');
        } else {
            body.classList.remove('nav-open');
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navList.contains(e.target) && navList.classList.contains('nav-list-visible')) {
            navList.classList.remove('nav-list-visible');
            body.classList.remove('nav-open');
        }
    });
});











