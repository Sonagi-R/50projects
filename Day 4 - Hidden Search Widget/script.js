searchIcon = document.querySelector('#searchIcon')
input = document.querySelector('input')

searchIcon.addEventListener('click', () => {
    input.classList.toggle('hidden')
})