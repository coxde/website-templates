// Set current year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})

// Close mobile navigation
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (link.classList.contains('nav-list-item')) {
            if (headerEl.classList.contains('nav-open')) {
                headerEl.classList.remove('nav-open')
            }
        }
    })
})
