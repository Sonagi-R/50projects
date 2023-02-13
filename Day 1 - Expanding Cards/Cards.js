let a = document.getElementById('firstImage')
let b = document.getElementById('secondImage')
let c = document.getElementById('thirdImage')
let d = document.getElementById('fourthImage')
let e = document.getElementById('fifthImage')

const divs = document.querySelectorAll('div')

divs.forEach(image => {
    image.addEventListener('click', {
        removeActiveClasses
        image.classList.add('active')
    })
} )

function removeActiveClasses () {
    divs.forEach(image => {
        image.classList.remove('active')
    })
}