 $(function() {
     $('.open-button').on('click', function() {
         $('.left').addClass('open');
         setTimeout(function() {
             $('.right').addClass('open');

         }, 250);
         setTimeout(function() {
             $('.back').addClass('open');

         }, 350);
         $('.close-button').delay(1000).fadeIn();
     });

     $('.close-button').on('click', function() {
         $('.left').removeClass('open');
         setTimeout(function() {
             $('.right').removeClass('open');
         }, 250);
         setTimeout(function() {
             $('.back').removeClass('open');
         }, 500);
         $('close-button').fadeOut();
     });

 });