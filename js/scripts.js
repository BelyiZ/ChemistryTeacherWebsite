/**
 * Created by Belyi.Z on 12.03.2017.
 */


// Add smooth scrolling on all links inside the navbar
(function () {
    $(".nav-item a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
})();
