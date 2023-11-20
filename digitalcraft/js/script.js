'use strict';

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Sticky navigation when the first section is intersected
const sectionFirstEl = document.querySelector('main').firstElementChild;

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
            document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    },
);

obs.observe(sectionFirstEl);

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header--container');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});

// Close mobile navigation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (link.classList.contains('nav-list__item')) {
            if (headerEl.classList.contains('nav-open')) {
                headerEl.classList.remove('nav-open');
            }
        }
    });
});
