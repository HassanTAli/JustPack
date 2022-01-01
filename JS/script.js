let slidePosition = 0

const slides = document.getElementsByClassName('slide-item')
const totalSlides = slides.length

const prev = document.getElementById('prevBtn')
const next = document.getElementById('nextBtn')

const formBtn = document.getElementById('form-btn')
const guestBtn = document.getElementById('guest-btn')
const destinationList = document.getElementById('destination-list')
const guestList = document.getElementById('guest-list')
const destinationListItem = document.querySelectorAll('[id = destination-list-item]')
const destinationPlace = document.getElementById('destination-place')

const downArrow = document.getElementById('sidebar-down-arrow')
const sideBar = document.getElementById('side-bar')
const leftArrow = document.getElementById('sidebar-left-arrow')

const adultGuest = document.getElementById('adult-guest')
const adultNumber = document.getElementById('adult-number')
const minsAdult = document.getElementById('mins-adult')
const plusAdult = document.getElementById('plus-adult')

const childGuest = document.getElementById('child-guest')
const childNumber = document.getElementById('child-number')
const minsChild = document.getElementById('mins-child')
const plusChild = document.getElementById('plus-child')



let numberOfAduils = 1
let numberOfChildren = 0

adultGuest.innerHTML = numberOfAduils
childGuest.innerHTML = numberOfChildren

minsAdult.addEventListener('click', () => {
    numberOfAduils--
    adultNumber.innerHTML = numberOfAduils
    adultGuest.innerHTML = adultNumber.innerHTML
    if (numberOfAduils <= 1) {
        console.log(numberOfAduils)
        numberOfAduils = 1
        adultNumber.innerHTML = numberOfAduils
        adultGuest.innerHTML = adultNumber.innerHTML
    }
})
plusAdult.addEventListener('click', () => {
    numberOfAduils++
    adultNumber.innerHTML = numberOfAduils
    adultGuest.innerHTML = adultNumber.innerHTML
})
minsChild.addEventListener('click', () => {
    numberOfChildren--
    childNumber.innerHTML = numberOfChildren
    childGuest.innerHTML = childNumber.innerHTML
    if (numberOfChildren <= 0) {
        numberOfChildren = 0
        childNumber.innerHTML = numberOfChildren
        childGuest.innerHTML = childNumber.innerHTML
    }
})
plusChild.addEventListener('click', () => {
    numberOfChildren++
    childNumber.innerHTML = numberOfChildren
    childGuest.innerHTML = childNumber.innerHTML
})

prev.addEventListener('click', () => {
    prevSlide()
})

next.addEventListener('click', () => {
    nextSlide()
})
const updateSlidePosition = () => {
    for (let slide of slides) {
        slide.classList.remove('slide-visible')
        slide.classList.add('slide-item-hidden')
    }
    slides[slidePosition].classList.add('slide-visible')
}
const prevSlide = () => {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition--
    }
    updateSlidePosition()
}
const nextSlide = () => {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    updateSlidePosition()
}


downArrow.addEventListener('click', () => {
    sideBar.style.display = 'block'
})
leftArrow.addEventListener('click', () => {
    sideBar.style.display = 'none'
})

formBtn.addEventListener('click', () => {
    destinationList.style.display = "block"
})

guestBtn.addEventListener('click', () => {
    guestList.style.display = "block"
})

window.addEventListener('click', (e) => {
    if (!e.target.matches('.overlay-destination')) {
        destinationList.style.display = "none"
    }
})

for (let i = 0; i < destinationListItem.length; i++) {
    destinationListItem[i].addEventListener('click', (e) => {
        destinationPlace.innerHTML = e.currentTarget.innerHTML
    })
}

function submitForm(event) {
    event.preventDefault();
}

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        guestList.style.display = "block"
    }
    else {
        guestList.style.display = "none"
    }
})


$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});