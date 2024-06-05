(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "/php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);

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
