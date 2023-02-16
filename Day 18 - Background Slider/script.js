body = document.querySelector('body')
focusBackground = document.querySelector('#focusBackground')
left = document.querySelector('#left')
right = document.querySelector('#right')

const backgrounds = ["url('lewis-bd-P5VBp8C_F9U-unsplash.jpg')", "url('sam-goodgame-F3yBQrqZzfM-unsplash.jpg')", "url('marek-piwnicki-04P38oaPUsU-unsplash.jpg')", "url('bernd-dittrich-FcVTXqDFBWE-unsplash.jpg')", "url('wolfgang-hasselmann-brmewoW0OcU-unsplash.jpg')"]
let counter = 0

body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${backgrounds[0]}`
focusBackground.style.backgroundImage = `${backgrounds[0]}`

left.addEventListener('click', () => {
    if (counter == 0) {
        counter = 4
    } else {
        counter -= 1
    }
    body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${backgrounds[counter]}`
    focusBackground.style.backgroundImage = `${backgrounds[counter]}`
})

right.addEventListener('click', () => {
    if (counter == 4) {
        counter = 0
    } else {
        counter += 1
    }
    body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${backgrounds[counter]}`
    focusBackground.style.backgroundImage = `${backgrounds[counter]}`
})