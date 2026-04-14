/**
 * UMD Sales Club - Main JavaScript
 */

// 1. Page Navigation Logic
// This function hides all sections and only shows the one clicked.
function showPage(pageId) {
    // Select all section elements
    const sections = document.querySelectorAll('section');
    
    // Loop through sections to remove the 'active' class
    sections.forEach(section => {
        section.classList.remove('active');
        // Fallback for browsers that don't use CSS for display toggling
        section.style.display = 'none'; 
    });

    // Show the selected section
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = 'block';
    }

    // Scroll back to the top when switching pages
    window.scrollTo(0, 0);
    
    return false; // Prevents default link behavior
}

// 2. Photo Gallery Logic
let slideIndex = 0;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    // Safety check: ensure slides exist before running
    if (slides.length === 0) return;

    // Wrap around logic (back to start or end)
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Reset all dots to inactive color
    dots.forEach(dot => dot.style.backgroundColor = '#bbb');

    // Show current slide and highlight current dot
    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) {
        dots[slideIndex].style.backgroundColor = '#717171';
    }
}

// 3. Initialization
// This runs once the window finishes loading
window.onload = function() {
    // Ensure "Home" is shown by default
    showPage('home');
    
    // Start the gallery if on the gallery page
    showSlide(slideIndex);
};

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        // Add shadow if scrolled down more than 50px
        header.classList.add('header-scrolled');
    } else {
        // Remove shadow if back at the top
        header.classList.remove('header-scrolled');
    }
});
