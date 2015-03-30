$(window).load(function () {

  $(".statistic").addClass("grayscale");
  new Waypoint({
    element: $(".statistics"),
    offset: '95%',
    handler: function () {
      setTimeout(function () {
        $(".statistic").removeClass("grayscale");
      }, 100);
    }
  });

  // card animation
  $('.card').css('visibility', 'hidden');
  $('.card').each(function () {
    var elem = this;
    $(elem).data('projectVisible', false);
    new Waypoint({
      element: elem,
      offset: '95%',
      handler: function () {
        console.log('visible');
        if (!$(elem).data('projectVisible')) {
          $(elem).data('projectVisible', true);
          setTimeout(function () {
            $(elem)
              .transition({
                animation : 'scale',
                interval  : 500
              })
            ;
          }, 100);
        }
      }
    });
  });
});
