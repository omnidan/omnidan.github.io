/* global Waypoint */

$(window).load(function () {
  // card animation
  $('.card').css('visibility', 'hidden')
  $('.card').each(function () {
    var elem = this
    $(elem).data('projectVisible', false)
    var waypoint = new Waypoint({
      element: elem,
      offset: '95%',
      handler: function () {
        if (!$(elem).data('projectVisible')) {
          $(elem).data('projectVisible', true)
          setTimeout(function () {
            $(elem)
              .transition({
                animation: 'scale',
                interval: 500
              })
          }, 100)
        }
      }
    })
    $(elem).data('waypoint', waypoint)
  })

  var statistic = $('.statistic')
  if (statistic.length > 0) {
    statistic.addClass('grayscale')
    /* eslint-disable */
    new Waypoint({
    /* eslint-enable */
      element: $('.statistics'),
      offset: '95%',
      handler: function () {
        setTimeout(function () {
          $('.statistic').removeClass('grayscale')
        }, 100)
      }
    })
  }
})

$(document).ready(function () {
  var sidebarVisible = false
  var sidebar = $('.left.sidebar')

  sidebar.css('display', 'visible')

  sidebar.sidebar({
    onChange: function () {
      var hamburger = document.querySelector('.material-design-hamburger__icon')
      var child = hamburger.childNodes[1].classList

      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow')
        child.add('material-design-hamburger__icon--from-arrow')
      } else {
        child.remove('material-design-hamburger__icon--from-arrow')
        child.add('material-design-hamburger__icon--to-arrow')
      }
    },
    onShow: function () {
      sidebarVisible = true
    },
    onHidden: function () {
      sidebarVisible = false
    }
  })

  $('.basic.button').click(function () {
    $('.basic.button').removeClass('active')
    $(this).addClass('active')

    var selectedTag = $(this).html()

    $('.card').each(function () {
      $(this).transition('hide')
      $(this).data('waypoint').destroy()
    })

    // $('html, body').animate({ scrollTop: $(document).height() }, 'slow')

    $('.card').each(function () {
      var tag = $(this).find('.meta').html().trim().split('/')[0]
      if ((selectedTag === 'All') || (tag === selectedTag)) {
        $(this)
          .transition({
            animation: 'scale',
            interval: 500
          })
      }
    })
  })

  function toggleSidebar () {
    sidebar.sidebar('toggle')
  }

  $('.burger').click(function () {
    if (!sidebarVisible) toggleSidebar()
  })

  $(document).keyup(function (e) {
    if (e.keyCode === 27 /* ESC */) toggleSidebar()
  })
})
