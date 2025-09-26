// Teacher dashboard JS for UI interactions
// Add smooth scroll, card animations, and upload/post logic

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
    // Add more JS for upload/post actions as needed
});
