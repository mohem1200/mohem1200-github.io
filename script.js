document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const team = document.getElementById('team').value;
            const date = document.getElementById('date').value;
            const ticketsNumber = document.getElementById('tickets').value;
            alert(`You have successfully booked ${ticketsNumber} tickets for ${team} on ${date}. Enjoy the game!`);
        });
    }
});
