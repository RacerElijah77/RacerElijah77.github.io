function reveal() {
  // Target all HTML elements that have the .reveal CSS class
  var reveals = document.querySelectorAll('.reveal')

  console.log('Hello world!!')
  console.log('Number of elements that have the reveal tag: ' + reveals.length)

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    console.log('Height of the current viewport: ' + windowHeight)

    //Retreive the distance of a reveal element relative to the top of the page
    var elementTop = reveals[i].getBoundingClientRect().top
    console.log(elementTop)

    /* Add the "active" CSS class to element when that
         elem was scrolled a certain number of pixels
        */
    if (elementTop < windowHeight) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}

/* Initialize event listener to run reveal() function every time the visitor
scrolls the page in ANY direction (b/c of if conditional)*/
window.addEventListener('scroll', reveal)
reveal()
