// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        isValid = false;
    }
    
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        // In a real app, send data to server via fetch()
        this.reset();
    }
});

// Fade-in Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});


