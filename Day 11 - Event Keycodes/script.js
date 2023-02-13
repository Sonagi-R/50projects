question = document.querySelector('#question')
key = document.querySelector('#key')
keyCode = document.querySelector('#keyCode')
code = document.querySelector('#code')
divs = document.querySelectorAll('div')


window.addEventListener('keypress', (event) => {
    question.style.display = 'none'
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = 'block'
    }
    key.innerText = event.key
    keyCode.innerText = event.keyCode
    code.innerText = event.code
})