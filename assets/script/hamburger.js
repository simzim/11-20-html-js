const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', function(){
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    })
})
