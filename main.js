document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      this.style.color = 'orange'
    }
    $( document ).ready(function() {
      $("HEADER").click(function() {
        $("HEADER").fadeOut( "FAST", function() {
        });
      });
    });
  })