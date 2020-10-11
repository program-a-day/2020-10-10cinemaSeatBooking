'use strict'
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

let seatsWrapper = $('.seats')
let seatsCountDisplay = $('.seats-count-display')
let priceSumDisplay = $('.price-sum-display')
let selectedMovieInput = $('#movie-selected-input')
let seats = [...$$('.seats .seat')]
let selectedMoviePrice = parseInt(selectedMovieInput.value)

// Program initialize from localStorage
let invitation = JSON.parse(localStorage.getItem('invitation'))
seats.forEach((x, i) => /selected/.test(invitation[i]) && x.classList.add('selected'))
updateMessag()

// Events
seatsWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateMessag()
        localStorage.setItem('invitation', JSON.stringify(seats.map(x => x.className)))
    }
})
selectedMovieInput.oninput = updateMessag

// Functions
function updateMessag() {
    let selectedCount = seats.filter(x => x.classList.contains('selected')).length
    seatsCountDisplay.innerText = selectedCount
    priceSumDisplay.innerText = selectedCount * parseInt(selectedMovieInput.value)
}

