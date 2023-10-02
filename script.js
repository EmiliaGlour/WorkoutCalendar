// Define an array of unique texts for each day
const dayTexts = [
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat A<br><br>Ab Ripper A",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat B<br><br>Ab Ripper B",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C",
    "Sweat C<br><br>Ab Ripper C",
    "Saturday Special",
    "Rest<br>Day",
    "Sweat A<br><br>Ab Ripper A",
    "<br>Sculpt A",
    "Sweat B<br><br>Ab Ripper B",
    "<br>Sculpt B",
    "Sweat C<br><br>Ab Ripper C",
    "<br>Sculpt C"
    // Add text for each day up to Day 90
];

// Function to toggle the 'checked' status of a day
function toggleDay(dayElement) {
    dayElement.classList.toggle('checked');

    // Store the checked days in local storage
    const checkedDays = Array.from(document.querySelectorAll('.day.checked')).map(day => day.querySelector('.number').textContent);
    localStorage.setItem('checkedDays', JSON.stringify(checkedDays));
}

// Function to initialize the calendar
function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    const checkedDays = JSON.parse(localStorage.getItem('checkedDays')) || [];

    for (let dayNumber = 1; dayNumber <= 90; dayNumber++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = `
            <div class="number">${dayNumber}</div>
            <div class="title">${dayTexts[dayNumber - 1]}</div>
        `;

        if (checkedDays.includes(dayNumber.toString())) {
            dayElement.classList.add('checked');
        }

        dayElement.addEventListener('click', () => toggleDay(dayElement));
        calendar.appendChild(dayElement);
    }
}

// Initialize the calendar when the page loads
window.addEventListener('load', initializeCalendar);