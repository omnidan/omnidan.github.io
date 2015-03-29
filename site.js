$(document).ready(function() {

  $(".statistic").addClass("grayscale");
    
  var projectsVisible = false;
  $('#projects').css('visibility', 'hidden');

  $(document).scroll(function(){
    var docScroll = $(document).scrollTop(), 
        boxCntOffset = $("#skills").offset().top - $(window).height() + 100,
        boxCntOffset2 = $("#projects").offset().top - $(window).height();
    
    console.log(docScroll, boxCntOffset, boxCntOffset2);
    
    if(docScroll >= boxCntOffset ) {
      setTimeout(function () {
        $(".statistic").removeClass("grayscale");
      }, 300);
    }
    
    if (docScroll >= boxCntOffset2) {
      if (!projectsVisible) {
        projectsVisible = true;
        setTimeout(function () {
          $('#projects .card')
            .transition({
              animation : 'scale',
              interval  : 200
            })
          ;
        }, 300);
      }
    }
  });
});
  
  
