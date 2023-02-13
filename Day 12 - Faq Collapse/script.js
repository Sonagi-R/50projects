h3s = document.querySelectorAll('h3')
buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (let k = 0; k < h3s.length; k++) {
            if (i == k) {
                h3s[k].classList.toggle('hidden')
            }
        }
    })
    
}