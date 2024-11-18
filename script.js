// Language toggle functionality
function toggleLanguage() {
    const hiElements = document.querySelectorAll('.hi');
    const enElements = document.querySelectorAll('.en');
    const langButton = document.querySelector('.lang-switch');

    hiElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });

    enElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });

    langButton.textContent = langButton.textContent === 'English' ? 'हिंदी' : 'English';
}

// Scroll animation and language toggle for the stats section
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-container');
    const cards = document.querySelectorAll('.service-card');
    const aboutText = document.querySelector('.about-text');
    const testimonials = document.querySelectorAll('.testimonial-card');
    const stats = document.querySelectorAll('.stat-item');

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Intersection Observer for animations (stats and other sections)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Animate number counters when stats section comes into view
                if (entry.target.classList.contains('stat-item') && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Add observer for stats items, cards, about text, and testimonials
    stats.forEach(stat => observer.observe(stat));
    cards.forEach(card => observer.observe(card));
    observer.observe(aboutText);
    testimonials.forEach(testimonial => observer.observe(testimonial));
});

// Animate numbers in the stats section
function animateCounter(statElement) {
    const statNumber = statElement.querySelector('.stat-number');
    const targetNumber = parseInt(statNumber.innerText);
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100);

    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
        }
        
        // Check if the number is 99 to add the percentage sign
        if (targetNumber === 99) {
            statNumber.innerText = currentNumber + "%";
        } else {
            statNumber.innerText = currentNumber + "+";
        }
    }, 50); // Update every 50ms for smooth animation
}



document.addEventListener("DOMContentLoaded", function() {
    const titleHi = document.querySelector(".hero-title.hi");
    const titleEn = document.querySelector(".hero-title.en");
    const subtitleHi = document.querySelector(".hero-subtitle.hi");
    const subtitleEn = document.querySelector(".hero-subtitle.en");

    const titlesHi = [
        "हर समस्या का समाधान",
        "जीवन के हर पहलू को समझें",
        "आपका भविष्य, आपकी दिशा",
        "अपने जीवन को बदलें",
        "नई शुरुआत के लिए तैयार हैं?",
        "ज्योतिष से सटीक मार्गदर्शन",
        "सभी समस्याओं का समाधान",
        "अपने जीवन में सफलता पाएं",
        "हर सवाल का जवाब",
        "विश्वास से भविष्य को जानें"
    ];

    const titlesEn = [
        "Solution to Every Problem",
        "Understand Every Aspect of Life",
        "Your Future, Your Direction",
        "Change Your Life Today",
        "Ready for a New Beginning?",
        "Accurate Guidance Through Astrology",
        "Solutions to All Problems",
        "Achieve Success in Life",
        "Answers to Every Question",
        "Know Your Future with Confidence"
    ];

    const subtitlesHi = [
        "आपकी सभी समस्याओं का ज्योतिषीय समाधान",
        "आपके जीवन की हर राह को सरल बनाना",
        "सटीक भविष्यवाणी और जीवन सलाह",
        "जन्म कुंडली द्वारा जीवन के हर पहलू का विश्लेषण",
        "वास्तु और रत्न उपाय से जीवन को सरल बनाएं",
        "सभी कार्यों में सफलता पाने के उपाय",
        "कुंडली से जीवन का रास्ता जानें",
        "ध्यान और पूजा से जीवन में शांति लाएं",
        "ज्योतिष से जीवन के कठिन प्रश्नों के उत्तर पाएं",
        "जन्मपत्री के आधार पर सही मार्गदर्शन प्राप्त करें"
    ];

    const subtitlesEn = [
        "Astrological Solutions for All Your Problems",
        "Simplifying Every Path in Your Life",
        "Accurate Predictions and Life Guidance",
        "Analyzing Every Aspect of Life Through Birth Chart",
        "Simplifying Life with Vastu and Gemstone Remedies",
        "Solutions for Success in All Endeavors",
        "Discover Your Life Path Through Horoscope",
        "Bring Peace to Your Life with Meditation and Pooja",
        "Get Answers to Life’s Toughest Questions with Astrology",
        "Accurate Guidance Based on Your Birth Chart"
    ];

    let index = 0;

    function changeText() {
        // Fade out the existing title and subtitle
        titleHi.style.opacity = 0;
        titleEn.style.opacity = 0;
        subtitleHi.style.opacity = 0;
        subtitleEn.style.opacity = 0;

        setTimeout(() => {
            // Update the title and subtitle
            titleHi.textContent = titlesHi[index];
            titleEn.textContent = titlesEn[index];
            subtitleHi.textContent = subtitlesHi[index];
            subtitleEn.textContent = subtitlesEn[index];

            // Fade in the new title and subtitle
            titleHi.style.opacity = 1;
            titleEn.style.opacity = 1;
            subtitleHi.style.opacity = 1;
            subtitleEn.style.opacity = 1;
        }, 500);

        // Move to the next index, cycling back if necessary
        index = (index + 1) % titlesHi.length;
    }

    // Change text every 4 seconds
    setInterval(changeText, 4000);  
});

// JavaScript to handle auto-slide functionality
document.addEventListener('DOMContentLoaded', function() {
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonials = Array.from(testimonialsContainer.getElementsByClassName('testimonial-card'));
let currentIndex = 0;

// Function to show testimonials based on current index
function showTestimonials() {
// Hide all testimonials
testimonials.forEach((testimonial, index) => {
    testimonial.style.display = 'none';
});

// Show testimonials based on current index
const visibleTestimonials = getVisibleTestimonials();
for (let i = 0; i < visibleTestimonials.length; i++) {
    testimonials[(currentIndex + i) % testimonials.length].style.display = 'block';
}

// Increment the index for next slide
currentIndex = (currentIndex + 1) % testimonials.length;
}

// Function to determine how many testimonials to show based on screen size
function getVisibleTestimonials() {
const screenWidth = window.innerWidth;

if (screenWidth >= 1024) {
    return [0, 1, 2, 3]; // Show 4 testimonials on desktop
} else {
    return [0]; // Show 1 testimonial on mobile/tablet
}
}

// Set an interval to automatically change testimonials every 5 seconds
setInterval(showTestimonials, 5000);

// Call showTestimonials initially to display the first slide
showTestimonials();

// Adjust the number of visible testimonials when the window is resized
window.addEventListener('resize', showTestimonials);
});


$(document).ready(function(){
    $('.gallery-slider').slick({
        slidesToShow: 4, // Show 4 images in desktop mode
        slidesToScroll: 1,
        autoplay: true,  // Auto slide
        autoplaySpeed: 3000, // Slide every 3 seconds
        arrows: true,     // Enable arrows
        dots: true,       // Enable dots for navigation
        responsive: [
            {
                breakpoint: 768, // For mobile mode
                settings: {
                    slidesToShow: 1, // Show 1 image in mobile view
                    slidesToScroll: 1
                }
            }
        ]
    });
});
