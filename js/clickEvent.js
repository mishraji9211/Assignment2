$("#target").hide();

$("#target").on("mouseenter mouseleave", function(){
  //$("p#statement").toggle();
  //$("#box").slideToggle();
  $("#box").fadeToggle(1000);
});

$("#firstBtn").on('click', function(){
  $("#firstBtn").val("Don't Click Me");
  $("#target").show();
});


$("#btn_new").on("click", function(){

});
