$(document).ready(function() {
  //hide photos
  $("#clearPhotos").click(function() {
    $(".photo").slideToggle('fast');
  });

  //check off completed tasks
  $("#li1").click(function() {
    $("#li1").toggleClass("done");
  });
  $("#li2").click(function() {
    $("#li2").toggleClass("done");
  });
  $("#li3").click(function() {
    $("#li3").toggleClass("done");
  });
  $("#li4").click(function() {
    $("#li4").toggleClass("done");
  });

  //mark item as needed
  $("#purch1").click(function() {
    $("#shop1").toggleClass("shop");
  });
  $("#purch2").click(function() {
    $("#shop2").toggleClass("shop");
  });
  $("#purch3").click(function() {
    $("#shop3").toggleClass("shop");
  });
  $("#purch4").click(function() {
    $("#shop4").toggleClass("shop");
  });
  $("#purch5").click(function() {
    $("#shop5").toggleClass("shop");
  });
  $("#purch6").click(function() {
    $("#shop6").toggleClass("shop");
  });
  $("#purch7").click(function() {
    $("#shop7").toggleClass("shop");
  });
  $("#purch8").click(function() {
    $("#shop8").toggleClass("shop");
  });
  $("#purch9").click(function() {
    $("#shop9").toggleClass("shop");
  });
  $("#purch10").click(function() {
    $("#shop10").toggleClass("shop");
  });
  $("#purch11").click(function() {
    $("#shop11").toggleClass("shop");
  });

});
