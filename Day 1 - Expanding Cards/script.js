images = document.querySelectorAll('img')

images[0].classList.add('active')


for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click', () => {
        images.forEach(element => {
            element.classList.remove('active')
        });
        images[i].classList.add('active')
    })
}