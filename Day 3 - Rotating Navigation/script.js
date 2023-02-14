rotate = document.querySelector('#rotate')
revert = document.querySelector('#revert')
main = document.querySelector('#main')

rotate.addEventListener('click', () => {
    main.style.transform = 'rotate(-22deg)'
})

revert.addEventListener('click', () => {
    main.style.transform = 'rotate(0deg)'
})