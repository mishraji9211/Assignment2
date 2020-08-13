$("#btn_main").on("click", function(){
  $(".dope").text("This is new replaced text")
  //alert($(".dope").text());
  $("#btn_main").val("Double click me");
});


$("#btn_main").on("dblclick", function(){
  $(".dope").text("This is new replaced text")
  $(".dope").text("You'll learn how to replace me");
  $("#btn_main").val("Replace");
});


$("#btn_new").on("click", function(){
  $(".dope").html('<b class="cool"> Hey there this is HTML </b>')
});
