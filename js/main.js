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
    var p = document.getElementsByTagName('.jumbotron .inside h1');
    // for (i = 0; i < p.length; i++) {
    //     sr.reveal('.jumbotron .inside h1::nth-letter(i)', { duration: 500});
    // }
    sr.reveal('.jumbotron .inside h2', { duration: 1000 }, 200);
    sr.reveal('.jumbotron #btn-nav a', { duration: 1000 }, 200);

    // Portfolio
    sr.reveal('.sec-intro', { duration: 1000 });
    sr.reveal('#port img', { duration: 1000 });

    // Graphic design
    sr.reveal('#image-grid .sec-intro', { duration: 1000 });
    sr.reveal('#image-grid .image', { duration: 1000 }, 200);

    // Contact
    sr.reveal('#contact-icons a', { duration: 1000}, 200);

    /* Image Modal */
    var modal = $("#myModal");
    var modalImg = $("#img01");
    $(".image").click(function() {
        modal.css("display", "block");
        modalImg.attr("src", this.src);
    });
    var span = $(".close");
    span.click(function() {
        modal.css("display", "none");
    });

    //while(True) {
        $.each($('#second-title').typewrite({
            actions: [
                {type: 'UI/UX Design. '},
                {delay: 1000},

                {remove: {num: 1, type: 'stepped'}},
                {select: {from: 0, to: 13}},
                {delay: 1000},
                {remove: {num: 13, type: 'whole'}},
                {delay: 300},

                {type: 'Front End Development. '},
                {delay: 1000},

                {remove: {num: 1, type: 'stepped'}},
                {select: {from: 0, to: 22}},
                {delay: 1000},
                {remove: {num: 22, type: 'whole'}},
                {delay: 300},

                {type: 'Graphic Design. '},
                {delay: 1000},
                
                {remove: {num: 1, type: 'stepped'}},
                {select: {from: 0, to: 15}},
                {delay: 1000},
                {remove: {num: 15, type: 'whole'}},
                {delay: 300},

                {type: 'Illustration. '},
                {delay: 1000},

                {remove: {num: 1, type: 'stepped'}},
                {select: {from: 0, to: 13}},
                {delay: 1000},
                {remove: {num: 13, type: 'whole'}},
                {delay: 300},

                {type: 'UI/UX Design. '}

            ]
        }));
    //}
    
});
