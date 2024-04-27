document.addEventListener('DOMContentLoaded', function() {
    // Handling form submission
    var form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const team = document.getElementById('team').value;
            const date = document.getElementById('date').value;
            const ticketsNumber = document.getElementById('tickets').value;
            alert(`You have successfully booked ${ticketsNumber} tickets for ${team} on ${date}.`);
        });
    }

    // Example navigation button functionality
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1); // Get the target id (removing '#')
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
