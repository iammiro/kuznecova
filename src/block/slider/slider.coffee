slides = document.querySelectorAll('#slides .slide')
currentSlide = 0
slideInterval = setInterval(nextSlide,2000)

nextSlide = ->
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide+1)%slides.length
    slides[currentSlide].className = 'slide showing'