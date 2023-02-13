buttons = document.querySelectorAll('button')
applause = document.querySelector('#applause')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        eval(buttons[i].innerText).pause()
        eval(buttons[i].innerText).load()
        eval(buttons[i].innerText).play()
    })
}