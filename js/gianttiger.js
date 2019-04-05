$( document ).ready(function() {

    $(document).on("click", '#main-menu #main-menu-toggle', function (e) {	
        $( "#main-menu-ul" ).toggle();
    });

    $(document).on("click", '#thomas', function (e) {
        e.preventDefault();
        $( "#thomas-popup" ).fadeIn(750).show();
        $( "#overlay" ).show();
    });

    var timer;
    var delay = 3000;
    
    $('#thomas').hover(function() {
    
        timer = setTimeout(function() {
            $( "#thomas-popup" ).fadeIn(750).show();
            $( "#overlay" ).show();
        }, delay);

    }, function() {
        clearTimeout(timer);
    });

    $('#overlay, #close1, #close2').on("click", function (e) {
        $( "#overlay" ).hide();
        $( "#hiddentext1" ).hide();
        $( "#hiddentext2" ).hide();
        $(".close-button").hide();
        $( "#thomas-popup" ).hide();
    });
    
    $(document).on("click", '#testimonial1 a', function (e) {
        e.preventDefault();
        $( "#hiddentext1" ).show();
        $( "#overlay" ).show();
        $( "#close1").show();
    });

    $(document).on("click", '#testimonial2 a', function (e) {
        e.preventDefault();
        $( "#hiddentext2" ).show();
        $( "#overlay" ).show();
        $( "#close2").show();
    });
});