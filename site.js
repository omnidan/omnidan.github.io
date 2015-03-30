$(document).ready(function () {

  $(".statistic").addClass("grayscale");
  $('#projects').css('visibility', 'hidden');

  $(document).scroll(function (){
    var docScroll = $(document).scrollTop(),
        boxCntOffset = $("#skills").offset().top - $(window).height() + 100;

    if(docScroll >= boxCntOffset ) {
      setTimeout(function () {
        $(".statistic").removeClass("grayscale");
      }, 300);
    }
  });

  $('#projects .card').each(function () {
    var elem = $(this);
    elem.data('projectVisible', false);
    var boxCntOffset = elem.offset().top - $(window).height() + 25;
    $(document).scroll(function (){
      var docScroll = $(document).scrollTop();
      if (docScroll >= boxCntOffset) {
        if (!elem.data('projectVisible')) {
          elem.data('projectVisible', true);
          setTimeout(function () {
            elem
              .transition({
                animation : 'scale',
                interval  : 500
              })
            ;
          }, 300);
        }
      }
    });
  });
});
