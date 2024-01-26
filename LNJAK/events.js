////// SCRIPT FOR ADDING CALENDAR & EVENTS //////

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'listMonth', 
        initialDate: '2024-01',
        height: 'auto',
        eventColor: '#78232a',
        themeSystem: 'bootstrap5',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today',
        },
        events: [
            {
                title: 'EirovīzŠMIJ',
                start: '2024-03-07',
                end: '2024-03-10'
            },
            {
                title: 'Slidošanas Vakars (Skating Evening)',
                url: 'https://www.instagram.com/p/C2M_kdROJcM/',
                start: '2024-01-24T19:30',
            },
            {
                title: 'Valentine\'s Day Lunch',
                url: 'https://latviancentre.org/valentines-day-lunch/',
                start: '2024-02-11T13:00',
                end: '2024-02-11T15:30',
            }
        ]
    });

    calendar.render();
});

////// SCRIPT FOR REGISTERING PEOPLE TO EVENTS //////

document.getElementById('registerButton').addEventListener('click', function () {
    // Show or hide the registration form based on your needs
    document.getElementById('event-registration-form').style.display = 'block';
});

document.getElementById('event-registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const participantEvent = document.getElementById('participantEvent').value;
    const participantName = document.getElementById('participantName').value;
    const participantEmail = document.getElementById('participantEmail').value;

    if (participantEvent && participantName && participantEmail) {
        // Display the participant in the list
        displayParticipant(participantEvent, participantName, participantEmail);

        // Clear the form fields
        document.getElementById('participantEvent').value = '';
        document.getElementById('participantName').value = '';
        document.getElementById('participantEmail').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

function displayParticipant(event, name, email) {
    const participantsList = document.getElementById('participantsList');
    const listItem = document.createElement('li');
    listItem.textContent = `${event} - ${name} - ${email}`;
    participantsList.appendChild(listItem);
}


/// Pictures: /////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
