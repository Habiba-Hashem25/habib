
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var sub = document.getElementById("sub");



Next1.onclick = function()
{
  Form1.style.display="none";
  Form2.style.display="block";
  Form3.style.display="none";
  Form4.style.display="none";
 

}
Back1.onclick = function()
{
  Form1.style.display="block";
  Form2.style.display="none";
  Form3.style.display="none";
  Form4.style.display="none";

}

Next2.onclick = function()
{
  Form1.style.display="none";
  Form2.style.display="none";
  Form3.style.display="block";
  Form4.style.display="none";



}
sub.onclick = function()
{
  Form1.style.display="none";
  Form2.style.display="none";
  Form3.style.display="none";
  Form4.style.display="block";


}

