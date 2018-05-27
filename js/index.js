function disappear() {
    var parent = $('#btn-banner').parents('div').last().attr('id');
    //$('#'+parent).css("display", "none");
    //$('#' + parent).fadeOut();
}

// function showCapable() {
//     // $('#banner').css('width', '40vw');
//     var banner = $('#banner');
//     banner.css('width', '40vw');
// }

$(document).ready(function() {
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
});