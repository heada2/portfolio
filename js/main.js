$(document).ready(function(){
  var page = $("#fullpage").fullpage({
    autoScrolling : true,
    responsiveWidth: 1024,
    responsiveSlides: true,
    fitToSection : false,
    parallax : true,
  });
  $("#scroll_move").click(function(event){         

    event.preventDefault();

    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});
});