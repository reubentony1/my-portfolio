document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links (optional, if you have any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for the profile picture on the homepage
    const profilePic = document.querySelector('.homepage-content .profile-pic');
    if (profilePic) {
        // Add a class that triggers animation after a short delay
        setTimeout(() => {
            profilePic.classList.add('animate-active');
        }, 100); // Small delay to ensure CSS transitions apply
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessages = document.getElementById('form-messages');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;
            let errorMessage = '';

            // Simple validation checks
            if (name === '') {
                errorMessage += 'Please enter your name.<br>';
                isValid = false;
            }
            if (email === '') {
                errorMessage += 'Please enter your email address.<br>';
                isValid = false;
            } else if (!isValidEmail(email)) {
                errorMessage += 'Please enter a valid email address.<br>';
                isValid = false;
            }
            if (message === '') {
                errorMessage += 'Please enter your message.<br>';
                isValid = false;
            }

            // Display messages
            formMessages.style.display = 'block';
            if (isValid) {
                formMessages.classList.remove('error');
                formMessages.classList.add('success');
                formMessages.innerHTML = 'Thank you for your message, ' + name + '! I will get back to you soon.';
                contactForm.reset(); // Clear the form
            } else {
                formMessages.classList.remove('success');
                formMessages.classList.add('error');
                formMessages.innerHTML = errorMessage;
            }
        });
    }

    // Helper function for email validation (can be reused)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});