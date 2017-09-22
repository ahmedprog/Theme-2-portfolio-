$(document).ready(function(){
  $("#loading").hide(2000,function(){
    $("body").css("overflow","auto");
      $(this).remove();
    $(".nav-x").animate({left:'10%'});
  });
    
    
  var scrollbutton = $("#scrol-top");
  $(window).scroll(function(){
      if($(this).scrollTop() >= 1000)
      {
        scrollbutton.fadeIn(500);
      }else {
        scrollbutton.fadeOut(500);
      }
    });
    //click on button to scroll top
    scrollbutton.click(function(){
      $("body").animate({scrollTop:0},700);
    });


    $("a").click(function(){
      $('body').animate({
        scrollTop:$($.attr(this , 'href')).offset().top},2000);
        return false;
      });
  });
