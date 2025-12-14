import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm";

// Hero Animation (Fade in logo)
animate(".hero-logo", { opacity: [0, 1], scale: [0.95, 1] }, { duration: 1.5, easing: "ease-out" });

// Carousel Logic
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const item = document.querySelector('.carousel-item');

if (track && prevBtn && nextBtn && item) {
    let scrollAmount = 0;
    const itemWidth = item.clientWidth + 24; // Width + gap (1.5rem = 24px)

    nextBtn.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        scrollAmount += itemWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        track.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener('click', () => {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        track.style.transform = `translateX(-${scrollAmount}px)`;
    });
}

// Hero Animations
animate(
    ".hero-title",
    { opacity: [0, 1], scale: [0.95, 1] },
    { duration: 1.5, easing: "ease-in-out" }
);

animate(
    ".hero-subtitle",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.8, delay: 0.5 }
);

animate(
    ".hero-description",
    { y: [20, 0], opacity: [0, 1] },
    { duration: 0.8, delay: 0.7 }
);

animate(
    ".hero-actions",
    { scale: [0.9, 1], opacity: [0, 1] },
    { duration: 0.5, delay: 1 }
);

// General Scroll Animations
inView("[data-animate='fade-in']", ({ target }) => {
    animate(
        target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, easing: "ease-out" }
    );
});

// Staggered List
inView(".expertise-list", ({ target }) => {
    animate(
        target.querySelectorAll("li"),
        { opacity: [0, 1], x: [-20, 0] },
        { delay: 0.2, duration: 0.5, easing: "ease-out" }
    );
});
