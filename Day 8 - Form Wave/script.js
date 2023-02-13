emailInput = document.querySelector('#email')
emailWave = document.getElementsByTagName('h2')

emailInput.addEventListener('focus', function () {
    for (let i = 0; i < emailWave.length; i++) {
        setTimeout(() => {
            emailWave[i].style.transform = "translateY(-5px)"
        }, 200 + (i*100)) 
    }
})

emailInput.addEventListener('focusout', function () {
    for (let i = 0; i < emailWave.length; i++) {
        setTimeout(() => {
            emailWave[i].style.transform = "translateY(5px)"
        }, 200 + (i*100)) 
    }
})
