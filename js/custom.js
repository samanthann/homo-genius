$(document).ready(function(){
    $('#newsletterModal').on('hidden.bs.modal', function () {
        
        window.location.href = 'Index.html';

      });

      $('#newsletter-submit').on('click', function() {
          var email = $('#email-input').val();
          if(ValidateEmail(email)){
            $('#newsletterModal').modal('show');
          }
          else{
              alert("Please enter a valid email address")
          }
      })
})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    return false;
}