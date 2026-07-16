// --- DESTINATIONS DATA SYSTEM ---
const tourPackages = {
    hunza: {
        title: "Majestic Hunza Valley Expedition",
        location: "Gilgit-Baltistan, Pakistan",
        category: "mountains",
        price: "$850",
        duration: "7 Days",
        rating: "4.9",
        image: "assets/dest-hunza.png",
        description: "Embark on an unforgettable journey to Hunza Valley, a land of high peaks, pristine lakes, and rich heritage. Traverse the Karakoram Highway, witness the historic Baltit and Altit Forts, and soak in spectacular views of Rakaposhi and Ladyfinger peaks.",
        itinerary: [
            { day: "1", title: "Arrival in Islamabad & fly to Gilgit", desc: "Arrive in Islamabad, take a breathtaking flight to Gilgit, and drive to Hunza Valley, enjoying scenic views along the way." },
            { day: "2", title: "Explore Karimabad & Baltit Fort", desc: "Visit the 700-year-old Baltit Fort, walk through the cobblestone streets of Karimabad, and try local Hunza cuisines." },
            { day: "3", title: "Attabad Lake & Passu Cones", desc: "Take a boat ride on the crystal-clear turquoise waters of Attabad Lake and marvel at the sharp peaks of Passu Cones." },
            { day: "4", title: "Khunjerab Pass (China Border)", desc: "Excursion to the world's highest paved border crossing, Khunjerab Pass, located at an elevation of 4,693 meters." },
            { day: "5", title: "Hoper Glacier & Golden Peak", desc: "Trek along the edge of Hoper Glacier and capture stunning sunset views of Golden Peak." },
            { day: "6", title: "Eagle's Nest Sunrise & return to Gilgit", desc: "Watch a glorious sunrise over the valley from Eagle's Nest, then travel back to Gilgit for your final evening." },
            { day: "7", title: "Flight to Islamabad & Departure", desc: "Fly back to Islamabad for your onward flight home, marking the end of a lifetime experience." }
        ]
    },
    maldives: {
        title: "Maldives Overwater Luxury Escape",
        location: "Malé Atoll, Maldives",
        category: "beaches",
        price: "$1,890",
        duration: "5 Days",
        rating: "4.8",
        image: "assets/dest-maldives.png",
        description: "Escape to a private luxury island sanctuary where warm, shallow ocean water lap at your doorstep. Indulge in underwater dining, private pool villas, and bespoke coral reef snorkeling experiences in absolute serenity.",
        itinerary: [
            { day: "1", title: "Speedboat Transfer & Sunset Cruise", desc: "Arrive at Malé Airport, transfer via speed boat to your luxury resort, and enjoy an evening sunset cruise with dolphins." },
            { day: "2", title: "Private Reef Snorkeling & Water Sports", desc: "Explore the house reef with a marine biologist, followed by stand-up paddleboarding and jet skiing." },
            { day: "3", title: "Spa Ritual & Underwater Restaurant", desc: "Unwind with an overwater couples massage and dine at an award-winning underwater glass restaurant." },
            { day: "4", title: "Sandbank Picnic & Private Cinema", desc: "Spend the afternoon on a secluded sandbank with a private chef, and enjoy a movie under the stars on the beach." },
            { day: "5", title: "Departure", desc: "Enjoy a final floating breakfast in your private pool before your speed boat transfer back to the airport." }
        ]
    },
    swiss: {
        title: "Swiss Alps Alpine Winter Wonderland",
        location: "Zermatt, Switzerland",
        category: "mountains",
        price: "$1,450",
        duration: "6 Days",
        rating: "4.7",
        image: "assets/dest-swiss.png",
        description: "Experience the epitome of Alpine charm in Zermatt, overlooked by the legendary Matterhorn. Ski down endless powder slopes, take scenic cogwheel trains, and relax in luxurious, heated wooden chalets.",
        itinerary: [
            { day: "1", title: "Arrival in Geneva & Train to Zermatt", desc: "Take a scenic rail journey from Geneva Airport up to the car-free mountain village of Zermatt." },
            { day: "2", title: "Gornergrat Cogwheel Railway", desc: "Ride Europe's highest open-air cogwheel railway for spectacular panoramic views of the Matterhorn glacier." },
            { day: "3", title: "Skiing & Snowboarding Experience", desc: "Spend the day on the world-class ski runs of Zermatt, with ski passes and guides included." },
            { day: "4", title: "Matterhorn Glacier Paradise", desc: "Ascend to the highest cable car station in Europe, exploring the ice palace located 15 meters below the glacier surface." },
            { day: "5", title: "Thermal Spa & Fondue Dinner", desc: "Relax in outdoor hot pools overlooking snow-draped peaks, followed by a traditional Swiss cheese fondue dinner." },
            { day: "6", title: "Departure from Geneva", desc: "Take the train back to Geneva for your departure flight with beautiful memories." }
        ]
    },
    santorini: {
        title: "Romantic Santorini Sunset Odyssey",
        location: "Fira & Oia, Greece",
        category: "beaches",
        price: "$1,200",
        duration: "5 Days",
        rating: "4.9",
        image: "assets/dest-santorini.png",
        description: "Walk the path of myths along whitewashed cliff edges overlooking a submerged volcanic caldera. Sample world-class volcanic wines, swim in hot springs, and witness Oia's world-famous golden hour sunsets.",
        itinerary: [
            { day: "1", title: "Arrival & Oia Walking Tour", desc: "Check in to a traditional cave hotel. In the evening, take a guided walk to Oia's castle for the legendary sunset view." },
            { day: "2", title: "Catamaran Sailing & Hot Springs", desc: "Board a luxury catamaran to sail past the Red and White Beaches, swim in volcanic hot springs, and enjoy a BBQ lunch." },
            { day: "3", title: "Winery Tour & Akrotiri Ruins", desc: "Visit prehistoric archaeological ruins at Akrotiri and taste award-winning Assyrtiko wines at a clifftop estate." },
            { day: "4", title: "Volcanic Caldera Hike", desc: "Embark on the iconic scenic trail hiking from Fira to Oia, offering dramatic cliffside ocean vistas." },
            { day: "5", title: "Departure", desc: "Enjoy your breakfast overlooking the Aegean Sea before taking a private transfer to the airport." }
        ]
    },
    cappadocia: {
        title: "Magical Cappadocia Hot Air Ballooning",
        location: "Göreme, Turkey",
        category: "adventure",
        price: "$980",
        duration: "4 Days",
        rating: "4.8",
        image: "assets/dest-cappadocia.png",
        description: "Watch a sky painted in pastel hues filled with hundreds of hot air balloons rising above fairy chimneys. Stay in premium ancient cave suites carved out of soft volcanic rock, and explore mysterious underground cities.",
        itinerary: [
            { day: "1", title: "Arrival & Turkish Cultural Night", desc: "Transfer from Kayseri Airport to Göreme. Spend the night at a cave hotel and enjoy a traditional Turkish dinner show." },
            { day: "2", title: "Sunrise Balloon Flight & Red Tour", desc: "Rise early for a majestic hot air balloon flight, then explore Göreme Open Air Museum and Devrent Valley." },
            { day: "3", title: "Derinkuyu Underground City & Green Tour", desc: "Hike through Ihlara Valley and explore the multi-level underground city of Derinkuyu, carved out during Byzantine times." },
            { day: "4", title: "ATV Quad Safari & Departure", desc: "Embark on an exciting morning ATV tour through Rose Valley before your transfer to the airport." }
        ]
    },
    kyoto: {
        title: "Kyoto Ancient Heritage & Zen Gardens",
        location: "Kyoto, Japan",
        category: "cultural",
        price: "$1,150",
        duration: "6 Days",
        rating: "4.7",
        image: "assets/dest-kyoto.png",
        description: "Step back in time to the capital of imperial Japan. Walk through tunnels of vermilion torii gates at Fushimi Inari, explore gold-leaf temples, learn the art of the tea ceremony, and spot geishas in Gion's historic streets.",
        itinerary: [
            { day: "1", title: "Arrival in Kyoto & Gion Evening Walk", desc: "Arrive at Kyoto, check in to a traditional Ryokan. Stroll Gion's lantern-lit streets for a chance to spot a Geiko or Maiko." },
            { day: "2", title: "Fushimi Inari Shrine & Kiyomizu-dera", desc: "Hike up the thousands of red Torii gates at Fushimi Inari in the morning, and visit the wooden terrace of Kiyomizu-dera in the afternoon." },
            { day: "3", title: "Golden Pavilion & Zen Gardens", desc: "Explore Kinkaku-ji (Golden Pavilion) and experience zen meditation at Ryōan-ji temple's rock garden." },
            { day: "4", title: "Arashiyama Bamboo Grove & Monkey Park", desc: "Walk through towering bamboo paths, cross the Togetsukyo Bridge, and visit wild macaques at Iwatayama Monkey Park." },
            { day: "5", title: "Traditional Tea Ceremony & Kaiseki", desc: "Learn the intricate steps of tea whisking from a master, and enjoy a luxurious multi-course Kaiseki dinner." },
            { day: "6", title: "Nara Day Trip & Departure", desc: "Visit Nara to bow with bowing deer and view the giant Buddha at Tōdai-ji before departing from Kansai Airport." }
        ]
    }
};

// --- DOM ELEMENTS ---
document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (navList.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });

        // Close mobile menu when nav link clicked
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                menuToggle.querySelector("i").className = "fas fa-bars";
            });
        });
    }

    // --- DESTINATION FILTER SYSTEM ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const destCards = document.querySelectorAll(".destination-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            // Add active class to clicked button
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            destCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                // Add fade out effect
                card.style.opacity = "0";
                card.style.transform = "scale(0.95)";
                
                setTimeout(() => {
                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.style.display = "flex";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        card.style.display = "none";
                    }
                }, 300);
            });
        });
    });

    // --- DETAILS MODAL ---
    const modal = document.getElementById("tourModal");
    const modalClose = document.getElementById("modalClose");
    const exploreButtons = document.querySelectorAll(".explore-btn");

    function openModal(tourId) {
        const tour = tourPackages[tourId];
        if (!tour) return;

        // Populate modal contents
        document.getElementById("modalImg").src = tour.image;
        document.getElementById("modalImg").alt = tour.title;
        document.getElementById("modalTitle").textContent = tour.title;
        document.getElementById("modalLocation").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${tour.location}`;
        document.getElementById("modalDuration").innerHTML = `<i class="far fa-clock"></i> ${tour.duration}`;
        document.getElementById("modalRating").innerHTML = `<i class="fas fa-star"></i> ${tour.rating} Rating`;
        document.getElementById("modalDesc").textContent = tour.description;
        document.getElementById("modalPrice").textContent = tour.price;

        // Populate itinerary
        const itineraryContainer = document.getElementById("modalItinerary");
        itineraryContainer.innerHTML = "";
        tour.itinerary.forEach(item => {
            const dayHtml = `
                <div class="itinerary-day">
                    <div class="day-badge">
                        Day <span>${item.day}</span>
                    </div>
                    <div class="day-info">
                        <div class="day-title">${item.title}</div>
                        <div class="day-content">${item.desc}</div>
                    </div>
                </div>
            `;
            itineraryContainer.innerHTML += dayHtml;
        });

        // Set tour name inside hidden input for booking form
        document.getElementById("bookingTourName").value = tour.title;

        // Open modal
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "initial"; // Restore background scroll
    }

    exploreButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const tourId = btn.getAttribute("data-id");
            openModal(tourId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // --- TRAVEL PLANNER RECOMMENDATION LOGIC ---
    const plannerForm = document.getElementById("plannerForm");
    const plannerResult = document.getElementById("plannerResult");

    if (plannerForm) {
        plannerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const vibe = document.getElementById("vibe").value;
            const duration = document.getElementById("duration").value;
            const budget = document.getElementById("budget").value;

            let recommendedTourId = "hunza"; // Default option
            let reason = "This features a balanced mix of dramatic views and hikes.";

            // Recommendation matching
            if (vibe === "beaches" || vibe === "relaxing") {
                if (budget === "luxury" || duration === "medium") {
                    recommendedTourId = "maldives";
                    reason = "Perfect for standard high-end beach luxury and premium water activities.";
                } else {
                    recommendedTourId = "santorini";
                    reason = "Ideal for iconic coastal hiking, sunsets, and local Greek foods.";
                }
            } else if (vibe === "adventure") {
                if (budget === "budget") {
                    recommendedTourId = "hunza";
                    reason = "Hunza offers spectacular mountain treks and valley hikes at an amazing value.";
                } else {
                    recommendedTourId = "cappadocia";
                    reason = "Includes hot air ballooning, underground cities, and quad safari adventure.";
                }
            } else if (vibe === "cultural") {
                recommendedTourId = "kyoto";
                reason = "Stroll traditional bamboo groves and explore historic imperial temples.";
            } else if (vibe === "mountains") {
                if (budget === "luxury" || budget === "mid-range") {
                    recommendedTourId = "swiss";
                    reason = "Matterhorn cogwheel railways, snow boarding, and cozy chalet stays.";
                } else {
                    recommendedTourId = "hunza";
                    reason = "Incredible soaring peaks, historical forts, and majestic suspension bridges.";
                }
            }

            const tour = tourPackages[recommendedTourId];

            // Render result
            document.getElementById("resultTourName").textContent = tour.title;
            document.getElementById("resultReason").textContent = `Why this matches you: ${reason} (${tour.duration} starting at ${tour.price}).`;
            
            // Set dynamic button to open this specific tour's details
            const viewResultBtn = document.getElementById("viewResultBtn");
            viewResultBtn.setAttribute("data-id", recommendedTourId);
            viewResultBtn.onclick = () => {
                openModal(recommendedTourId);
            };

            // Show result block
            plannerResult.classList.add("active");
            
            // Scroll result into view smoothly
            plannerResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            showToast("Calculated your matches! Scroll down to see recommendation.", "success");
        });
    }

    // --- TESTIMONIALS SLIDER ---
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const dotsContainer = document.getElementById("sliderDots");
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function goToSlide(n) {
        const wrapper = document.querySelector(".slider-wrapper");
        currentSlide = (n + totalSlides) % totalSlides;
        if (wrapper) {
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        updateDots();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    }

    // Auto Play Testimonials every 6 seconds
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);

    // --- FORM HANDLING & TOAST NOTIFICATION ---
    function showToast(message, type = "success") {
        let container = document.getElementById("toastContainer");
        if (!container) {
            container = document.createElement("div");
            container.id = "toastContainer";
            container.className = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Remove toast after 4s
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(-10px)";
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }

    // Booking form in Sidebar
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fullName = document.getElementById("bookingName").value;
            const email = document.getElementById("bookingEmail").value;
            const tour = document.getElementById("bookingTourName").value;

            if (fullName && email) {
                closeModal();
                showToast(`Thank you, ${fullName}! Your inquiry for ${tour} has been received. Our expert will email you details shortly.`, "success");
                bookingForm.reset();
            }
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector("input");
            if (emailInput && emailInput.value) {
                showToast(`Success! You have subscribed to Tatheer Travel newsletter.`, "success");
                emailInput.value = "";
            }
        });
    }

    // Quick Search submission
    const searchForm = document.getElementById("quickSearchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dest = document.getElementById("searchDest").value;
            showToast(`Searching tours matching '${dest}'...`, "success");
            // Auto scroll down to destinations grid
            const destSection = document.getElementById("destinations");
            if (destSection) {
                destSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
