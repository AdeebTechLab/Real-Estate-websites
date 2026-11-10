let bar = document.querySelector('.bar');
let arrowIcon = document.querySelector('.arrow-icon');
let miniNavBoxes = document.querySelectorAll('.mini-nav-boxes');
let navlinks = document.querySelectorAll('.nav-link');
let cards = document.querySelectorAll('.card');
let box = document.querySelector('.icon-box');
let alertBox = document.querySelector('#custom-alert-box');
let viewIcon = document.querySelector('.view-icon');
let lockBoxes = document.querySelectorAll('.lock-boxes');
const propertiesSection = document.querySelector('.card2-container');
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

setTimeout(function () {
    if (alertBox) {
        alertBox.style.display = 'none'; 
    }
}, 4000);

viewIcon.addEventListener('click', () => {
    let isHiding = false;

    lockBoxes.forEach(lockBox => {
        if (lockBox.classList.contains('add-hide')) {
            lockBox.classList.remove('add-hide');
            viewIcon.classList.replace('fa-angle-down', 'fa-angle-up');      
        } else {
            lockBox.classList.add('add-hide');
            viewIcon.classList.replace('fa-angle-up', 'fa-angle-down');
            isHiding = true;
        }
    });

    if (isHiding) { 
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
        

document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.book-now-btn');

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get data from attributes
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            const location = this.getAttribute('data-location');
            const img = this.getAttribute('data-img');

            // Set data into modal elements
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-price').innerText = price;
            document.querySelector('#modal-location span').innerText = location;
            document.getElementById('modal-img').src = img;
        });
    });
});