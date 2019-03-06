/*jslint browser: true*/
/*global $*/
$(document).ready(function() {
  var oldSize = parseFloat($("#headertop").css('font-size'));
  var newSize = oldSize  * 2;
  $("#content").hover(
    function() {
     $("#content").animate({ fontSize: newSize}, 200);
    },
    function() {
    $("#content").animate({ fontSize: oldSize}, 200);
   }
 );
});

$(document).ready(function(){
    $('#hidden').slideDown(1000);
});