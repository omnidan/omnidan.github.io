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

$(document).ready(function () {
  var sidebarVisible = false;
  var sidebar = $('.left.sidebar');
  sidebar.sidebar({
    onChange: function () {
      var hamburger = document.querySelector('.material-design-hamburger__icon');
      var child = hamburger.childNodes[1].classList;

      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow');
        child.add('material-design-hamburger__icon--from-arrow');
      } else {
        child.remove('material-design-hamburger__icon--from-arrow');
        child.add('material-design-hamburger__icon--to-arrow');
      }
    },
    onShow: function () {
      sidebarVisible = true;
    },
    onHidden: function () {
      sidebarVisible = false;
    }
  });

  $('.burger').click(function () {
    if (!sidebarVisible) sidebar.sidebar('toggle');
  });
});
