$(document).ready(function() {
  //add field to instructions
  $("#instructionButton").click(function() {
    $("#instructions").append('<input class="inputBox" type="text" placeholder="Add instructions here.">');
  });
  //add field to ingredients
  $("#ingredientsButton").click(function() {
    $("#ingredients").append('<input class="inputBox" type="text" placeholder="Add ingredients here.">');
  });
});
