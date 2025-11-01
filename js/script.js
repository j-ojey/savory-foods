/**
 * SAVORY BITES RESTAURANT - JAVASCRIPT
 * Main JavaScript file for interactive features
 * Features: Mobile menu, form validation, menu filtering, scroll effects
 */

// ===================================
// MOBILE MENU TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// ===================================
// IMAGE FALLBACK HANDLER
// ===================================
// If an image fails to load, try its data-fallback; if that fails, show a simple placeholder
document.querySelectorAll('img[data-fallback]').forEach(img => {
    const fallback = img.getAttribute('data-fallback');
    img.addEventListener('error', function onError() {
        if (!img.dataset.triedFallback && fallback) {
            img.dataset.triedFallback = 'true';
            img.src = fallback;
        } else {
            // Final fallback: hide broken img and render a placeholder box
            img.style.display = 'none';
            const ph = document.createElement('div');
            ph.className = 'image-fallback';
            ph.setAttribute('role', 'img');
            ph.setAttribute('aria-label', (img.alt || 'Image') + ' unavailable');
            ph.textContent = 'Image unavailable';
            // Try to match container height
            ph.style.width = '100%';
            ph.style.height = img.parentElement?.clientHeight ? img.parentElement.clientHeight + 'px' : '220px';
            img.parentElement && img.parentElement.appendChild(ph);
            img.removeEventListener('error', onError);
        }
    });
});

// ===================================
// SCROLL EFFECTS
// ===================================

// Header shadow on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.feature-card, .showcase-card, .testimonial-card, .value-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// MENU PAGE - CATEGORY FILTER
// ===================================
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuCategories = document.querySelectorAll('.menu-category');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            if (category === 'all') {
                // Show all categories
                menuCategories.forEach(cat => {
                    cat.style.display = 'block';
                });
                menuItems.forEach(item => {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                });
            } else {
                // Hide all categories first
                menuCategories.forEach(cat => {
                    cat.style.display = 'none';
                });
                
                // Show only the selected category
                const selectedCategory = document.getElementById(category);
                if (selectedCategory) {
                    selectedCategory.style.display = 'block';
                }
                
                // Filter items within the category
                menuItems.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
}

// ===================================
// FORM VALIDATION - RESERVATION FORM
// ===================================
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.getElementById('successMessage');
const makeAnotherBtn = document.getElementById('makeAnother');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        let isValid = true;
        
        // Validate first name
        if (firstName === '') {
            showError('firstNameError', 'First name is required');
            isValid = false;
        } else if (firstName.length < 2) {
            showError('firstNameError', 'First name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate last name
        if (lastName === '') {
            showError('lastNameError', 'Last name is required');
            isValid = false;
        } else if (lastName.length < 2) {
            showError('lastNameError', 'Last name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone
        if (phone === '') {
            showError('phoneError', 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate date
        if (date === '') {
            showError('dateError', 'Please select a date');
            isValid = false;
        } else {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showError('dateError', 'Please select a future date');
                isValid = false;
            }
        }
        
        // Validate time
        if (time === '') {
            showError('timeError', 'Please select a time');
            isValid = false;
        }
        
        // Validate guests
        if (guests === '') {
            showError('guestsError', 'Please select number of guests');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            reservationForm.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.style.animation = 'fadeIn 0.5s ease';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

if (makeAnotherBtn) {
    makeAnotherBtn.addEventListener('click', function() {
        reservationForm.reset();
        clearErrors();
        reservationForm.style.display = 'block';
        successMessage.style.display = 'none';
        reservationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ===================================
// FORM VALIDATION - CONTACT FORM
// ===================================
const contactForm = document.getElementById('contactForm');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');
const sendAnotherBtn = document.getElementById('sendAnother');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('contactNameError', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('contactNameError', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('contactEmailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('contactEmailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            showError('subjectError', 'Please select a subject');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            contactForm.style.display = 'none';
            contactSuccessMessage.style.display = 'block';
            contactSuccessMessage.style.animation = 'fadeIn 0.5s ease';
            
            // Scroll to success message
            contactSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', function() {
        contactForm.reset();
        clearErrors();
        contactForm.style.display = 'block';
        contactSuccessMessage.style.display = 'none';
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ===================================
// VALIDATION HELPER FUNCTIONS
// ===================================
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    const inputElement = errorElement.previousElementSibling;
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    if (inputElement) {
        inputElement.classList.add('error');
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    const errorInputs = document.querySelectorAll('input.error, select.error, textarea.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Remove all non-digit characters
    const phoneDigits = phone.replace(/\D/g, '');
    // Check if it has 10 digits (US format) or more
    return phoneDigits.length >= 10;
}

// ===================================
// REAL-TIME INPUT VALIDATION
// ===================================
// Add real-time validation feedback for better UX
const formInputs = document.querySelectorAll('input[required], select[required], textarea[required]');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateInput(this);
    });
    
    input.addEventListener('input', function() {
        // Remove error styling when user starts typing
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            const errorElement = this.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = '';
            }
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    const inputId = input.id;
    let errorMessage = '';
    
    if (value === '') {
        errorMessage = 'This field is required';
    } else {
        // Specific validations based on input type
        if (input.type === 'email' && !isValidEmail(value)) {
            errorMessage = 'Please enter a valid email address';
        } else if (input.type === 'tel' && !isValidPhone(value)) {
            errorMessage = 'Please enter a valid phone number';
        } else if (input.type === 'date') {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                errorMessage = 'Please select a future date';
            }
        }
    }
    
    if (errorMessage) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = errorMessage;
            input.classList.add('error');
        }
    }
}

// ===================================
// DATE INPUT MINIMUM DATE
// ===================================
// Set minimum date for reservation form to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const minDate = `${year}-${month}-${day}`;
    dateInput.setAttribute('min', minDate);
}

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ===================================
// Create scroll to top button dynamically
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
};

// Initialize scroll to top button
createScrollTopButton();

// ===================================
// CONSOLE LOG - DEVELOPMENT INFO
// ===================================
console.log('%c🍽️ Savory Bites Restaurant', 'font-size: 20px; font-weight: bold; color: #d4a574;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #2c2c2c;');
console.log('%cAll interactive features are ready.', 'font-size: 12px; color: #666;');
