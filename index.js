
// Typewriter Effect
const textElement = document.querySelector('.text');
const phrases = ["WINTER AIR SOLUTIONS LTD.", "Your Comfort, Our Priority", "Quality You Can Trust"];
let index = 0;

function autoType() {
    if (textElement) {  // Check if textElement exists
        textElement.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    } else {
        console.error('Element with class "text" not found.');
    }
}

setInterval(autoType, 2000);

// Toggle Mobile Menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.navlist');

if (navToggle && navList) {  // Check if both elements exist
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
    });
} else {
    console.error('Element with class "nav-toggle" or "navlist" not found.');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {  // Check if the target element exists
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Target element "${this.getAttribute('href')}" not found.`);
        }
    });
});

 function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        
        // Simple email validation pattern
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("All fields are required.");
            return false;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }
