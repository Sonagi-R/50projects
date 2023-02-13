const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let step1 = document.querySelector('.a')
let step2 = document.querySelector('.b')
let step3 = document.querySelector('.c')
let step4 = document.querySelector('.d')

let progress1 = document.querySelector('.x')
let progress2 = document.querySelector('.y')
let progress3 = document.querySelector('.z')


let count = 1

next.addEventListener('click', () => {
    count += 1
    if(count == 2) {
        step2.classList.add('active')
        progress1.classList.add('activeProgress')
        prev.disabled = false
    }  else if (count == 3){
        progress2.classList.add('activeProgress')
        step3.classList.add('active')
    } else if (count == 4) {
        progress3.classList.add('activeProgress')
        step4.classList.add('active')
        next.disabled = true
    } 
})

prev.addEventListener('click', () => {
    count -=1
    if(count == 3) {
        progress3.classList.remove('activeProgress')
        step4.classList.remove('active')
        next.disabled = false
    } else if (count == 2) {
        progress2.classList.remove('activeProgress')
        step3.classList.remove('active')
    } else if (count == 1) {
        step2.classList.remove('active')
        progress1.classList.remove('activeProgress')
        prev.disabled = true
    }
})