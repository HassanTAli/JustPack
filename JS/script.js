let slidePosition = 0

const slides = document.getElementsByClassName('slide-item')
const totalSlides = slides.length

const prev = document.getElementById('prevBtn')
const next = document.getElementById('nextBtn')

prev.addEventListener('click', () => {
    prevSlide()
})

next.addEventListener('click', () => {
    nextSlide()
})
const updateSlidePosition = () =>{
    for(let slide of slides) {
        slide.classList.remove('slide-visible')
        slide.classList.add('slide-item-hidden')
    }
    slides[slidePosition].classList.add('slide-visible')
}
const prevSlide = () => {
    if (slidePosition === 0){
        slidePosition = totalSlides -1
    }
    else {
        slidePosition--
    }
    updateSlidePosition()
}
const nextSlide = () => {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    updateSlidePosition()
}