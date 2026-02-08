const projects = {
    trendbuy: {
        title: "TrendBuy",
        year: "2024",
        images: [
            "https://github.com/abolfazl-hqq/trend_buy/raw/main/shopappui.png",
            "./trendbuy_mockup.png"
        ],
        overview: "TrendBuy is a modern e-commerce mobile application designed to help users discover and purchase trending products effortlessly. Built with Flutter and Firebase, it provides a seamless shopping experience across both iOS and Android platforms.",
        features: [
            "Browse trending products with real-time updates",
            "Secure user authentication and account management",
            "Shopping cart and wishlist functionality",
            "Multiple payment options integration",
            "Order tracking and history",
            "Product reviews and ratings",
            "Personalized recommendations"
        ],
        technologies: ["Flutter", "Firebase", "Dart", "REST API", "Material Design"],
        role: "As the lead developer, I designed the app architecture, implemented the UI/UX using Flutter's Material Design, integrated Firebase backend services, and optimized the app for performance across different device sizes and Android/iOS versions.",
        github: "https://github.com/abolfazl-hqq/trend_buy"
    },
    cashmaster: {
        title: "CashMaster",
        year: "2024",
        images: [
            "https://github.com/abolfazl-hqq/cash_app/raw/main/mainUI.png"
        ],
        overview: "CashMaster is a sleek and intuitive Flutter application designed to help users keep track of their daily spending with ease. It provides comprehensive financial management tools to monitor expenses, set budgets, and achieve financial goals.",
        features: [
            "Track daily expenses with categorization",
            "Set and monitor budget limits",
            "Visual expense analytics and reports",
            "Multiple currency support",
            "Recurring expense management",
            "Export financial data",
            "Offline-first architecture for reliability"
        ],
        technologies: ["Flutter", "Dart", "Local Storage", "Charts Library", "Material Design"],
        role: "I designed and developed the complete application, including the database schema for expense tracking, implemented the analytics and charting features, and created an intuitive UI that makes financial management accessible to all users.",
        github: "https://github.com/abolfazl-hqq/cash_app"
    },
    tandis_clothing: {
        title: "Tandis Clothing Shop",
        year: "2024",
        images: [
            "https://github.com/abolfazl-hqq/tandis_clothing/raw/main/preview.png"
        ],
        overview: "Tandis Clothing Shop is a full-featured e-commerce platform designed to provide users with a seamless shopping experience for fashion and apparel products. The platform includes advanced filtering, product discovery, and a secure checkout process to maximize customer satisfaction and conversion rates.",
        features: [
            "Responsive product catalog with advanced filtering",
            "User authentication and profile management",
            "Shopping cart with persistent storage",
            "Secure payment integration",
            "Order history and tracking system",
            "Wishlist and product comparison",
            "Search functionality with autocomplete",
            "Customer review and rating system",
            "Admin dashboard for inventory management",
            "Mobile-optimized interface"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT Authentication", "Redux", "Tailwind CSS"],
        role: "I architected the full-stack application, designed the database schema for product management and orders, implemented the frontend using React with Redux for state management, created the backend APIs, integrated payment processing, and developed the admin dashboard for managing products and inventory. I also optimized the platform for mobile devices and implemented SEO best practices.",
        github: "https://github.com/abolfazl-hqq/tandis_clothing"
    }
};

// ============================================
// SLIDER STATE VARIABLES
// ============================================
// Track which slide is currently being displayed and total number of slides
let currentSlide = 0;
let totalSlides = 0;

// ============================================
// SLIDER INITIALIZATION FUNCTION
// ============================================
// Creates the slider HTML dynamically by generating image elements and navigation dots
function initSlider(images) {
    totalSlides = images.length;
    const sliderTrack = document.getElementById('slider-track');
    const sliderDots = document.getElementById('slider-dots');

    // Clear existing slides and dots
    sliderTrack.innerHTML = '';
    sliderDots.innerHTML = '';

    // Loop through each image and create the necessary HTML elements
    images.forEach((image, index) => {
        // Create image element
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Project slide ${index + 1}`;
        img.className = 'slider-image';
        img.loading = 'lazy';

        // Add debug logging to see if images load or fail
        img.onload = function() {
            console.log(`✓ Image ${index + 1} loaded successfully: ${image}`);
            this.classList.add('loaded');
        };

        img.onerror = function() {
            console.error(`✗ Image ${index + 1} failed to load: ${image}`);
            this.style.backgroundColor = '#333';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<span style="color: white; text-align: center;">Image failed to load</span>';
        };

        sliderTrack.appendChild(img);

        // Create navigation dot for each slide
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    // Show slider controls only if there are multiple images
    document.getElementById('slider-prev').style.display = totalSlides > 1 ? 'flex' : 'none';
    document.getElementById('slider-next').style.display = totalSlides > 1 ? 'flex' : 'none';
    document.getElementById('slider-dots').style.display = totalSlides > 1 ? 'flex' : 'none';

    updateSlider();
    console.log(`Slider initialized with ${totalSlides} image(s)`);
}

// ============================================
// SLIDER UPDATE FUNCTION
// ============================================
// Moves the slider to show the current slide and updates the active dot
function updateSlider() {
    const sliderTrack = document.getElementById('slider-track');
    // Use CSS transform to move the entire track to show the current image
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update which dot is highlighted
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    console.log(`Showing slide ${currentSlide + 1} of ${totalSlides}`);
}

// ============================================
// SLIDER NAVIGATION FUNCTIONS
// ============================================
// Move to the next slide (wraps around to first slide if at the end)
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Move to the previous slide (wraps around to last slide if at the beginning)
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Jump to a specific slide by index number
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// ============================================
// PROJECT LOADING FUNCTION
// ============================================
// Loads the project data from the URL and populates the page
function loadProject() {
    // Get the project name from the URL query parameter (e.g., ?project=trendbuy)
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('project');

    console.log(`Loading project: ${projectName}`);

    // Check if project exists in our data
    if (!projectName || !projects[projectName]) {
        console.error(`Project "${projectName}" not found. Redirecting to home...`);
        window.location.href = 'index.html#resume';
        return;
    }

    // Get the selected project's data
    const project = projects[projectName];

    // ---- Update page title and header ----
    document.title = `${project.title} - Project Details | Abolfazl Haghighi`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-year').textContent = project.year;

    // ---- Update project content ----
    document.getElementById('project-overview').textContent = project.overview;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-github').href = project.github;

    // ---- Initialize the image slider with project images ----
    initSlider(project.images);

    // ---- Populate features list ----
    const featuresList = document.getElementById('project-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // ---- Populate technologies/tech stack ----
    const techContainer = document.getElementById('project-tech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    console.log(`Project "${project.title}" loaded successfully`);
}

// ============================================
// DOM INITIALIZATION
// ============================================
// Runs when the page fully loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, initializing...');

    // Load the project based on URL parameter
    loadProject();

    // Attach click event listeners to the slider navigation buttons
    document.getElementById('slider-prev').addEventListener('click', prevSlide);
    document.getElementById('slider-next').addEventListener('click', nextSlide);

    console.log('Event listeners attached');
});
