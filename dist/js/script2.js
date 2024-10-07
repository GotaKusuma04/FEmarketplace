//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


//sidebar-menu
document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        const parent = item.closest('.group')
        if (parent.classList.contains('selected')) {
            parent.classList.remove('selected')
        } else {
            document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(i) {
                i.closest('.group').classList.remove('active')
            })
            parent.classList.add('selected')
        }
    })
})


// Slide Foto
const slides = document.getElementById('slides');
        const totalSlides = slides.children.length;
        let index = 0;

        document.getElementById('next').onclick = function () {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        document.getElementById('prev').onclick = function () {
            index = (index - 1 + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});