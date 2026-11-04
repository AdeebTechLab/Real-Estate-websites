let bar = document.querySelector('.bar');
let arrowIcon = document.querySelector('.arrow-icon');
let miniNavBoxes = document.querySelectorAll('.mini-nav-boxes');
let navlinks = document.querySelectorAll('.nav-link');
let cards = document.querySelectorAll('.card');
let box = document.querySelector('.icon-box');
const loader = document.querySelector('#loader');

bar.addEventListener('click', () => {
    if (arrowIcon.classList.contains('fa-angle-down')) {
        arrowIcon.classList.replace('fa-angle-down', 'fa-angle-up');
        miniNavBoxes.forEach(box => {
            box.classList.add('show');
        })
    } else {
        arrowIcon.classList.replace('fa-angle-up', 'fa-angle-down');
        miniNavBoxes.forEach(box => {
            box.classList.remove('show');
        })
    }
})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.forEach(item => {
            item.classList.remove('selected-li');
        })
        link.classList.add('selected-li')
    })
})

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        let box = card.querySelector('.icon-box');
        box.style.backgroundColor = '#D1A748';
        box.style.color = '#f0fdf4';
    })
})

cards.forEach(card => {
    card.addEventListener('mouseleave', () => {
        let box = card.querySelector('.icon-box');
        box.style.backgroundColor = '#f0fdf4'
        box.style.color = '#D1A748';        
    })
})

window.addEventListener('load', function() {
  setTimeout(function() {
    loader.style.opacity = '0';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 500);

  }, 3000);
});