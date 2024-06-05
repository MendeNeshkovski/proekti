const form = document.querySelector('#contactForm');

form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
});

function contactSubmit(){
    const FirstName = document.querySelector('#name');
    const Email = document.querySelector('#email');
    const Subject = document.querySelector('#subject');
    const Message = document.querySelector('#message');

    console.log(" Inserted Data: ")
    console.log(FirstName);
    console.log(Email);
    console.log(Subject);
    console.log(Message);
}


document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode functionality
    const darkModeButton = document.getElementById('dark-mode');
    const moonIcon = document.querySelector('.dark');
    const sunIcon = document.querySelector('.light');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const pattern = document.querySelector('.pattern');
    const container = document.querySelector('.sorting-container')
  
    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        pattern.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');
    }
  
    // Event listener for dark mode button
    darkModeButton.addEventListener('click', function() {
        // Toggle dark mode
        toggleDarkMode();
        
        // Toggle visibility of moon and sun icons
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    });
  
    // Event listener for sun icon (light mode)
    sunIcon.addEventListener('click', function() {
        // Toggle dark mode
        toggleDarkMode();
        
        // Toggle visibility of moon and sun icons
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    });
});  
