document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      this.style.color = 'orange'
    }
    $( document ).ready(function() {
      $("middle").click(function() {
        $("middle").fadeout();( "slow", function() {
        });
      });
    });
  })