// Main JavaScript for Dental Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('open') && 
            !event.target.closest('nav') && 
            !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('open');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate on Scroll Initialization (if you add AOS library)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Testimonial Slider (placeholder - would need a slider library or custom implementation)
    const initTestimonialSlider = () => {
        // This is a placeholder for implementing a testimonial slider with a library like Swiper or Slick
        console.log('Testimonial slider would be initialized here');
        // Example with Swiper:
        // if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-slider')) {
        //     new Swiper('.testimonial-slider', {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //         loop: true,
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //         },
        //         navigation: {
        //             nextEl: '.swiper-button-next',
        //             prevEl: '.swiper-button-prev',
        //         },
        //     });
        // }
    };

    initTestimonialSlider();

    // Contact Form Handling (Static Version - No Server Processing)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            // Clear previous error messages
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(message => {
                if (!message.id) { // Don't remove the main error message container
                    message.remove();
                }
            });
            
            // Validate form fields
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Create error message
                    let fieldError = document.createElement('div');
                    fieldError.classList.add('error-message');
                    fieldError.textContent = `${field.getAttribute('placeholder') || 'This field'} is required`;
                    field.parentNode.insertBefore(fieldError, field.nextSibling);
                } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                    
                    let fieldError = document.createElement('div');
                    fieldError.classList.add('error-message');
                    fieldError.textContent = 'Please enter a valid email address';
                    field.parentNode.insertBefore(fieldError, field.nextSibling);
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Hide the form and show success message
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formError.style.display = 'none';
                
                // In a real implementation, you would either:
                // 1. Use a service like Formspree, Netlify Forms, or similar
                // 2. Set up an email JS service like EmailJS
                // 3. Connect to a serverless function
                
                // Reset form for future use (hidden now but will be available if page is refreshed)
                contactForm.reset();
                
                // For demo, you could log the form data to console
                const formData = new FormData(contactForm);
                console.log('Form submitted with the following data:');
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
            } else {
                // Show the general error message
                formError.style.display = 'block';
                formSuccess.style.display = 'none';
            }
        });
        
        // Reset form field styling on input
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const nextElement = this.nextElementSibling;
                if (nextElement && nextElement.classList.contains('error-message')) {
                    nextElement.remove();
                }
                // Hide general error message when user starts typing
                formError.style.display = 'none';
            });
        });
    }

    // Add fixed header on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
    }

    // Initialize Calendly if available and not already initialized
    if (typeof Calendly !== 'undefined' && document.getElementById('calendly-inline-widget')) {
        if (!document.getElementById('calendly-inline-widget').hasChildNodes()) {
            Calendly.initInlineWidget({
                url: 'https://calendly.com/owenthcarey/test-event',
                parentElement: document.getElementById('calendly-inline-widget'),
                prefill: {},
                utm: {}
            });
        }
    }
}); 