const eventsData = [
    {
        id: 1,
        name: "FutureTech Expo",
        date: "Mar 15, 2025",
        time: "10AM - 5PM",
        location: "Pak-China Centre, Islamabad",
        description: "AI, robotics & software innovations showcase from Pakistan's tech industry"
    },
    {
        id: 2,
        name: "Gaming & Anime Con",
        date: "Jul 13, 2025",
        time: "11AM - 6PM",
        location: "Karachi Arts Council",
        description: "Tournaments, panels & cosplay for gamers and anime enthusiasts"
    },
    {
        id: 3,
        name: "Taste of Karachi",
        date: "Apr 8, 2025",
        time: "1PM - 9PM",
        location: "Frere Hall, Karachi",
        description: "Culinary journey through Karachi's best dishes and fusion creations"
    },
    {
        id: 4,
        name: "Colors of Art",
        date: "Mar 5, 2025",
        time: "4PM - 8PM",
        location: "Alliance Française, Karachi",
        description: "Emerging artists showcase contemporary Pakistani digital & cultural art"
    },
    {
        id: 5,
        name: "Youth Business Summit",
        date: "Apr 2, 2025",
        time: "10AM - 3PM",
        location: "NUST, Islamabad",
        description: "Inspiring young entrepreneurs with success stories and startup ideas"
    }
];

let currentEvents = [...eventsData];

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const eventsGrid = document.getElementById('eventsGrid');
const noResults = document.getElementById('noResults');

function renderEvents(events) {
    eventsGrid.innerHTML = '';

    if (events.length === 0) {
        noResults.style.display = 'block';
        return;
    } else {
        noResults.style.display = 'none';
    }

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        eventCard.innerHTML = `
            <div class="event-date">${event.date}</div>
            <h3 class="event-title">${event.name}</h3>
            <div class="event-time">
                <i class="fa-regular fa-clock" style="color: #0891b2; margin-right: 5px;"></i>
                ${event.time}
            </div>
            <div class="event-location">
                <i class="fa-solid fa-location-dot" style="color: #666; margin-right: 5px;"></i>
                ${event.location}
            </div>
            <p class="event-description">${event.description}</p>
            <button class="register-btn" onclick="registerForEvent(${event.id})">Register Now</button>
        `;

        eventsGrid.appendChild(eventCard);
    });
}


function searchEvents() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        currentEvents = [...eventsData];
    } else {
        currentEvents = eventsData.filter(event =>
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
    }

    renderEvents(currentEvents);
}

searchInput.addEventListener('input', searchEvents);
searchBtn.addEventListener('click', searchEvents);

// Register function
function registerForEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    alert(`Thank you for your interest in "${event.name}"! Registration functionality would be implemented here.`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');

            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(eventsData);
});

// Navbar background and size on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
