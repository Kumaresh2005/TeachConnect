// Student dashboard JS for UI interactions
// Add smooth scroll, card animations, and Q&A logic

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
    // Add more JS for assignment submission, Q&A, etc.
});
