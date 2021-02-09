class Dashboard {
  constructor ({ jquery, PerfectScrollbar }) {
    this.$jquery = jquery
    this.PerfectScrollbar = PerfectScrollbar
  }

  // Showing sub-menu of active menu on navbar when mobile
  _showNavbarActiveSub () {
    const $ = this.$jquery
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('#navbarMenu .active').addClass('show')
    } else {
      $('#navbarMenu .active').removeClass('show')
    }
  }

  navBarInit () {
    // Initialize PerfectScrollbar of navbar menu for mobile only
    const $ = this.$jquery
    let psNavbar
    if (window.matchMedia('(max-width: 991px)').matches) {
      psNavbar = new this.PerfectScrollbar('#navbarMenu', {
        suppressScrollX: true
      })
    }

    this._showNavbarActiveSub()
    $(window).resize(() => {
      this._showNavbarActiveSub()
    })

    // Initialize backdrop for overlay purpose
    $('body').append('<div class="backdrop"></div>')

    // Showing sub menu of navbar menu while hiding other siblings
    $('.navbar-menu .with-sub .nav-link').on('click', function (e) {
      e.preventDefault()
      $(this).parent().toggleClass('show')
      $(this).parent().siblings().removeClass('show')

      if (window.matchMedia('(max-width: 991px)').matches) {
        psNavbar.update()
      }
    })

    // Closing dropdown menu of navbar menu
    $(document).on('click touchstart', function (e) {
      e.stopPropagation()
      // closing nav sub menu of header when clicking outside of it
      if (window.matchMedia('(min-width: 992px)').matches) {
        const navTarg = $(e.target).closest('.navbar-menu .nav-item').length
        if (!navTarg) {
          $('.navbar-header .show').removeClass('show')
        }
      }
    })

    $('#mainMenuClose').on('click', function (e) {
      e.preventDefault()
      $('body').removeClass('navbar-nav-show')
    })

    $('#sidebarMenuOpen').on('click', function (e) {
      e.preventDefault()
      $('body').addClass('sidebar-show')
    })
  }

  navBarSearch () {
    const $ = this.$jquery
    // Navbar Search
    $('#navbarSearch').on('click', function (e) {
      e.preventDefault()
      $('.navbar-search').addClass('visible')
      $('.backdrop').addClass('show')
    })

    $('#navbarSearchClose').on('click', function (e) {
      e.preventDefault()
      $('.navbar-search').removeClass('visible')
      $('.backdrop').removeClass('show')
    })
  }

  sidebarInit () {
    /// /////// SIDEBAR //////////
    // Initialize this.PerfectScrollbar for sidebar menu
    let psSidebar
    const $ = this.$jquery
    if ($('#sidebarMenu').length) {
      psSidebar = new this.PerfectScrollbar('#sidebarMenu', {
        suppressScrollX: true
      })

      // Showing sub menu in sidebar
      $('.sidebar-nav .with-sub').on('click', function (e) {
        e.preventDefault()
        $(this).parent().toggleClass('show')

        psSidebar.update()
      })
    }

    $('#mainMenuOpen').on('click touchstart', function (e) {
      e.preventDefault()
      $('body').addClass('navbar-nav-show')
    })

    $('#sidebarMenuClose').on('click', function (e) {
      e.preventDefault()
      $('body').removeClass('sidebar-show')
    })

    // hide sidebar when clicking outside of it
    $(document).on('click touchstart', function (e) {
      e.stopPropagation()

      // closing of sidebar menu when clicking outside of it
      if (!$(e.target).closest('.burger-menu').length) {
        const sb = $(e.target).closest('.sidebar').length
        const nb = $(e.target).closest('.navbar-menu-wrapper').length
        if (!sb && !nb) {
          if ($('body').hasClass('navbar-nav-show')) {
            $('body').removeClass('navbar-nav-show')
          } else {
            $('body').removeClass('sidebar-show')
          }
        }
      }
    })
  }

  asideInit () {
    const $ = this.$jquery
    const PerfectScrollbar = this.PerfectScrollbar
    // $('[data-toggle="tooltip"]').tooltip()

    const asideBody = new PerfectScrollbar('.aside-body', {
      suppressScrollX: true
    })

    if ($('.aside-backdrop').length === 0) {
      $('body').append('<div class="aside-backdrop"></div>')
    }

    const mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)')

    function doMinimize (e) {
      if (e.matches) {
        $('.aside').addClass('minimize')
      } else {
        $('.aside').removeClass('minimize')
      }

      asideBody.update()
    }

    mql.addListener(doMinimize)
    doMinimize(mql)

    $('.aside-menu-link').on('click', function (e) {
      e.preventDefault()

      if (window.matchMedia('(min-width: 992px)').matches) {
        $(this).closest('.aside').toggleClass('minimize')
      } else {
        $('body').toggleClass('show-aside')
      }

      asideBody.update()
    })

    $('.nav-aside .with-sub').on('click', '.nav-link', function (e) {
      e.preventDefault()

      $(this).parent().siblings().removeClass('show')
      $(this).parent().toggleClass('show')

      asideBody.update()
    })

    $('body').on('mouseenter', '.minimize .aside-body', function (e) {
      $(this).parent().addClass('maximize')
    })

    $('body').on('mouseleave', '.minimize .aside-body', function (e) {
      $(this).parent().removeClass('maximize')

      asideBody.update()
    })

    $('body').on('click', '.aside-backdrop', function (e) {
      $('body').removeClass('show-aside')
    })
  }
}

export default Dashboard
