//JavaScript and JQuery Function to handle Navigation Bar color transitions
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 200) {
      $('.navbar').css('background', '#2f2d31')
      $('.navbar-brand').css('color', '#fdf9f2')
      $('.nav-link').css('color', '#fdf9f2')
    } else {
      $('.navbar').css('background', 'transparent')
      $('.navbar-brand').css('color', '#2f2d31')
      $('.nav-link').css('color', '#2f2d31')
    }
  })
})
