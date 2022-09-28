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
     // alert('done');
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
            console.log(response);
            alert('Success');
      },'json')
      .error(function() {
        //need to check for 401 status here to do something
        alert('There was an error.');
      });
      // alert('done2');
      return false;
   });
});
