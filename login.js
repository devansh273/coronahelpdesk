 $(document).ready(function() {
     $(".nav-link").first().addClass("active-1");
     $(".li ").first().addClass("li-button");

     $("ul li a").on("click", function() {
         $(this).addClass('active-1').parent("li").siblings("li").find('a').removeClass('active-1');
         $(this).parent().addClass("li-button").siblings().removeClass('li-button');
     });

     $(".nav-link").on("click", function() {
         $('#' + $(this).data('class')).show()
     });

     $(".sign-in").on("click", function() {
         $("#sign-up").hide();
     });

     $(".sign-up").on("click", function() {
         $("#sign-in").hide();
     });



     $(".fa-eye").hide();

     $(".fa-eye-slash").click(function(e) {
         e.preventDefault();
         var changeTypePass = $(".pass-area[type='password']").attr('password');


         if (changeTypePass == changeTypePass) {

             $(".pass-area[type='password']").attr('type', 'email');
             $(this).hide();
             $(".fa-eye").show();

         }

         $(".fa-eye").click(function(e) {
             e.preventDefault();
             $(".pass-area[type='email']").attr('type', 'password');
             $(this).hide();
             $(".fa-eye-slash").show();
         });


     });

     $(function() {
         $('input').click(function() {
             $(this).attr('placeholder', '');
         });
     });
     var checked = false;
     $("input[type='checkbox']").on("change", function() {
         checked = this.checked;
     });

     $("body").on("click", function() {
         if (checked) {
             $("input[type='checkbox']").prop('checked', false);
         }
     });

 });