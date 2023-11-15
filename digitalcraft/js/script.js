'use strict';

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

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
