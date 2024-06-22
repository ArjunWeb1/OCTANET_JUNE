// Example of a simple script to handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        form.reset();
    });
});
