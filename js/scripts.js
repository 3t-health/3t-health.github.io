/*!
* Start Bootstrap - Coming Soon v6.0.6 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function(){
   // var $form = $('form');
   // var $form = #('contactForm');
   $("#contactForm").submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // console.log(response);
            // alert('Success');
            $("#submitSuccessMessage").removeClass("d-none");
            $("#submitErrorMessage").addClass("d-none");
            $('input').val('');
      },'json')
      .error(function() {
        $("#submitErrorMessage").removeClass("d-none");
        $("#submitSuccessMessage").addClass("d-none");
      });
      return false;
   });
});
