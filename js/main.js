$(document).ready(function(){

    /* SCROLLING WINDOW */
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });

    /* SCROLLREVEAL */
    // ScrollRevealJs
    window.sr = ScrollReveal();

    // Header
    sr.reveal('.jumbotron .inside h1', { duration: 1000 });
    sr.reveal('.jumbotron .inside h2', { duration: 1000 }, 200);
    sr.reveal('.jumbotron #btn-nav a', { duration: 1000 }, 200);

    // Portfolio
    sr.reveal('.sec-intro', { duration: 1000 });
    sr.reveal('#port img', { duration: 1000 });

    // Graphic design
    sr.reveal('#image-grid .sec-intro', { duration: 1000 });
    sr.reveal('#image-grid img', { duration: 1000 }, 200);

    // Contact
    sr.reveal('#contact-icons a', { duration: 1000}, 200);
});
