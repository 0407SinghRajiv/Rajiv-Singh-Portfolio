// Mobile navigation toggle
function toggleMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
}

// Close mobile navigation
function closeMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!nav.contains(event.target) && mobileNav.classList.contains('active')) {
        closeMobileNav();
    }
});

// Close mobile nav on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
});